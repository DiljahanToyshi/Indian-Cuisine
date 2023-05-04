import React from 'react';

const Review = () => {
    return (
      <div className='flex gap-8 p-10'>
        
        <div className="bg-amber-100  border-amber-100 rounded-md text-xl font-serif text-amber-700">
          <img
            className="rounded-full h-40 place-content-center"
            src={`https://i.ibb.co/mDbY60m/download-3.jpg`}
            alt=""
          />
          <p >
            Lively atmosphere with nice Indian music playing on a decent sound
            system. Nice staff and good service. Food was good and freshly
            prepared. Samosas had way too much chili flakes. I like them with
            spice but not loads of chili flakes. 
          </p>
          <p>Matthew P. Princeton, NJ</p>
        </div>
        <div className="bg-amber-100 border-amber-100 rounded-md text-xl font-serif text-amber-700">
          <img
            className="rounded-full h-40"
            src={`https://i.ibb.co/PG5nZKx/download-2.jpg`}
            alt=""
          />
          <p>
            Lively atmosphere with nice Indian music playing on a decent sound
            system. Nice staff and good service. Food was good and freshly
            prepared. Samosas had way too much chili flakes. I like them with
            spice but not loads of chili flakes. 
          </p>
          <p>Kelly K. Washington, DC</p>
        </div>
        <div className="bg-amber-100 border-amber-100 rounded-md text-xl font-serif text-amber-700">
          <img
            className="rounded-full h-40"
            src={`https://i.ibb.co/vJhRzzF/download-1.jpg`}
            alt=""
          />
          <p>
            Lively atmosphere with nice Indian music playing on a decent sound
            system. Nice staff and good service. Food was good and freshly
            prepared. Samosas had way too much chili flakes. I like them with
            spice but not loads of chili flakes. 
          </p>
          <p>Kelly K. Washington, DC</p>
        </div>
      </div>
    );
};

export default Review;