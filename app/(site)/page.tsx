import Header from "@/components/HomeHeader/Header";
import Main from "@/components/HomeMain/NewestSongs";
import Layout from "../../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Header/>
      <Main/>
    </Layout>
  );
}
