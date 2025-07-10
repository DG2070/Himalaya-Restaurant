import ContactPage from "@/components/pages/6-contact/contact";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_admin/contact")({
  component: ContactPage,
});
