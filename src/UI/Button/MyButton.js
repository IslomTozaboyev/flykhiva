import React from "react";
import styled from "styled-components";

const MyButtonWrapper = styled.div`
  .button {
    background: #ffb300;
    color: #fff;
    border-radius: 10px;
    border: none;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    box-shadow: inset 0 0 0 0 #fff;
    transition: ease-out 0.4s;
    outline: none;
    transition: 1s;

    &:hover {
      box-shadow: inset 350px 0 0 0 #fff;
      color: #ffb300;
      width: 200px;
    }
  }
`;

const MyButton = ({ children, width, height, className, type }) => {
  return (
    <MyButtonWrapper>
      <button
        style={{ width: width, height: height }}
        type={type && type}
        className={`button ${className && className}`}
      >
        {children}
      </button>
    </MyButtonWrapper>
  );
};

export default MyButton;
