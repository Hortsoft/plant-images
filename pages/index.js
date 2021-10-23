import Head from "next/head"; 
 
export default function Home() {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Plant Images App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="max-w-sm rounded overflow-hidden shadlow-lg">
        <img src="./images/bird_1.jpg" alt="" className="w-full" />
          </div>


      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/leaf-g.svg" alt="our Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
