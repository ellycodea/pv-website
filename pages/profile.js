import { useState } from 'react';
import Image from 'next/image';
import { MdError } from "react-icons/md";
import NavBar from '@/components/NavBar/layout';
export default function Home({ initialUserId, imageUrl }) {
  const [userId, setUserId] = useState(initialUserId);
  const [currentImage, setCurrentImage] = useState(imageUrl);
  const [error, setError] = useState(false)

  const handleUpdateImage = async () => {
    try {
      console.log('USER ID', userId)
      const response = await fetch(`/api/profile/${userId}`).catch(err => {})
      if(response.status !== 200) return setError(true)
      const imageUrl = `/api/profile/${userId}`
      setCurrentImage(imageUrl);
      setError(false)
    } catch (error) {
      console.error('Erro ao buscar imagem de perfil:', error);
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
            className='rounded-full p-2 w-full text-black'
            placeholder='Digite um ID de usuário válido'
          />
          <button
            onClick={handleUpdateImage}
            className='p-2 bg-yellow-400 rounded-full text-black font-bold hover:bg-yellow-500'
          >
            Atualizar
          </button>
        </div>
        {error && (
         <p className='p-2 rounded bg-red-600 flex flex-row gap-2 items-center'><MdError /> Aconteceu algo inesperado ao tentar carregar o perfil. </p>
       )}
      </main>
    </>
  );
}


