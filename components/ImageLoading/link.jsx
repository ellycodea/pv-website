"use client"
import { useState } from "react";
import Image from 'next/image';
import Link  from 'next/link';
import { LuLoader2 } from "react-icons/lu";

export default function Home({ username, image, link }) {
    const [isImageLoading, setImageLoading] = useState(true);

    const handleImageLoad = () => {
        setImageLoading(false); // Atualize o estado quando a imagem for carregada
    };

    const a = {
        image,
        username,
        link
    };

    return (
        <Link title={a.username} href={a.link} className="items-center justify-center hover:opacity-50 w-[100vh] min-w-24 max-w-44 h-[100vh] max-h-44  bg-black rounded-lg flex flex-col border-[0.5px] border-slate-700 hover:bg-slate-900 cursor-pointer">
            <Image onLoad={handleImageLoad} alt="Newswire Perfect Visions" key={a.username} draggable={false} src={a.image} className="rounded-lg w-full h-full" width={200} height={500} />

        </Link>
    );
}
