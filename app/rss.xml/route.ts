import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/data";

export function GET() {
  const items = blogPosts
    .map(
      (title) => `
        <item>
          <title>${title}</title>
          <link>https://aaqib.dev/</link>
          <description>${title}</description>
        </item>`
    )
    .join("");
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Aaqib Insights</title>
        <link>https://aaqib.dev/</link>
        <description>React, AI, and software development insights.</description>
        ${items}
      </channel>
    </rss>`;

  return new NextResponse(rss, { headers: { "Content-Type": "application/rss+xml" } });
}
