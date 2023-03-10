import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "../common/UI/Home/Home";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ShipTech-Icon - Home</title>
        <meta name="description" content="Generated by create next app" />
        {/* favicon */}
        <link
          rel="shortcut icon"
          href="/assets/icons/logo.png"
          type="image/x-icon"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="anime.min.js"></script>
      </Head>

      <main className="">
        <HomePage />
      </main>
    </div>
  );
}
