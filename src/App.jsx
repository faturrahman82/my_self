import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function App() {
  const [newText] = useState([
    "Haiii",
    "My Name",
    "Maulvi Ilmullah Faturrahman Al Af Ghani",
    "Nice To Meet You :)",
  ]);
  return (
    <main className="bg-black text-white h-screen ">
      <div className="flex justify-center items-center h-full">
        <h1 className=" font-normal text-gray-400 text-3xl tracking-wide shadow-white">
          <Typewriter
            words={newText}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={30}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </h1>
      </div>
    </main>
  );
}
