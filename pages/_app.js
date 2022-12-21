import '../styles/globals.css'
import "../styles/index.scss"

import "../styles/Header.css"
import "../styles/override.scss"
import "../styles/reactstrap.css"
import "../styles/Testimonial.css"
import "react-alice-carousel/lib/alice-carousel.css";


import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";

import store from "../redux/store";
import News from '../Components/News/News';
import { DefaultSeo } from 'next-seo'



function MyApp({ Component, pageProps }) {
  const options = {
    timeout: 5000,
    position: positions.TOP_CENTER,
  };
  return (
     
      <Provider store={store}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://aadmirals.com/',
          site_name: 'Houston Limo Services | AAdmirals Travel& Transportation',
        }}
        
      />
        <AlertProvider template={AlertTemplate} {...options}>
          
          <News />
          <Component {...pageProps} />
        </AlertProvider>
      </Provider>
 
  )
}

export default MyApp
