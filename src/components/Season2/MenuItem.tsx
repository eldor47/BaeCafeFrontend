import Head from 'next/head';
import type { NextPage } from 'next';
import MenuItemStyle from 'styles/Season2/MenuItemElement';

interface MenuItemProps {
  index: number;
  text: string;
  isActive: boolean;
  handleTapMenu: (value: number) => void;
}
const MenuItem: NextPage<MenuItemProps> = ({
  index,
  text,
  isActive,
  handleTapMenu,
}) => {
  return (
    <MenuItemStyle>
      <div className="menuItemText" onClick={() => handleTapMenu(index)}>
        {text}
      </div>
      <div
        className={isActive ? 'menuItem-bottomLine' : 'menuItem-bottomLineNone'}
      ></div>
    </MenuItemStyle>
  );
};

export default MenuItem;
