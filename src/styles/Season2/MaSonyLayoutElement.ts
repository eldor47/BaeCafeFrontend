import styled from 'styled-components';

const MasonyStyle = styled.div`
  position: relative;
  display: block;
  width: 100%;

  .photo-list {
    width: 100%;
    list-style: none;
    margin: 20px auto 0px auto;
  }

  .photo-item {
    display: flex;
    width: 300px;
    // margin: 20px 0;
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 40px;
    margin-right: 0px;
  }

  .photo-item img {
    display: flex;
    width: 100%;
  }

  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: black;
  }

  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    width: 90%;
    max-width: 500px;
  }

  .close {
    color: white;
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 35px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #999;
    text-decoration: none;
    cursor: pointer;
  }

  .mySlides {
    display: none;
    text-align: center;
  }

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }

`;

export default MasonyStyle;
