import React from 'react';

interface LoadingProps {
  size?: number; // Größe des Spinners (optional)
  color?: string; // Farbe des Spinners (optional)
}

const Loading: React.FC<LoadingProps> = ({ size = 32, color = 'gray-900' }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div 
        className={`animate-spin rounded-full border-t-4 border-b-4 border-${color}`} 
        style={{ width: `${size}px`, height: `${size}px` }} 
      />
    </div>
  );
};

export default Loading;