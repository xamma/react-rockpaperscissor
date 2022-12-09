import React from 'react'
import styled from 'styled-components';

const Play = () => {

  const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
// Usage
  return (
    <div>
      <Button onClick={() => console.log("test")}>
        Button
      </Button>
    </div>
  )
}

export default Play