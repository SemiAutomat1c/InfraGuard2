import React from 'react';

interface SectionDividerProps {
  type: 'wave' | 'curve' | 'angle' | 'triangle' | 'zigzag';
  color?: string;
  height?: number;
  flip?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  type = 'wave',
  color = 'text-white',
  height = 50,
  flip = false
}) => {
  const dividerStyles = {
    height: `${height}px`,
    transform: flip ? 'rotate(180deg)' : 'rotate(0)',
  };

  const renderDivider = () => {
    switch (type) {
      case 'wave':
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`fill-current ${color} w-full h-full`}
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        );
      case 'curve':
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`fill-current ${color} w-full h-full`}
          >
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"></path>
          </svg>
        );
      case 'angle':
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`fill-current ${color} w-full h-full`}
          >
            <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
          </svg>
        );
      case 'triangle':
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`fill-current ${color} w-full h-full`}
          >
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"></path>
          </svg>
        );
      case 'zigzag':
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`fill-current ${color} w-full h-full`}
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        );
      default:
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`fill-current ${color} w-full h-full`}
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        );
    }
  };

  return (
    <div className="w-full overflow-hidden" style={dividerStyles}>
      {renderDivider()}
    </div>
  );
};

export default SectionDivider; 