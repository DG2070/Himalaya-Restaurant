import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import ApplicationPage from "@/components/pages/2-food-group/food-group";

const SearchSchema = z.object({
  page: fallback(z.number(), 1).default(1),
  size: fallback(z.number(), 10).default(10),
  searchIn: fallback(z.string(), "").default(""),
  searchBy: fallback(z.string(), "").default(""),
  sortBy: fallback(z.string(), "createdAt").default("createdAt"),
  orderBy: fallback(z.string(), "DESC").default("DESC"),
});

export const Route = createFileRoute("/_admin/food-group")({
  validateSearch: zodValidator(SearchSchema),
  component: ApplicationPage,
});
