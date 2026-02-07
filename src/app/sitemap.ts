import type { MetadataRoute } from "next";
import { serviceRoutes, siteRoutes } from "@/lib/routes";

const baseUrl = "https://www.gtabatement.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    siteRoutes.home,
    siteRoutes.about,
    siteRoutes.services,
    siteRoutes.resources,
    ...serviceRoutes.map((route) => route.href),
    siteRoutes.contact,
  ];
  return routes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified,
  }));
}
