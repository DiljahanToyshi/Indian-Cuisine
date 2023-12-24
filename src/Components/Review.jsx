import React from "react";

const Review = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-5 md:p-10 ">
      <div className="bg-amber-100  border-amber-100 rounded-md text-xl font-serif text-slate-500">
        <div className="flex lg:flex-row items-center justify-around lg:justify-center gap-3 md:gap-5 p-3 md:p-5">
          <img
            className="rounded-full h-28 md:h-32 lg:h-36 "
            src={`https://i.ibb.co/mDbY60m/download-3.jpg`}
            alt="img"
          />
          <p>Matthew P. Princeton, NJ</p>
        </div>

        <p className="px-3 pb-3 md:px-5 ">
          Lively atmosphere with nice Indian music playing on a decent sound
          system. Nice staff and good service. Food was good and freshly
          prepared. Samosas had way too much chili flakes. I like them with
          spice but not loads of chili flakes.
        </p>
      </div>

      <div className="bg-amber-100  border-amber-100 rounded-md text-xl font-serif text-slate-700">
        <div className="flex lg:flex-row items-center justify-around lg:justify-center gap-3 md:gap-5 p-3 md:p-5">
          <img
            className="rounded-full h-40"
            src={`https://i.ibb.co/PG5nZKx/download-2.jpg`}
            alt=""
          />
          <p>Kelly K. Washington, DC</p>
        </div>
        <p className="px-3 pb-3  md:px-5 ">
          Lively atmosphere with nice Indian music playing on a decent sound
          system. Nice staff and good service. Food was good and freshly
          prepared. Samosas had way too much chili flakes. I like them with
          spice but not loads of chili flakes.
        </p>
      </div>
      <div className="bg-amber-100  border-amber-100 rounded-md text-xl font-serif text-slate-700">
        <div className="flex lg:flex-row items-center justify-around lg:justify-center gap-3 md:gap-5 p-3 md:p-5">
          <img
            className="rounded-full h-40"
            src={`https://i.ibb.co/vJhRzzF/download-1.jpg`}
            alt=""
          />{" "}
          <p>Kelly K. Washington, DC</p>
        </div>

        <p className="px-3 pb-3 md:px-5 ">
          Lively atmosphere with nice Indian music playing on a decent sound
          system. Nice staff and good service. Food was good and freshly
          prepared. Samosas had way too much chili flakes. I like them with
          spice but not loads of chili flakes.
        </p>
      </div>
    </div>
  );
};

export default Review;
