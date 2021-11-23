import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <div>
          <p>Hello </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>It's a footer</p>
      </footer>
    </div>
  );
}
