import Head from "next/head";

export function Header() {
  return (
    <div className="flex justify-between my-4 text-sm">
      <p>Salief Lewis</p>
      <div className="flex gap-x-4">
        <a
          href="https://github.com/salieflewis"
          target="_blank"
          className="text-american-silver hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/salieflewis"
          target="_blank"
          className="text-american-silver hover:text-white"
        >
          Twitter
        </a>
      </div>
    </div>
  );
}

function Currently() {
  return (
    // bg-dark-charcoal
    <div className="w-full  p-4 rounded-md text-center border border-american-silver hover:border-raisin-black hover:bg-american-silver hover:text-raisin-black">
      <span className="text-lg">Core Contributor at Public Assembly</span>
    </div>
  );
}

function Projects() {
  return (
    <div className="grid grid-cols-2">
      <button>
        <a href="http://recenteditions.app/" target="_blank">
          <h3>Recent Editions &rarr;</h3>
          <p>Frontend</p>
        </a>
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      {/* Head */}
      <Head>
        <title>Salief Lewis</title>
        <meta name="description" content="Product Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="flex flex-col gap-y-8">
        {/* Currently */}
        <Currently />
      </main>
    </div>
  );
}
