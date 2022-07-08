import React, {useEffect, useMemo, useRef} from 'react';
import Jazzicon from '@metamask/jazzicon';

export type AvatarGeneratorProps = {
  genKey: string;
  size?: 'small' | 'medium' | 'extraSmall';
};

const AvatarGenerator = ({genKey, size = 'medium'}: AvatarGeneratorProps) => {
  const ref = useRef<any>(null);

  const _size = useMemo(() => {
    let avatarSize = 40;
    switch (size) {
      case 'small':
        avatarSize = 20;
        break;
      case 'extraSmall':
        avatarSize = 14;
        break;
      default:
        break;
    }
    return avatarSize;
  }, [size]);

  useEffect(() => {
    const av: HTMLDivElement = Jazzicon(
      _size,
      parseInt(genKey.slice(2, 10), 16),
    );
    av.style.position = 'absolute';
    av.style.top = '0px';
    ref.current.replaceChildren(av);
  }, [genKey, _size]);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: _size,
        height: _size,
        alignSelf: 'center',
        display: 'flex',
      }}
    />
  );
};

export default AvatarGenerator;
