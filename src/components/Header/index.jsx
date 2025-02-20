import React from "react";
import logo from "@/assets/images/logo.png";
import avatar from "@/assets/images/avatar.png";
import searchIcon from "@/assets/icons/search.svg";
import { DEFAULT_DEVIVER_CLASSNAME } from "@/constants";

const DATE = "Friday July 8th";

export const Header = () => (
  <header className="container flex flex-col lg:flex-row lg:items-center justify-between pt-17.5">
    <div className="flex items-center gap-3">
      <img src={logo} alt="netflix logo image" width={156} height={48} />
      <div className={DEFAULT_DEVIVER_CLASSNAME} />

      <div className="text-medium text-gray-base">{DATE}</div>
    </div>

    <div className="flex items-center gap-10">
      <img src={searchIcon} alt="search icon" width={43} height={43} />
      <img src={avatar} alt="avatar image" width={74} height={74} />
    </div>
  </header>
);
