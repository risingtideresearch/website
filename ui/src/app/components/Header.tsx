import Link from "next/link";
import LogoStacked from "./LogoStacked";
import styles from "./header.module.scss";
import Logo from "./Logo";

export default function Header({
  children,
  responsiveLogo,
}: {
  children?: React.ReactNode;
  responsiveLogo?: boolean;
}) {
  return (
    <header>
      <Link href="/" className={styles.logo}>
        {responsiveLogo ? (
          <>
            <span className={styles["logo--stacked"]}><LogoStacked /></span>
            <span className={styles["logo--compact"]}><Logo /></span>
          </>
        ) : (
          <LogoStacked />
        )}
      </Link>
      {children}
    </header>
  );
}
