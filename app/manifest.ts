import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aaqib Portfolio",
    short_name: "Aaqib",
    description: "Interactive software developer portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#06111f",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
