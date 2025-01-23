import React from "react";
import starFilledIcon from "@/assets/icons/star-filled.svg";
import starOutlinedIcon from "@/assets/icons/star-outlined.svg";

const ICON_ALT_TEXT = "star icon";

export const StarRating = ({ rating = 3, maxRating = 5 }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: maxRating }, (_, index) =>
      index < rating ? (
        <img
          key={index}
          src={starFilledIcon}
          alt={ICON_ALT_TEXT}
          width={32}
          height={32}
        />
      ) : (
        <img
          key={index}
          src={starOutlinedIcon}
          alt={ICON_ALT_TEXT}
          width={32}
          height={32}
        />
      )
    )}
  </div>
);
