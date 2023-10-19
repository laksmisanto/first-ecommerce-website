import Banner from "@/components/Banner/Banner";
import BestSeller from "@/components/BestSellers/BestSeller";
import Layout from "@/components/Layout/Layout";
import NewArrival from "@/components/NewArrivals/NewArrival";
import OfferAds from "@/components/OfferAds/OfferAds";
import Offer from "@/components/Offers/Offer";
import SpecialOffer from "@/components/SpecialOffer/SpecialOffer";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Offer />
        <NewArrival />
        <BestSeller />
        <OfferAds />
        <SpecialOffer />
      </Layout>
    </>
  );
}
