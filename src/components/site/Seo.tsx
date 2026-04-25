import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

const SITE_URL = "https://shreejicancercare.in";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const setMeta = (attr: "name" | "property", key: string, value: string) => {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
};

export const Seo = ({ title, description, canonicalPath = "/", jsonLd, noindex = false }: SeoProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    setMeta("name", "description", description);

    // Robots
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Canonical
    const fullUrl = `${SITE_URL}${canonicalPath}`;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("property", "og:image:alt", title);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Shreeji Cancer Care");
    setMeta("property", "og:locale", "en_IN");

    // Twitter Card
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", OG_IMAGE);
    setMeta("name", "twitter:image:alt", title);
    setMeta("name", "twitter:card", "summary_large_image");

    // JSON-LD
    let script = document.getElementById("page-jsonld") as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "page-jsonld";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [title, description, canonicalPath, jsonLd, noindex]);

  return null;
};