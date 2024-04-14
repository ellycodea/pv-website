import { Inter } from "next/font/google";
import Head from 'next/head'; // Adicionado para manipular as tags head
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Perfect Visions",
  description: "um novo mundo para você explorar, seja seu próprio caminho moral.",
  icons: {
    icon: '/logo.png'
  },
  image: '/logo.png',
  color: '#000023',
  url: "https://perfectvisions.website/",
  type: "website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head>
       <meta name="google-adsense-account" content="ca-pub-2048560139347623"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
