import Head from 'next/head'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Plant Images App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Plant Images (and more)
          </a>
        </h1>
 

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
         <Image src="/images/Orange_tree.jpg" width="800" height="500" alt="ornage tree" />
           
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/leaf-g.svg" alt="our Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
