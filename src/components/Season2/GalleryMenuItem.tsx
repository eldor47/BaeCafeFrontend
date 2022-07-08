import type { NextPage } from 'next';

import GalleryMenuStyle from 'styles/Season2/GalleryMenuElement';

interface GalleryMenuItemProps {
  index: number;
  text: string;
  isSelected: boolean;
  isFirstLine: boolean;
  handleChangeGallery: (value: number) => void;
}

const GalleryMenuItem: NextPage<GalleryMenuItemProps> = ({
  index,
  text,
  isSelected,
  isFirstLine,
  handleChangeGallery,
}) => {
  const image = isSelected ? (
    <img
      className="gallery-menu-check"
      src="/image/season2/ic-check.png"
      alt="bae"
    ></img>
  ) : (
    <div className="gallery-menu-check"></div>
  );
  const topLine = isFirstLine ? null : (
    <div className="gallery-menu-top-line"></div>
  );
  return (
    <GalleryMenuStyle>
      {image}
      <div
        className="gallery-menu-text"
        onClick={() => handleChangeGallery(index)}
      >
        {text}
      </div>
      {topLine}
    </GalleryMenuStyle>
  );
};

export default GalleryMenuItem;
