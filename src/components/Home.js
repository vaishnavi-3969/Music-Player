import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-[#E99D72] min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-4">Welcome to MusicPlayer</h2>
        <div className="bg-gray-200 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12s1-3 6-3 6 3 6 3"
                />
              </svg>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Now Playing</h3>
            <p className="text-gray-600">Song Title</p>
            <p className="text-gray-600">Artist Name</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <Link to="/get-started" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
