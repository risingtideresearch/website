import Link from "next/link";
import LogoStacked from "./LogoStacked";
import styles from "./header.module.scss";

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div className={styles.logo}>
        <Link href="/">
          <LogoStacked />
        </Link>
      </div>
      <header>
        <span />
        {children}
      </header>
    </>
  );
}
