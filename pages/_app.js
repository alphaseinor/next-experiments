import '../styles/globals.css'
import HeaderComponent from '../components/HeaderComponent'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderComponent/>
      <Component {...pageProps} />
    </>  
  )
}

export default MyApp
