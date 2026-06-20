import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AI Chatbot",
    short_name: "Chatbot",
    description: "Next.js chatbot template using the AI SDK.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a1a",
    theme_color: "#0a0a1a",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
