import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GithubLogo, TwitterLogo, EnvelopeSimple } from 'phosphor-react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Salief Lewis</title>
        <meta name='description' content='Design Engineer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a
            href='https://twitter.com/recenteditions'
            target='_blank'
            className={styles.card}
          >
            <h3>Recent Editions Bot &rarr;</h3>
            <p>Node.js</p>
          </a>

          <a
            href='https://public---assembly.com/'
            target='_blank'
            className={styles.card}
          >
            <h3>Public Assembly &rarr;</h3>
            <p>Design / Engineering</p>
          </a>

          <a
            href='http://recenteditions.app/'
            target='_blank'
            className={styles.card}
          >
            <h3>Recent Editions &rarr;</h3>
            <p>Frontend</p>
          </a>

          <a
            href='https://magenta-hydrangeas.vercel.app/'
            target='_blank'
            className={styles.card}
          >
            <h3>Magenta Hydrangeas &rarr;</h3>
            <p>Frontend / Photography</p>
          </a>

          <a
            href='https://ethglobal.com/showcase/release-club-ymdy3'
            target='_blank'
            className={styles.card}
          >
            <h3>Release Club &rarr;</h3>
            <p>Hackathon: Frontend</p>
          </a>

          <a
            href='https://mirror.xyz/salief.eth/gIAHwG9qR3SiDz0QJdCZaBw9uCpdngAFuOV4ndtAiko'
            target='_blank'
            className={styles.card}
          >
            <h3>ZSK Redesign &rarr;</h3>
            <p>Product Design / Writing</p>
          </a>

          <a
            href='https://render-hack.vercel.app/'
            target='_blank'
            className={styles.card}
          >
            <h3>Zora API Hack &rarr;</h3>
            <p>Hackathon: Frontend</p>
          </a>

          <a
            href='https://drive.google.com/file/d/1J2vvOuAengRvRxwKj2-SrJb33mVc98Ln/view'
            target='_blank'
            className={styles.card}
          >
            <h3>143 Washington &rarr;</h3>
            <p>Adaptive Reuse</p>
          </a>

          <a
            href='https://salieflewis.notion.site/salieflewis/Connect-Wallet-Design-Exploration-e720b5c4859049cda1e998550224af80'
            target='_blank'
            className={styles.card}
          >
            <h3>Connect Wallet Design &rarr;</h3>
            <p>Product Design / Writing</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href='https://github.com/salieflewis' target='_blank'>
          <GithubLogo size={24} />
        </a>
        <a href='https://twitter.com/salieflewis' target='_blank'>
          <TwitterLogo size={24} />
        </a>
        <a href='mailto:salieflewis@gmail.com' target='_blank'>
          <EnvelopeSimple size={24} />
        </a>
      </footer>
    </div>
  );
}
