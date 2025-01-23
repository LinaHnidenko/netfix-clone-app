import React from "react";
import youtubeIcon from "@/assets/icons/youtube.svg";

export const ButtonsList = () => (
  <div className="flex flex-col lg:flex-row items-center gap-12 py-14 animate-fade-in-slower">
    <button className="flex items-center justify-center gap-5 bg-red-base px-8 py-4 rounded-xl w-68 z-10">
      <span className="text-xl font-medium uppercase">STREAM NOW</span>
      <img src={youtubeIcon} alt="youtube icon" />
    </button>

    <button className="border-2 border-white px-8 py-4 rounded-xl w-68 z-10">
      <span className="text-xl font-medium uppercase">ALL EPISODES</span>
    </button>
  </div>
);
