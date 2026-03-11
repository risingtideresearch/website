import Image from "next/image";
import styles from "./footer.module.scss";
import NewsletterForm from "./NewsletterForm";

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Image
          style={{ mixBlendMode: "multiply" }}
          width={2220}
          height={1890}
          src="/solander-drawing-2.png"
          alt="Line drawing of Solander 38"
        />
        <div className={`${styles.info} footer-info`}>
          <div>
            <h3>Connect with us</h3>
            <p>info@risingtideresearch.org</p>
          </div>
          <div>
            <h3>Keep up-to-date with our latest work</h3>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </footer>
  );
}
