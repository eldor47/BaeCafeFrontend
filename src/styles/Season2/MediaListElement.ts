import styled from 'styled-components';

const MediaListStyle = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  padding-right: 40px;

  .mediaItem-parent {
    display: block;
    position: relative;
    width: calc((100% - 40px) / 2);
    height: 60vw;
  }
  .mediaItem-image {
    display: block;
    position: relative;
    width: 100%;
    height: 50vw;
    object-fit: cover;
    background-color: #fff;
    // :hover{
    //   opacity: 0.6;
    // }
  }
  .mediaItem-sub {
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mediaItem-title {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #8fd988;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .mediaItem-detail {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.014em;
    color: #8fd988;
    padding-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .mediaItem-detail-null-title {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.014em;
    color: #8fd988;
  }

  @media (max-width: 600px) {
    gap: 20px;
    padding-right: 20px;
    .mediaItem-detail {
      padding-top: 4px;
    }
    .mediaItem-parent {
      width: calc((100% - 20px) / 2);
      height: 66vw;
    }
  }
`;

export default MediaListStyle;
