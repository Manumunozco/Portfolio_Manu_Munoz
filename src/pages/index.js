import Layout from "@/components/Layout"
import Head from 'next/head'
import Image from "next/image"
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from "@/components/AnimatedText"

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio_Manu_Munoz</title>
        <meta name="description" content="Generated by Manuel Munoz C" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
<div className="flex items-center justify-between w-full">
<div className="w-1/2">
  <Image src={profilePic} alt="manumunoz" className="w-full h-auto" />
</div>
<div className="w-1/2 flex flex-col items-center self-center">
<AnimatedText text="Mensaje de bienvenida" className="!text-6xl !text-left"/>
<p className="my-4 text-base font-medium">
mensaje acerca de mi y mis conocimientos en breve
</p>
</div>
</div>
        </Layout>
      </main>
    </>
  )
}
