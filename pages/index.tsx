import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Salief Lewis</title>
        <meta name='description' content='Product Design & Engineering' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
        <div className='grid'>
          <a
            href='https://twitter.com/recenteditions'
            target='_blank'
            className='card'
          >
            <h3>Recent Editions Bot</h3>
            <p>Node.js</p>
          </a>

          <a
            href='https://public---assembly.com/'
            target='_blank'
            className='card'
          >
            <h3>Public Assembly</h3>
            <p>Design / Engineering</p>
          </a>

          <a
            href='http://recenteditions.app/'
            target='_blank'
            className='card'
          >
            <h3>Recent Editions</h3>
            <p>Frontend</p>
          </a>

          <a
            href='https://magenta-hydrangeas.vercel.app/'
            target='_blank'
            className='card'
          >
            <h3>Magenta Hydrangeas</h3>
            <p>Frontend / Photography</p>
          </a>

          <a
            href='https://ethglobal.com/showcase/release-club-ymdy3'
            target='_blank'
            className='card'
          >
            <h3>Release Club</h3>
            <p>Hackathon: Frontend</p>
          </a>

          <a
            href='https://mirror.xyz/salief.eth/gIAHwG9qR3SiDz0QJdCZaBw9uCpdngAFuOV4ndtAiko'
            target='_blank'
            className='card'
          >
            <h3>ZSK Redesign</h3>
            <p>Product Design / Writing</p>
          </a>

          <a
            href='https://drive.google.com/file/d/1J2vvOuAengRvRxwKj2-SrJb33mVc98Ln/view'
            target='_blank'
            className='card'
          >
            <h3>143 Washington</h3>
            <p>Adaptive Reuse</p>
          </a>

          <a
            href='https://salieflewis.notion.site/salieflewis/Connect-Wallet-Design-Exploration-e720b5c4859049cda1e998550224af80'
            target='_blank'
            className='card'
          >
            <h3>Connect Wallet Design</h3>
            <p>Product Design / Writing</p>
          </a>
        </div>
      </main>
    </div>
  );
}
