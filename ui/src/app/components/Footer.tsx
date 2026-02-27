import { fetchLastUpdated } from "@/sanity/lib/utils";
import Image from "next/image";

export default async function Footer() {
  const updated = await fetchLastUpdated();
  const time = new Date(updated);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <footer>
      <div>
        <Image
          style={{
            mixBlendMode: "multiply",
          }}
          width={2220}
          height={1890}
          src="/solander-drawing-2.png"
          alt="Line drawing of Solander 38"
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <h3>Connect with us</h3>
            <p>info@risingtideresearch.org</p>
          </div>
          {/* <div>
            <h3>Keep up-to-date with our latest work</h3>
            <p>Subscribe to our newsletter</p>
          </div> */}
          <h3>Updated {time.toLocaleDateString("en-CA", options)}</h3>
        </div>
      </div>
    </footer>
  );
}
