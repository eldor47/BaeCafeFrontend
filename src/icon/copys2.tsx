import {SVGProps, FC} from 'react';

type CoppyIconProps = SVGProps<SVGSVGElement> & {
  type?: 'default' | 'ground';
};

const CoppyIcon: FC<CoppyIconProps> = ({type = 'default', ...props}) => {
  return type === 'default' ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="100%"
      viewBox="0 0 24 24"
      fill="#8FD988"
      display="block"
      stroke="currentColor"
      strokeWidth="2"
      className="icon-vercital"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  ) : (
    <svg
      width="30"
      height="30"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <rect x="0.5" y="0.5" width="25" height="25" rx="12.5" fill="#240259" />
      <path
        d="M9.9 8.5C9.40275 8.5 9 8.90275 9 9.4V15.25C9 15.4984 9.2016 15.7 9.45 15.7C9.6984 15.7 9.9 15.4984 9.9 15.25V9.4H15.75C15.9984 9.4 16.2 9.1984 16.2 8.95C16.2 8.7016 15.9984 8.5 15.75 8.5H9.9ZM11.7 10.3C11.2027 10.3 10.8 10.7027 10.8 11.2V16.6C10.8 17.0972 11.2027 17.5 11.7 17.5H17.1C17.5972 17.5 18 17.0972 18 16.6V11.2C18 10.7027 17.5972 10.3 17.1 10.3H11.7ZM11.7 11.2H17.1V16.6H11.7V11.2Z"
        fill="#8FD988"
      />
      <rect x="0.5" y="0.5" width="25" height="25" rx="12.5" stroke="#8FD988" />
    </svg>
  );
};

export default CoppyIcon;
