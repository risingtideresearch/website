import { fetchAllUpdates, UpdateWithProgram } from "@/sanity/lib/utils";
import { PortableTextBlock } from "next-sanity";

const SITE_URL = "https://risingtideresearch.org";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function portableTextToPlainText(blocks: PortableTextBlock[]): string {
  return blocks
    .filter((block) => block._type === "block")
    .map((block) =>
      (block.children as Array<{ _type: string; text: string }>)
        .filter((child) => child._type === "span")
        .map((span) => span.text)
        .join("")
    )
    .join("\n\n");
}

function buildItem(update: UpdateWithProgram): string {
  const link =
    update.link?.[0]?.url ??
    (update.programSlug ? `${SITE_URL}/${update.programSlug}` : SITE_URL);

  const description = update.content
    ? escapeXml(portableTextToPlainText(update.content as PortableTextBlock[]))
    : "";

  const pubDate = new Date(update.date).toUTCString();
  const title = escapeXml(update.title);

  return `
    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid isPermaLink="false">${update._id}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
    </item>`;
}

export async function GET() {
  const { data: updates } = await fetchAllUpdates();

  const items = updates.map(buildItem).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Rising Tide Research Foundation</title>
    <link>${SITE_URL}</link>
    <description>Updates from the Rising Tide Research Foundation</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
