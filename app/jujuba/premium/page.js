"use client"
import Image from "next/image";
import NavBar from '@/components/NavBar/layout'
import Footer from '@/components/Footer/layout'
import { useState, useEffect } from "react";
export default function Home() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const handleResize = () => {
          const isSmallScreen = window.innerWidth <= 768;
          setIsMobile(isSmallScreen);
        };
    
        handleResize();
      }, []);
  return (
    <>
      <NavBar />
      <main className="pt-20 overflow-y-auto flex items-center content-center justify-center flex-col p-2">
        <div className={`flex flex-row gap-4 mt-4 items-center p-2 ${isMobile ? `` : 'border-slate-800 border-[1px]'} rounded w-full`}>
            {isMobile ? '' : <Image src="/jujuba-render.png" width={220} height={220} className="rounded-md max-w-60 w-full h-full"></Image>}
            <div className="w-full">
            <p className="font-bold text-pink-500" >Jujuba Premium</p>
            <p className="flex max-w-[700px] w-full">Fazendo uma doação generosa você ajuda a manter meus custos online oara que eu possa espalhar alegria em todos os lindos servidores que estou, sem contar que você ganha alguns benefícios em troca!</p>
            </div>
        </div>
        <div className={`h-full flex items-center content-center justify-center ${isMobile ? `flex-col` : `flex-row`} w-full gap-4 p-4 `}>
        <div className="flex flex-col bg-slate-800 rounded h-full min-w-56 max-w-72 w-full p-2">
            <p style={{
              fontSize: "30px"
            }}>⭐ Tier 1</p>
            <p>✅ Sem taxa em apostas</p>
            <p>✅ Insígnia especial no perfil</p>
            <p>✅ Máximo de 4000 bits no daily</p>
            <p>❌ Plano de fundo customizado no perfil</p>
            <p>❌ Máximo de bits aumentado ao votar</p>
            <p>❌ Key para servidor premium</p>
            <p>❌ Ganhe vários bits ao fazer a doação</p>
            <button className="mt-4 p-2 bg-blue-500 rounded hover:bg-blue-700">Escolher Plano</button>
          </div>
    
          <div className=" flex flex-col bg-slate-800 rounded  h-full  min-w-56 max-w-72 w-full p-2">
            <p style={{
              fontSize: "30px"
            }}>⭐ Tier 2</p>
            <p>✅ Sem taxa em apostas</p>
            <p>✅ Insígnia especial no perfil</p>
            <p>✅ Máximo de 7000 bits no daily</p>
            <p>✅ Plano de fundo customizado no perfil</p>
            <p>✅ Ganhe 100 mil bits ao fazer a doação</p>
            <p>❌ Máximo de bits aumentado ao votar</p>
            <p>❌ Key para servidor premium</p>
            
            <button className="mt-4 p-2 bg-blue-500 rounded hover:bg-blue-700">Escolher Plano</button>
          </div>
          <div className="flex flex-col bg-slate-800 rounded  h-full min-w-56 max-w-72 w-full p-2">
            <p style={{
              fontSize: "30px"
            }}>⭐ Tier 3</p>
            <p>✅ Sem taxa em apostas</p>
            <p>✅ Insígnia especial no perfil</p>
            <p>✅ Máximo de 7000 bits no daily</p>
            <p>✅ Plano de fundo customizado no perfil</p>
            <p>✅ Máximo de bits aumentado ao votar</p>
            <p>✅ Ganhe 200 mil bits ao fazer a doação</p>
            <p>❌ Key para servidor premium</p>
            <button className="mt-4 p-2 bg-blue-500 rounded hover:bg-blue-700">Escolher Plano</button>
          </div>
        </div>
        <Footer/>
      </main>
    </>
  );
}
