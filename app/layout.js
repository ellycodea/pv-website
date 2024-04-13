import { Inter } from "next/font/google";
import Head from 'next/head'; // Adicionado para manipular as tags head
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Perfect Visions",
  description: "um novo mundo para você explorar, seja seu próprio caminho moral.",
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head>
        {/* Adicione as tags OG aqui */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.icons.icon} />
        <meta property='og:type' content='website'/>
        <meta property='og:url' content='https://perfectvisions.website/'/>
        <meta property='theme-color' content="#000023"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
