import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    setImgSrc(src);
    setErrorCount(0);
  }, [src]);

  // Helper function to determine which placeholder to use based on the image content/path
  const getPlaceholderSrc = () => {
    const lowerSrc = src.toLowerCase();
    
    // Check for specific categories in the source URL or alt text
    const lowerAlt = alt.toLowerCase();
    
    if (lowerSrc.includes('security') || lowerAlt.includes('security')) {
      return '/images/placeholders/security.svg';
    } else if (lowerSrc.includes('cyber') || lowerAlt.includes('cyber')) {
      return '/images/placeholders/cyber.svg';
    } else if (lowerSrc.includes('infrastructure') || lowerAlt.includes('infrastructure')) {
      return '/images/placeholders/infrastructure.svg';
    } else if (lowerSrc.includes('consult') || lowerAlt.includes('consult')) {
      return '/images/placeholders/consulting.svg';
    } else {
      return '/images/placeholders/default.svg';
    }
  };

  const handleError = () => {
    setErrorCount(prevCount => {
      const newCount = prevCount + 1;
      
      // First try: use appropriate placeholder based on content
      if (newCount === 1) {
        setImgSrc(getPlaceholderSrc());
      }
      // Second try: if placeholder fails, use default placeholder
      else if (newCount === 2) {
        setImgSrc('/images/placeholders/default.svg');
      }
      
      // Return the new count to update state
      return newCount;
    });
  };

  // For external URLs, immediately use a placeholder to avoid CORS issues
  const isExternalUrl = src.startsWith('http') && !src.includes(window.location.hostname);
  
  // Use a different placeholder based on the error count
  const imageSrc = isExternalUrl ? getPlaceholderSrc() : 
                  (errorCount > 1 ? '/images/placeholders/default.svg' : 
                  (errorCount === 1 ? getPlaceholderSrc() : imgSrc));

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onError={handleError}
    />
  );
};

export default ImageWithFallback; 