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
          sizes="304px"
          src="/solander-drawing-2.png"
          alt="Line drawing of Solander 38"
        />
        <div className={`${styles.info} footer-info`}>
          <div>
            <h6>Connect with us</h6>
            <p>info@risingtideresearch.org</p>
          </div>
          <div>
            <h6>Keep up-to-date with our latest work</h6>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </footer>
  );
}
