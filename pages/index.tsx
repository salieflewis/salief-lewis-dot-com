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

function About() {
  return (
    <p className="text-lg">Currently a core contributor at Public Assembly</p>
  );
}

function Projects() {
  return (
    <>
      <div className="p-4 text-center rounded border border-american-silver">
        <button>
          <a href="http://recenteditions.app/" target="_blank">
            <h3>Recent Editions {"\u2197"}</h3>
            <p>Frontend</p>
          </a>
        </button>
      </div>
      <div className="p-4 text-center rounded border border-american-silver">
        <button>
          <a href="http://flexible.vercel.app/" target="_blank">
            <h3>Flexible {"\u2197"}</h3>
            <p>Frontend</p>
          </a>
        </button>
      </div>
    </>
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

      <main className="gap-y-8">
        {/* About */}
        <About />
        <div className="grid grid-cols-2">
          {/* Projects */}
          <Projects />
        </div>
      </main>
    </div>
  );
}
