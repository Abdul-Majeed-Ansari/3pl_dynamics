import React from 'react';
import { Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 w-full max-w-4xl shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Help Kids in Palestine
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Lets work together to give children the care and support they need!
            </p>
          </div>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-14 py-5 rounded-xl text-lg whitespace-nowrap font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;