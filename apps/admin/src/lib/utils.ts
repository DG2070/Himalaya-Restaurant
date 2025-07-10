import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Fetch } from "@/lib/fetcher";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function uploadFile(file: File) {
  const formData = new FormData();
  formData?.append("file", file);

  const response = await Fetch({
    method: "POST",
    data: formData,
    url: "/upload-file",
  });

  return response;
}
