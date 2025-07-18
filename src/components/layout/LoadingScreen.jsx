import React from 'react';

const bars = [
  'h-8', // leftmost
  'h-12',
  'h-16',
  'h-20', // center left
  'h-24', // center
  'h-20', // center right
  'h-16',
  'h-12',
  'h-8', // rightmost
];

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex items-end space-x-1">
        {bars.map((height, i) => (
          <div
            key={i}
            className={`w-2 ${height} bg-gray-300 rounded-full animate-pulse`}
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: '1s',
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;