// /login.tsx

import { useState, useRef, useEffect } from "react";
import { Fetch } from "@/lib/fetcher";
import { useAuth } from "@/provider/use-auth";
import type { JWTS } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import Logo from "@/components/shared/logo";

export const Route = createFileRoute("/login")({
  beforeLoad({ context }) {
    const { auth } = context;
    if (auth?.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
  component: RouteComponent,
});

function KarnaliLogo() {
  return (
    <div className="flex flex-col my-4 items-center ">
      <Logo />
    </div>
  );
}

function RouteComponent() {
  const { isAuthenticated, setJwts } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await Fetch<JWTS>({
        url: "/auth/signin",
        method: "POST",
        data: formData,
      });
      setJwts(res);
    },
    onError: (error: any) => {
      setError(error?.message || "Login failed. Please try again.");
      toast.error(error?.message || "Login failed. Please try again.");
      setFormData({ email: "", password: "" });
      emailRef.current?.focus();
    },
  });

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 3000);
    }
  }, [error]);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="w-full max-w-lg">
        <form
          className="bg-gray-800   rounded-md shadow-sm px-8  pb-6 flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();
            if (
              !formData.email.trim() ||
              !/\S+@\S+\.\S+/.test(formData.email.trim())
            ) {
              setError("Invalid email address.");
              emailRef.current?.focus();
              return;
            }
            if (!formData.password) {
              setError("Password required.");
              passwordRef.current?.focus();
              return;
            }
            setError(null);
            mutation.mutate();
          }}
          autoComplete="on"
        >
          <KarnaliLogo />
          <div className="w-full">
            {error && (
              <div className="text-red-500 text-sm text-center ">{error}</div>
            )}
            <input
              ref={emailRef}
              className="block w-full mb-2 px-3 py-2 border-0 border-b bg-gray-800  placeholder:text-gray-500 text-white   outline-none text-sm transition"
              type="email"
              autoFocus
              autoComplete="username"
              spellCheck={false}
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData((f) => ({ ...f, email: e.target.value }))
              }
              aria-label="Email"
              disabled={mutation.isPending}
            />
            <div className="relative mb-3">
              <input
                ref={passwordRef}
                className="block w-full mb-2 px-3 py-2 border-0 border-b bg-gray-800  placeholder:text-gray-500 text-white   outline-none text-sm transition"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                spellCheck={false}
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, password: e.target.value }))
                }
                aria-label="Password"
                disabled={mutation.isPending}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition"
                tabIndex={0}
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((s) => !s)}
                disabled={mutation.isPending}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <button
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded py-2 text-sm transition mt-1"
              type="submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
