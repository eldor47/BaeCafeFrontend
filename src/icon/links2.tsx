import {FC, memo, SVGProps} from 'react';
type IconProps = SVGProps<SVGSVGElement> & {};

// eslint-disable-next-line react/display-name
const LinkIcon: FC<IconProps> = memo((props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <rect x="0.5" y="0.5" width="25" height="25" rx="12.5" fill="#240259" />
      <path
        d="M13.3182 8.5V9.31818H15.5938L10.5696 14.3423L11.1577 14.9304L16.1818 9.90625V12.1818H17V8.5H13.3182ZM8 10.1364V17.5H15.3636V12.1818L14.5455 13V16.6818H8.81818V10.9545H12.5L13.3182 10.1364H8Z"
        fill="#8FD988"
      />
      <rect x="0.5" y="0.5" width="25" height="25" rx="12.5" stroke="#8FD988" />
    </svg>
  );
});

export default LinkIcon;
