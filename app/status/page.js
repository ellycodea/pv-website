import Image from "next/image";
import NavBar from '@/components/NavBar/layout'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-20 overflow-y-auto flex items-center content-center justify-center">
        <p className="font-bold text-red-600 mt-4">This page is under maintenance.</p>
      </main>
    </>
  );
}
