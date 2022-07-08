import React from 'react';
interface IconProps {
  color?: string;
  onClick?: () => void;
}
const CloseIcon: React.FC<IconProps> = React.memo(
  function CloseIcon({color = '#fff', onClick}){
    return (
      <svg
        onClick={onClick}
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.29279 0L0.0412594 1.25153L7.01409 8.22437L0 15.2522L1.23778 16.49L8.26563 9.4759L15.2797 16.49L16.5313 15.2385L9.51716 8.22437L16.49 1.25153L15.2385 0L8.26563 6.97284L1.29279 0Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default CloseIcon;
