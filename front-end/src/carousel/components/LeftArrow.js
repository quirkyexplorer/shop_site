import React from 'react'
import styled from 'styled-components'

const ArrowWrapper = styled.div`
  position: absolute;
  color: red;
  top: 50%;
  left: 05%;
  /* transform: translateY(-50%);  for left arrow*/
  transform: translateY(-50%); 
`;


export default function LeftArrow() {
  return (
    <ArrowWrapper>
    <svg fill="hsl(325, 100%, 41%, 100%)" width="25%" height="25%" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M13 20c-.802 0-1.555-.312-2.122-.879l-7.121-7.121 7.122-7.121c1.133-1.133 3.11-1.133 4.243 0 .566.566.878 1.32.878 2.121s-.312 1.555-.879 2.122l-2.878 2.878 2.878 2.879c.567.566.879 1.32.879 2.121s-.312 1.555-.879 2.122c-.566.566-1.319.878-2.121.878zm-6.415-8l5.708 5.707c.378.378 1.037.377 1.414 0 .189-.189.293-.439.293-.707s-.104-.518-.293-.707l-4.292-4.293 4.292-4.293c.189-.189.293-.44.293-.707s-.104-.518-.293-.707c-.378-.379-1.037-.378-1.414-.001l-5.708 5.708z"/></svg>
    </ArrowWrapper>
  )
}
