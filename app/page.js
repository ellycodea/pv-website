"use client"
import Image from "next/image";
import NavBar from '@/components/NavBar/layout'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";
import { FaAngleLeft , FaAngleRight } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import Footer from '@/components/Footer/layout'
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
      <main className="pt-20 overflow-y-auto ">
        <div className="bg-black w-full mt-4 p-4 flex flex-row">
         {isMobile ? '' :  <Image draggable={false} src="/banner.webp" width={700} height={700} className="rounded-md" />}
          <div className={isMobile ? "flex flex-col justify-center" : "ml-8 flex flex-col justify-center"}>
            <p className="font-bold text-4xl">Descobrindo novos mundos!</p>
            <p className="text-slate-500 mt-4 w-full">Olá viajante! Você acaba de entrar no site oficial da Perfect Visions, um grupo de desenvolvedores que estão constantemente construindo novos projetos significativos na comunidade de developers, a Perfect Visions inicialmente foi criada para ser o orgão por trás do bot <Link href="https://discord.gg/mQgFvnUaUJ" className="text-blue-500 hover:text-blue-600">Jujuba</Link>, porém ao longo do tempo nos tornamos um grupo imenso com diversos projetos que de alguma forma significativa ajuda a comunidade de developers em geral.</p>
            <div className="flex flex-row gap-4 w-full">
              <Link href="https://discord.gg/mQgFvnUaUJ" className="bg-yellow-500 p-2 rounded w-full max-w-32 hover:bg-yellow-600 items-center flex content-center justify-center font-bold mt-4 gap-2">Descubra <FiExternalLink /></Link>
              <Link href="https://www.instagram.com/perfectvisions_oficial/" className="bg-pink-600 p-2 rounded w-full max-w-32 hover:bg-pink-700 items-center flex content-center justify-center font-bold mt-4 gap-2">Instagram <FiExternalLink /></Link>
              <Link href="https://linkai.social/@PerfectVisions" className="bg-green-500 p-2 rounded  w-full max-w-32 hover:bg-green-700 items-center flex content-center justify-center font-bold mt-4 gap-2">Linkai <FiExternalLink /></Link>
            </div>
          </div>
        </div>
        
        <p className="m-2 ml-6 font-bold">Featured</p>
        <div className="flex flex-row">
          <button onClick={onPrev}><FaAngleLeft /></button>
          <div className="overflow-x-auto scrollbar-container horizontal-scroll-wrapper" ref={slideRef}>
            <div id="newswire-content" className="flex flex-nowrap w-fit gap-2 p-2 scrollbar-content">
              {ar.map(a => (
                <Link title={a.username} href={a.link} className="hover:opacity-50 w-full min-w-24 max-w-52  bg-black rounded-lg flex flex-col border-[0.5px] border-slate-700 hover:bg-slate-900 cursor-pointer">
                  <Image alt="Newswire Perfect Visions" key={a.username} draggable={false} src={a.image} className="rounded-lg w-full h-full" width={200} height={500} />
                  
                </Link>
              ))}
            </div>
          </div>
          <button onClick={onNext} className="ml-auto"><FaAngleRight /></button>
        </div>
        <div className="flex items-center justify-center content-center ">
        <ins class="adsbygoogle"
     style={{
      display:"inline-block",
      width: "728px",
      height:"90px",
      borderRadius: "10px"
     }}
     data-ad-client="ca-pub-2048560139347623"
     data-ad-slot="7569843493"

     ></ins>
        </div>
      </main>
      <Footer/>
      
    </div>
  );
}
