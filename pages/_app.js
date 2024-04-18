import "./globals.css"

export const metadata = {
  title: "Perfect Visions",
  icons: {
    icon: '/logo.png'
  },
  openGraph: {
    title: "Perfect Visions",
    url: "https://perfectvisions.website/",
    type: "website",
    description: "Olá viajante, aqui está o site oficial da Perfect Visions! Venha descobrir todos os nossos projetos e ficar maravilhado com cada um deles!"
  }
};

export default function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}