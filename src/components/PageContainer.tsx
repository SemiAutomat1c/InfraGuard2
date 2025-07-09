import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

/**
 * PageContainer component that adds consistent spacing between page content and footer
 * Wrap your page content with this component to ensure proper spacing
 */
export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {children}
      </div>
      {/* Spacer to ensure consistent spacing between content and footer */}
      <div className="h-24 sm:h-32 md:h-40"></div>
    </div>
  );
} 