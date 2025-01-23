import React from "react";
import cn from "classnames";
import { DEFAULT_DEVIVER_CLASSNAME } from "@/constants";

export const CastInfo = () => {
  const info = [
    { id: 1, title: "2019" },
    { id: 2, title: "DIRECTOR:", subtitle: "Shawn Levy" },
    { id: 3, title: "seasons:", subtitle: "3 (5 Episodes)" },
  ];
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-5 animate-fade-in">
      {info.map(({ id, title, subtitle }, idx) => (
        <React.Fragment key={id}>
          <div className="flex items-center gap-1 text-3xl">
            <span className="font-medium">{title}</span>

            {subtitle && <span className="text-gray-medium">{subtitle}</span>}
          </div>
          {idx !== info.length - 1 && (
            <div className={cn(DEFAULT_DEVIVER_CLASSNAME, "!h-4")} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
