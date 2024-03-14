import Header from "@/components/HomeHeader/Header";
import Main from "@/components/HomeMain/NewestSongs";
import Layout from "../../components/Layout";
import Title from "@/components/HomeHeader/Title";
import LikedSongs from "@/components/HomeHeader/LikedSongs";


export default function Home() {
  return (
    <Layout>
      <div>
        <Header />
      </div>
      <Main />
    </Layout>
  );
}
