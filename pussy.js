export default function Home() {
    const scrollLeft = () => {
      document.getElementById('newswire-content').scrollLeft -= 200; // Ajuste conforme necessário
    };
  
    const scrollRight = () => {
      document.getElementById('newswire-content').scrollLeft += 200; // Ajuste conforme necessário
    };
  
    return (
      <>
        <NavBar />
        <main className="pt-20 overflow-y-auto">
          <div className="bg-black w-full mt-4 p-4 flex flex-row">
          <Image src="/banner.webp" width={700} height={700} className="rounded-md"/>
         <div className="ml-8 flex flex-col">
            <p className="font-bold text-4xl">Descobrindo novos mundos!</p>
            <p className="text-slate-500 mt-4">Olá viajante! Você acaba de entrar no site oficial da Perfect Visions, um grupo de desenvolvedores que estão constantemente construindo novos projetos significativos na comunidade de developers, a Perfect Visions inicialmente foi criada para ser o orgão por trás do bot <Link href="https://discord.gg/mQgFvnUaUJ" className="text-blue-500 hover:text-blue-600">Jujuba</Link>, porém ao longo do temponos tornamos um grupo imenso com diversos projetos que de alguma forma significativa ajuda a comunidade de developers em geral.</p>
            <div className="flex flex-row gap-4">
            <Link href="https://discord.gg/mQgFvnUaUJ" className="bg-yellow-500 p-2 rounded w-32 hover:bg-yellow-600 items-center flex content-center justify-center font-bold mt-4 gap-2">Descubra <FiExternalLink/></Link>
            <Link href="https://www.instagram.com/perfectvisions_oficial/" className="bg-pink-600 p-2 rounded w-32 hover:bg-pink-700 items-center flex content-center justify-center font-bold mt-4 gap-2">Instagram <FiExternalLink/></Link>
            <Link href="https://linkai.social/@PerfectVisions" className="bg-green-500 p-2 rounded w-32 hover:bg-green-700 items-center flex content-center justify-center font-bold mt-4 gap-2">Linkai <FiExternalLink/></Link>
         
            </div>
            </div>
          </div>
          <p className="m-2 font-bold">Newswire</p>
          <div className="overflow-x-auto overflow-hidden scrollbar-container">
            <div id="newswire-content" className="flex flex-nowrap w-fit gap-2 p-2 scrollbar-content">
            <div className="w-52  h-60 bg-black rounded-lg flex flex-col border-[0.5px] border-slate-700 hover:bg-slate-900 cursor-pointer">
                <Image src="/banner.webp" className="rounded-t-lg w-full" width={200} height={50}></Image>
                <div className="p-2">
                  <p>Perfect Visions</p>
                  <p className="text-slate-600">Apenas um texto para fins de testes, vamo ver até onde isso vai dar...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-btn left" onClick={scrollLeft}>{'<'}</div>
          <div className="scroll-btn right" onClick={scrollRight}>{'>'}</div>
        </main>
      </>
    );
  }
  