import Dashboard from "@/components/pages/1-dashboard/dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_admin/")({
  component: Dashboard,
});
