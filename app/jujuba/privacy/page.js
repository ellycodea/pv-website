"use client"
import Image from "next/image";
import NavBar from '@/components/NavBar/layout'
import { useState, useEffect } from "react";
export default function Home() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const handleResize = () => {
          const isSmallScreen = window.innerWidth <= 768; // Adjust threshold as needed
          setIsMobile(isSmallScreen);
        };
    
        handleResize(); // Run initially to detect on load
      }, []);
  return (
    <>
      <NavBar />
      <main className="pt-20 overflow-y-auto flex items-center content-center justify-center flex-col">
        <div className="flex flex-row gap-4 mt-4 items-center p-2">
            {isMobile ? '' : <Image src="/ju-icon.png" width={220} height={220} className="rounded-md max-w-72 w-full max-h-72 h-full"></Image>}
            <div>
            <p className="font-bold text-pink-500" >Termos de Serviço & Privacidade</p>
        <p className="flex max-w-[700px] w-full">Para garantir um bom funcionamento, solicito algumas informações suas e de outros usuários no Discord. Você pode revisar nossos termos de serviço para entender quais dados são necessários e o que podemos oferecer em troca! Em resumo, ao utilizar nossos serviços, você assume responsabilidade por qualquer conteúdo multimídia enviado, e é estritamente proibido abusar de bugs, bots ou praticar trapaças, o que pode resultar na perda de acesso às funcionalidades. Coletamos informações como ID, nome de usuário, email, IP, avatar, servidores, mensagens e mídia, garantindo a não distribuição desses dados a terceiros. Além disso, pedimos que você não difame ou prejudique a imagem da Jujuba, Perfect Visions ou qualquer outro serviço associado. Reservamo-nos o direito de suspender seu acesso por qualquer motivo. Lembre-se de que não podemos garantir a recuperação de dados perdidos e que você concorda com os termos de uso ao utilizar nossos serviços.</p>
            </div>
        </div>
        <div className="h-full p-11 w-full flex items-center content-center justify-center"><p className="text-red-600">unavailable</p></div>
      </main>
    </>
  );
}
