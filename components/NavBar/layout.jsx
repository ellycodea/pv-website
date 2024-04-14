"use client"
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-20 bg-black border-b-[0.5px] border-stone-800 flex flex-row p-1 fixed backdrop-blur-2xl ${
        scrolled ? "hidden" : ""
      } `}
    >
      <Link href="/">
        <Image src="/logo.png" width={70} height={26} className="ml-20" draggable={false} />
      </Link>
      <div className="flex items-center justify-center content-center flex-row gap-10 ml-auto">
        <div className="flex flex-row h-full items-center hover:border-b-2 cursor-pointer">
          <Link href="/projects">Projects</Link>
        </div>

        <div className="flex flex-row h-full items-center hover:border-b-2 cursor-pointer">
          <Link href="https://status.perfectvisions.website/">Status</Link>
        </div>
        <div className="flex flex-row h-full items-center hover:border-b-2 cursor-pointer">
          <Link href="/support" className="flex flex-row gap-1 items-center">
            Support <FiExternalLink color="#fff" />
          </Link>
        </div>
        <div className="flex flex-row h-full items-center hover:border-b-2 cursor-pointer">
          <Link href="/" className="flex flex-row gap-1 items-center">
            Store <FiExternalLink color="#fff" />
          </Link>
        </div>
      </div>
      <div className="items-center flex content-center ml-auto mr-4">
        <Link
          href="https://discord.gg/DqaZ58jWsh"
          className="bg-white h-[50%] p-5 rounded text-gray-950 items-center flex content-center font-bold hover:opacity-50 gap-2"
        >
          Discord <FiExternalLink color="#000000" />
        </Link>
      </div>
    </div>
  );
}
