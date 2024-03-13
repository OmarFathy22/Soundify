import * as React from "react";
import Layout from "../../components/Layout";
import Header from "@/components/HomeHeader/Header";
import ArrowRouter from "@/components/HomeHeader/ArrowsRouting";
import AuthButtons from "@/components/HomeHeader/AuthButtons";
import Title from "@/components/HomeHeader/Title";
import SearchInput from "@/components/SearchInput";
import getSongsByTitle from "@/actions/getSongsByTitle";
import SearchContent from "./components/SearchContent";

interface SearchProps {
  searchParams: { title: string }
};


export default async function App({searchParams}: SearchProps) {
  const songs = await getSongsByTitle(searchParams.title);
  return (
    <Layout>
      <div className="bg-gradient-to-b from-emerald-700 p-5 rounded-t-lg ">
        <div className="flex justify-between">
          <ArrowRouter />
          <AuthButtons />
        </div>

        <div>
          <Title text="Search" />
        </div>

        <SearchInput/>


        
      </div>
        <SearchContent songs = {songs}/>
    </Layout>
  );
}
