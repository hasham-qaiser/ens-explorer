import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="http://localhost:3000/" target={"_blank"}>
        <img className={styles.alchemy_logo} src="/pixelbox.png"></img>
      </a>
      <ConnectButton></ConnectButton>
    </nav>
  );
}
