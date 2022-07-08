import React from 'react';
interface IconProps {
  color: string;
}
const WalletIcon: React.FC<IconProps> = React.memo(function WalletIcon({color}){
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="fix-icon"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 0C1.346 0 0 1.346 0 3V16C0 17.103 0.897 18 2 18H16C17.103 18 18 17.103 18 16V6C18 4.897 17.103 4 16 4H6H5H3C2.448 4 2 3.551 2 3C2 2.449 2.448 2 3 2H17V0H3ZM2 5.81641C2.31439 5.92856 2.64761 6 3 6H5H6H16V16H2V5.81641ZM13 10C12.448 10 12 10.448 12 11C12 11.552 12.448 12 13 12C13.552 12 14 11.552 14 11C14 10.448 13.552 10 13 10Z"
        fill={color}
      />
    </svg>
  );
});

export default WalletIcon;
