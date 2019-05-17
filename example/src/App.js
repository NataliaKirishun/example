import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button/Button';
import ButtonSC from './buttonSC/Button';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <Button>Modules Button</Button>
      <Button className="red">Modules Button</Button>
      <ButtonSC>SC Button</ButtonSC>
      <ButtonSC red>SC Button</ButtonSC>
      <StyledBtn>SC Button styled</StyledBtn>
    </div>
  );
}

export default App;

const StyledBtn = styled(ButtonSC)`
    color: red;
`;


