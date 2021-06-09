import React from "react";
import styled from "styled-components";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 1.6em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  text-shadow: 1px 1px #45a29e;
  color: #fff;

  .turn {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

const ScrollDown = () => {

  const handler = ()=>(
    window.scrollTo(0,550)
    ) // horizontal and vertical scroll increments}


  return (
    <MyScroll>
      <div className="turn" onClick={handler}>
        <span> &gt; </span>
      </div>
    </MyScroll>
  );
};

export default ScrollDown;
