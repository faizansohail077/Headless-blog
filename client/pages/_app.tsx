import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Navbar } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto font-sans">
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </div>
  )
}

export default MyApp
