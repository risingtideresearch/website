import Link from "next/link";
import LogoStacked from "./LogoStacked";
import styles from "./header.module.scss";

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header>
      <Link href="/" className={styles.logo}>
        <LogoStacked />
      </Link>
      {children}
    </header>
  );
}
