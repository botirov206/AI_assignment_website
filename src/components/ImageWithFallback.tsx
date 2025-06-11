import React from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  placeholder: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className, placeholder }) => {
  const [error, setError] = React.useState(false);

  const handleError = () => {
    setError(true);
  };

  return error ? (
    <div className={`bg-gray-100 p-4 rounded flex items-center justify-center ${className}`}>
      <p className="text-gray-500 text-sm italic text-center">{placeholder || 'Image not available'}</p>
    </div>
  ) : (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={handleError} 
    />
  );
};

export default ImageWithFallback;
