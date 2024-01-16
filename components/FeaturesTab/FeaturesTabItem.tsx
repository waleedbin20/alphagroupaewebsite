import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import { useRouter } from "next/router";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, link } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div>
          <h4 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h4>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
          <div>
            <a
              href={link}
              className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
            >
              <span className="duration-300 group-hover:pr-2">
                Visit Site
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="currentColor"
              >
                <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
