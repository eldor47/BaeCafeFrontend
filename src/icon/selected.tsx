import React from 'react';
interface IconProps {}
const Selected: React.FC<IconProps> = React.memo(function Selected() {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="50" height="50" rx="25" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3181 29.8491L21.7404 41.2714L43.6821 19.3296L38.0455 13.6931L21.7404 29.9983L15.9546 24.2126L10.3181 29.8491ZM21.7404 38.0894L21.7403 38.0893L40.5 19.3296L40.5001 19.3296L21.7404 38.0894Z"
        fill="black"
      />
      <rect
        x="2"
        y="2"
        width="50"
        height="50"
        rx="25"
        stroke="#8FD988"
        strokeWidth="4"
      />
    </svg>
  );
});

export default Selected;
