import { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

export default function ImageWithFallback({ src, fallbackSrc, alt, className = '' }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [error, setError] = useState<boolean>(false);
  
  // Use a CORS proxy for external images (Unsplash)
  useEffect(() => {
    const isUnsplashImage = src.includes('unsplash.com') || fallbackSrc.includes('unsplash.com');
    
    if (isUnsplashImage && !error) {
      // If it's an Unsplash image, use a CORS proxy
      const corsProxyUrl = 'https://corsproxy.io/?';
      const imageUrl = src.startsWith('/') ? fallbackSrc : src; // Use fallbackSrc if src is a local path
      setImgSrc(`${corsProxyUrl}${encodeURIComponent(imageUrl)}`);
    }
  }, [src, fallbackSrc, error]);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      // If the primary image fails, try the fallback
      setImgSrc(fallbackSrc);
    } else if (fallbackSrc.includes('unsplash.com')) {
      // If fallback fails and it's an Unsplash image, try with CORS proxy
      const corsProxyUrl = 'https://corsproxy.io/?';
      setImgSrc(`${corsProxyUrl}${encodeURIComponent(fallbackSrc)}`);
      setError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
} 