import type { NextPage } from 'next';
import MediaListStyle from 'styles/Season2/MediaListElement';

interface MediaListProps {
  data: any;
}
const MediaList: NextPage<MediaListProps> = ({ data }) => {
  return (
    <MediaListStyle>
      {data &&
        data.map((photo: any, index: React.Key) => (
          <div className="mediaItem-parent" key={index}>
            {photo.link ? (
              <a href={photo.link} target="_blank" rel="noreferrer">
                <img className="mediaItem-image" src={photo.type !== 'video' ? photo.url: photo.poster} alt="" />
              </a>
            ) : (
              <img className="mediaItem-image" src={photo.type !== 'video' ? photo.url: photo.poster} alt="" />
            )}
            <div className="mediaItem-sub">
              {photo.titleText ? (
                <div className="mediaItem-title">{photo.titleText}</div>
              ) : null}
              {photo.detailsText ? (
                <div
                  className={
                    photo.titleText
                      ? 'mediaItem-detail'
                      : 'mediaItem-detail-null-title'
                  }
                >
                  {photo.detailsText}
                </div>
              ) : null}
            </div>
          </div>
        ))}
    </MediaListStyle>
  );
};

export default MediaList;
