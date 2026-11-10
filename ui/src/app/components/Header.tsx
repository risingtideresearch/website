import Link from "next/link";
import styles from "./header.module.scss";
import Logo from "./Logo";

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header>
      <Link href="/" className={styles.logo}>
        <Logo />
      </Link>
      {children}
    </header>
  );
}
