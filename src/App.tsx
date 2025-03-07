import React, { useEffect, useState } from 'react';
import { Moon, Star } from 'lucide-react';

function App() {
  const [errorCode, setErrorCode] = useState('500');
  const [errorMessage, setErrorMessage] = useState('Internal Server Error');
  const [stars, setStars] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const message = params.get('message');
    
    if (code) setErrorCode(code);
    if (message) setErrorMessage(decodeURIComponent(message));

    // Generate random stars
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`
          }}
        >
          <Star className="w-2 h-2 text-yellow-200" />
        </div>
      ))}

      {/* Moon */}
      <div className="absolute top-10 right-10 animate-float">
        <Moon className="w-20 h-20 text-yellow-200" />
      </div>

      {/* Error Content */}
      <div className="text-center z-10 bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
        <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text animate-pulse">
          {errorCode}
        </h1>
        <p className="text-2xl text-gray-300 mb-6 animate-fadeIn">
          {errorMessage}
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 animate-fadeIn"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

export default App;