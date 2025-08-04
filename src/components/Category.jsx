import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  FaGlobe, FaBook, FaFilm, FaMusic, FaTheaterMasks, FaTv, FaGamepad, FaChessBoard,
  FaFlask, FaLaptopCode, FaCalculator, FaMonument, FaFutbol, FaMapMarkedAlt, FaLandmark,
  FaGavel, FaPaintBrush, FaStar, FaPaw, FaCar, FaBookOpen, FaMobileAlt, FaDragon, FaSmileBeam
} from 'react-icons/fa';

const icons = [
  FaGlobe, FaBook, FaFilm, FaMusic, FaTheaterMasks, FaTv, FaGamepad, FaChessBoard,
  FaFlask, FaLaptopCode, FaCalculator, FaMonument, FaFutbol, FaMapMarkedAlt, FaLandmark,
  FaGavel, FaPaintBrush, FaStar, FaPaw, FaCar, FaBookOpen, FaMobileAlt, FaDragon, FaSmileBeam
];

const categories = [
  { id: 9, name: "General Knowledge", desc: "Test Your Current Awareness" },
  { id: 10, name: "Books", desc: "Challenge your literary knowledge" },
  { id: 11, name: "Film", desc: "Test your film trivia" },
  { id: 12, name: "Music", desc: "From classics to modern hits" },
  { id: 13, name: "Musicals & Theatres", desc: "Broadway and beyond" },
  { id: 14, name: "Television", desc: "TV show trivia" },
  { id: 15, name: "Video Games", desc: "Gaming legends and facts" },
  { id: 16, name: "Board Games", desc: "Strategy and chance!" },
  { id: 17, name: "Science & Nature", desc: "Explore the natural world" },
  { id: 18, name: "Computers", desc: "Test your tech knowledge" },
  { id: 19, name: "Mathematics", desc: "Crunch those numbers" },
  { id: 20, name: "Mythology", desc: "Gods, legends, and myths" },
  { id: 21, name: "Sports", desc: "How well do you know sports?" },
  { id: 22, name: "Geography", desc: "Discover countries and capitals" },
  { id: 23, name: "History", desc: "Dive into past events" },
  { id: 24, name: "Politics", desc: "Test your political IQ" },
  { id: 25, name: "Art", desc: "From brush strokes to sculptures" },
  { id: 26, name: "Celebrities", desc: "Famous faces and lives" },
  { id: 27, name: "Animals", desc: "Facts about the animal kingdom" },
  { id: 28, name: "Vehicles", desc: "Planes, trains, and automobiles" },
  { id: 29, name: "Comics", desc: "Heroes, villains, and stories" },
  { id: 30, name: "Gadgets", desc: "From old-school to smart-tech" },
  { id: 31, name: "Anime & Manga", desc: "Japanese pop culture" },
  { id: 32, name: "Cartoons", desc: "Animated classics and new-age" },
];

const Category = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const handleQuiz = (id) => {
    navigate(`/quiz/${id}`);
  };

  const displayedCategories = showAll ? categories : categories.slice(0, 8);


  return (

      <>


    <div className="px-4 py-8 bg-gray-50">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayedCategories.map((cat, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div key={cat.id} className="flex flex-col items-center gap-4 p-4 text-center transition duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-xl">
              <Icon className="text-5xl text-blue-500" />
              <div>
                <h3 className="font-bold">{cat.name}</h3>
                <p>{cat.desc}</p>
              </div>
          <button
            onClick={() => handleQuiz(cat.id)}
            className="px-6 py-2 font-medium transition duration-300 transform rounded-lg shadow bg-slate-200 hover:scale-105 hover:bg-slate-300 hover:shadow-lg"
          >
            Start Quiz
          </button>

            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 font-semibold text-white transition bg-blue-600 rounded hover:bg-blue-700"
        >
          {showAll ? "Show Less" : "Load More"}
        </button>
      </div>
    </div>

    </>
  );
};

export default Category;
