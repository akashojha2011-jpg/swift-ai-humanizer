import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://swiftaihumanizer.com";

  const staticRoutes = [
    "",
    "/how-it-works",
    "/how-it-was-made",
    "/bulk-rewriter",
    "/tone-customizer",
    "/ai-detector",
    "/dashboard",
    "/blog",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const mainRoutes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority:
      route === ""
        ? 1.0
        : route === "/bulk-rewriter" ||
          route === "/tone-customizer" ||
          route === "/ai-detector" ||
          route === "/how-it-works" ||
          route === "/how-it-was-made"
        ? 0.9
        : 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...mainRoutes, ...blogRoutes];
}
