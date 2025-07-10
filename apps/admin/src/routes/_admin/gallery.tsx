import ProjectPage from "@/components/pages/4-gallery/project";
import { createFileRoute } from "@tanstack/react-router";

import { z } from "zod";
import { fallback, zodValidator } from "@tanstack/zod-adapter";

const SearchSchema = z.object({
  page: fallback(z.number(), 1).default(1),
  size: fallback(z.number(), 10).default(10),
});

export const Route = createFileRoute("/_admin/gallery")({
  validateSearch: zodValidator(SearchSchema),
  component: ProjectPage,
});
