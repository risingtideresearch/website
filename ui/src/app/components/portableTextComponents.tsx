import React from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "./LinkIcon";
import { createImageUrlBuilder } from "@sanity/image-url";
import { projectId, dataset } from "@/sanity/lib/api";

const builder = createImageUrlBuilder({ projectId, dataset });

function getEmbedUrl(url: string): string | null {
  // YouTube
  const youtube = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}`;

  // Vimeo
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;

  return null;
}

type PortableTextImage = { asset: { _ref: string }; alt?: string; caption?: string };
type VideoEmbed = { url: string; caption?: string };

export const portableTextComponents = {
  marks: {
    link: ({ value, children }: { value?: { href?: string }; children: React.ReactNode }) => {
      const href = value?.href ?? "";
      const isExternal = href.startsWith("http://") || href.startsWith("https://");
      return (
        <a
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
          {isExternal && <ExternalLinkIcon size="0.75em" />}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value: PortableTextImage }) => (
      <figure style={{ margin: 0 }}>
        <Image
          src={builder.image(value).url()}
          alt={value.alt || value.caption || ""}
          width={800}
          height={600}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        {value.caption && <figcaption>{value.caption}</figcaption>}
      </figure>
    ),
    videoEmbed: ({ value }: { value: VideoEmbed }) => {
      const embedUrl = getEmbedUrl(value.url);
      if (!embedUrl) return null;
      return (
        <figure style={{ margin: 0 }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src={embedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      );
    },
  },
};
