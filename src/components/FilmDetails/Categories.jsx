import React from "react";
import { DEFAULT_DEVIVER_CLASSNAME } from "@/constants";

export const Categories = () => {
  const categories = [
    { id: 1, title: "Drama" },
    { id: 2, title: "Thriller" },
    { id: 3, title: "Supernatural" },
  ];

  return (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-5">
      {categories.map(({ id, title }, idx) => (
        <React.Fragment key={id}>
          <li className="text-white font-medium text-32">{title}</li>
          {idx !== categories.length - 1 && (
            <div className={DEFAULT_DEVIVER_CLASSNAME} />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};
