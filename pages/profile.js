import { useState } from 'react';
import Image from 'next/image';
import { MdError } from "react-icons/md";
import { LuLoader2 } from "react-icons/lu";
import NavBar from '@/components/NavBar/layout';
export default function Home({ imageUrl }) {
  const [userId, setUserId] = useState('');
  const [currentImage, setCurrentImage] = useState('https://api.perfectvisions.website/users/882593474086572123/profile/view');
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleUpdateImage = async () => {
    setLoading(true)
    try {
      
      const response = await fetch(`/api/profile/${userId}`).catch(err => {})
      if(response.status !== 200) return setError(true)
      const imageUrl = `/api/profile/${userId}`
      setCurrentImage(imageUrl);
      setLoading(false)
      setError(false)
    } catch (error) {
      console.error('Erro ao buscar imagem de perfil:', error);
      setLoading(false)
      setError(true)
    }
  };

  return (
    <>
      <NavBar />
      <main className="p-2 pt-24 overflow-y-auto flex items-center justify-center content-center flex-col gap-4">
        <div className='rounded max-w-[680px] w-full  min-h-[240px] max-h-[640px] h-full bg-white'>
          { (
            <img
              className="rounded w-full h-full"
              src={currentImage}
              alt="Imagem de perfil"
            />
          )}
        </div>
      
        
        <div className='w-full max-w-96 flex flex-row p-2 gap-3'>
          <input
            type='text'
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className='rounded-full p-2  w-full text-black'
            placeholder='Digite um ID de usuário válido'
          />
          <button
            onClick={handleUpdateImage}
            disabled={loading}
            className='p-2 bg-yellow-400 rounded-full items-center justify-center content-center flex w-full max-w-[150px] text-black font-bold hover:bg-yellow-500'
          >
            {loading ? <LuLoader2 className='animate-spin' /> : 'Atualizar'}
          </button>
        </div>
        {error && (
         <p className='p-2 rounded bg-red-600 flex flex-row gap-2 items-center'><MdError /> Aconteceu algo inesperado ao tentar carregar o perfil. </p>
       )}
      </main>
    </>
  );
}


