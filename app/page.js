import Image from "next/image";
import NavBar from '@/components/NavBar/layout'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";
export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-20 overflow-y-auto">
      <div className="bg-black w-full mt-4 p-4 flex flex-row ">
         <Image src="/banner.webp" width={700} height={700} className="rounded-md"/>
         <div className="ml-8 flex flex-col">
            <p className="font-bold text-4xl">Descobrindo novos mundos!</p>
            <p className="text-slate-500 mt-4">Olá viajante! Você acaba de entrar no site oficial da Perfect Visions, um grupo de desenvolvedores que estão constantemente construindo novos projetos significativos na comunidade de developers, a Perfect Visions inicialmente foi criada para ser o orgão por trás do bot <Link href="https://discord.gg/mQgFvnUaUJ" className="text-blue-500 hover:text-blue-600">Jujuba</Link>, porém ao longo do temponos tornamos um grupo imenso com diversos projetos que de alguma forma significativa ajuda a comunidade de developers em geral.</p>
            <Link href="https://discord.gg/mQgFvnUaUJ" className="bg-yellow-500 p-2 rounded w-32 hover:bg-yellow-600 items-center flex content-center justify-center font-bold mt-4 gap-2">Descubra <FiExternalLink/></Link>
         </div>
        </div>
      </main>
    </>
  );
}
