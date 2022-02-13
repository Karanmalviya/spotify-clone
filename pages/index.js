import Head from 'next/head'
import Sidebar from '../Components/Sidebar'
import Center from '../Components/Center'
import Player from '../Components/Player'
import { getSession } from 'next-auth/react'
export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Rythm</title>
        <link rel="icon" href="rythmlogo.ico" />
      </Head>
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div className="sticky bottom-0">
        <Player/>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
