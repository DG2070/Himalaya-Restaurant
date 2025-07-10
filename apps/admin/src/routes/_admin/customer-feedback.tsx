import Client from "@/components/pages/5-customer-feedback/client";
import { createFileRoute } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

const SearchSchema = z.object({
  page: fallback(z.number(), 1).default(1),
  size: fallback(z.number(), 10).default(10),
  searchIn: fallback(z.string(), "").default(""),
  searchBy: fallback(z.string(), "").default(""),
  sortBy: fallback(z.string(), "createdAt").default("createdAt"),
  orderBy: fallback(z.string(), "DESC").default("DESC"),
});

export const Route = createFileRoute("/_admin/customer-feedback")({
  validateSearch: zodValidator(SearchSchema),
  component: Client,
});
