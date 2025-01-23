import React from "react";
import { ButtonsList } from "./components/ButtonsList";
import { FilmDetails } from "./components/FilmDetails";
import { PageWrapper } from "./components/Layouts/PageWrapper";
import { PopularSwiperList } from "./components/PopularSwiperList";

const Home = () => (
  <PageWrapper mainClassName="z-10">
    <div className="container text-white pt-24">
      <FilmDetails />

      <ButtonsList />
    </div>

    <div className="flex flex-col lg:flex-row items-center justify-between">
      <PopularSwiperList />

      <div className="flex  items-center w-40 h-16 bg-gray-base mt-3 lg:mt-0 z-10">
        <div className="w-1/4 h-16 bg-red-base" />
        <div className="text-2xl text-white font-medium pl-5">16+</div>
      </div>
    </div>
  </PageWrapper>
);

export default Home;
