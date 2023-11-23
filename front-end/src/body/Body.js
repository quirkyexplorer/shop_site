import React from 'react'
import styled from 'styled-components'
const BodyWrapper = styled.div`
  height: 100px;
`;
export default function Body() {
  console.log('hello world');
  return (
    <BodyWrapper>
      <div>Body</div>
    </BodyWrapper>
    
  )
}
