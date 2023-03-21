import styles from "../styles/Home.module.css";
import NFTGallery from "../components/nftGallery";
import NftCollectionInfoDisplay from "../components/nftCollectionDisplay";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wallet Explorer</title>
      </Head>
      <main className={styles.main}>
        <NFTGallery />
      </main>
    </div>
  );
}
