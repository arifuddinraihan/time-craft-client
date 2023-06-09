import { useQuery } from "@tanstack/react-query";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import SpinnerPrimary from "../../../components/Spinner/SpinnerPrimary";
const AdSection = () => {
  const url = `https://time-craft-server-side.vercel.app/advertisedProducts`;
  const { data: advertiseArray = [], isLoading } = useQuery({
    queryKey: ["advertisedProducts"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    },
  });
  // console.log(advertiseArray.length)
  if (isLoading) {
    return <SpinnerPrimary></SpinnerPrimary>;
  }
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const slider = (
    <>
      <AutoplaySlider
        className="h-96"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        {advertiseArray.map((add, i) => (
          <div key={i} data-src={add.productImgURL} />
        ))}
      </AutoplaySlider>
    </>
  );
  return (
    advertiseArray.length > 0 && (
      <div className="flex flex-col text-center justify-center mx-2 md:mx-0">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary pt-6 mt-6 md:mt-14">
          Product you may like
        </h2>
        <div className="flex justify-center mx-auto mt-4 mb-12">
          <span className="inline-block w-56 h-1 bg-amber-300 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-amber-200 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-amber-100 rounded-full"></span>
        </div>
        <div>{slider}</div>
      </div>
    )
  );
};

export default AdSection;
