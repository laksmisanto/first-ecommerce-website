import Banner from "@/components/Banner/Banner";
import Layout from "@/components/Layout/Layout";
import Offer from "@/components/Offers/Offer";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Offer />
      </Layout>
    </>
  );
}
