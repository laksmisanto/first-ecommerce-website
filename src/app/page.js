import Logo from "@/assets/svg/logo";
import Banner from "@/components/banner/Banner";
import Layout from "@/components/layout/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Logo />
      </Layout>
    </>
  );
}
