import React from "react";
import { CastInfo } from "./CastInfo";
import { Categories } from "./Categories";
import { StarRating } from "./StarRating";

const TITLE = "Stranger Things";

export const FilmDetails = () => (
  <div className="flex flex-col gap-5">
    <Categories />

    <h1 className="text-6xl font-extrabold animate-fade-in-fast">{TITLE}</h1>

    <CastInfo />

    <p className="text-gray-medium text-2xl max-w-[864px] animate-fade-in-slow">
      In 1980s Indiana, a group of young friends witness supernatural forces and
      secret government exploits. As they search for answers, the children
      unravel a series of extraordinary mysteries.
    </p>

    <StarRating />
  </div>
);
