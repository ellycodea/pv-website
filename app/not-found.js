"use client"
import Image from "next/image";
import NavBar from '@/components/NavBar/layout'
import Link from 'next/link'
import { SiAdblock } from "react-icons/si";
import { useRef, useState, useEffect } from "react";
import { LuLoader2 } from "react-icons/lu";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setLoading] = useState(true)

  const slideRef = useRef()

  const onNext = () => {
    const scrollStep = 100; // Ajuste conforme necessário
    slideRef.current.scrollLeft += scrollStep;

  };

  const onPrev = () => {
    const scrollStep = -100; // Ajuste conforme necessário
    slideRef.current.scrollLeft += scrollStep;
 
  };

  const ar = [
    {
      image: "/ju-icon.png",
      username: "Jujuba",
      link: "https://discord.gg/mQgFvnUaUJ"
    },
    {
      "image": "/hostza.png",
      "username": "hostza",
      "link": "https://hostza.app/"
    },
    {
        "image": "/luckky.png",
        "username": "liftzera",
        "link": "https://discord.gg/2uGFtGfpP6"
    },
    {
        "image": "/banner.webp",
        "username": "Perfect Visions",
        "link": "https://perfectvisions.website/projects"
    },
    {
      image: "/neko.webp",
      username: "Neko Bot (Em Breve)",
      link: "https://perfectvisions.website/projects"
    },
    {
      image: "/polar.webp",
      username: "Polar Bot",
      link: "https://discord.com/invite/W5cxqvXwmy"
    },
    {
      image: "/finn.png",
      username: "Finn Bot",
      link: "https://discord.gg/2WckKPtG"
    }

    
]


  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 768; // Adjust threshold as needed
      setIsMobile(isSmallScreen);
    };

    handleResize(); // Run initially to detect on load
    setLoading(false)
  }, []);
  return (
    <div className="flex flex-col">
      {isLoading ? <div className="w-screen h-screen bg-black fixed flex items-center justify-center content-center">
        <LuLoader2 className="animate-spin"/>
      </div> : ''}
      <NavBar />
      <main className="pt-20 flex flex-row items-center justify-center content-center w-full h-screen gap-4">
        {isMobile ? '' : <Image src="/block.png" width={150} height={150}></Image>}
        <div className="flex flex-col">
            <strong>Ooops! Essa página não existe!</strong>
            <p className="w-full max-w-96 min-w-28">Parece que você tentou acessar uma página inexistente, por favor volte para página inicial</p>
            <Link href="/" className="bg-yellow-400 hover:bg-yellow-600 p-2 rounded text-black w-full max-w-32 mt-4">Página Inicial</Link>
        </div>
      </main>
    </div>
  );
}
