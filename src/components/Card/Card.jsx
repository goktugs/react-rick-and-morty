import React from 'react';

const Card = () => {
  return (
    <div className="container-xl mx-auto bg-red-900 flex items-center justify-center ">
      <div className="w-96 h-[600px] bg-green-900 relative ">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="img"
          className="mx-auto"
        />
        <span>Morty Smith</span>
        <div className="flex flex-row justify-around text-white items-center bottom-0 bg-blue-900 absolute w-full h-10 ">
          <div>
            <a href="/">Get new character</a>
          </div>
          <div>
            <a href="/">link</a>
          </div>
          <div>
            <a href="/">link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
