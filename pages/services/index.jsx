import { Container, Row, Col } from "reactstrap";
import Header from "../../Components/Header/Header";
import styles from "../home.module.scss";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/hero/hero";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import SideNav from "../../Components/Header/SideNav/SideNav";
import HomeForm from "../../Components/Home Form/HomeForm";
import { Alert } from 'reactstrap';
import Loader from '../../Components/Loader/Loader';
import { useRouter } from 'next/router'
import {NextSeo} from 'next-seo'
import bg from "../../Assets/service-bg.jpg";
import { dehydrate, QueryClient } from '@tanstack/react-query';
import Home from '../../Components/front-end/Home';
import  getServiceContentById  from "../../utils/services/serviceApi";
import useService from "../../utils/services/useServices";
function Services(props) {
  const router = useRouter();
  const {serviceContent ,isLoading, isError,error}= useService("640b5a7c4c4719063b999cb0")
  return (
    <>
      <NextSeo
        title={serviceContent?.metaTitle}
        description={serviceContent?.metaDescription}
        canonical={`https://aadmirals.com${router?.pathname}`}
      />
      {isError || isLoading ? (
        <Loader />
      ) : (
        <>
          <div style={{ overflow: "hidden" }}>
            <SideNav />
            <Floatingbutton />
            <Header />
            {error ? (
              <Alert className="m-0" color="danger">
                {error}
              </Alert>
            ) : null}
            <Container className={`${styles.mainContainer} p-0`} fluid>
              <Hero
                Text={serviceContent?.heroDescription}
                Title={
                  serviceContent?.heroTitle ||
                  "Galveston Cruise Transfer & Shuttle | IAH/Hobby Airport to Glaveston"
                }
                img={serviceContent?.heroImage || bg}
                Form={HomeForm}
              />
            </Container>
            <Home serviceDetail={serviceContent} />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
export async function getStaticProps({ query }) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['service-page', "640b5a7c4c4719063b999cb0"], getServiceContentById("640b5a7c4c4719063b999cb0"))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export default Services;
