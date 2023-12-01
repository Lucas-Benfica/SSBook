import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 56px;
  box-shadow: 0px -2px 8px 0px #00000014;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  padding: 0 46px;
  justify-content: space-between;

  @media (min-width: 480px) {
    height: 60px;
    background-color: #A076F2;
    box-shadow: none;
    padding: 0 13.5%;
    color: #ffffff;
    align-items: center;
    h1{
        font-size: 33px;
    }
    p{
        width: 158px;
        font-size: 12px;
        font-weight: 400;
        text-align: right;
    }
  }
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  svg {
    font-size: 20px;
    color: ${(props) => (props.index === props.selected ? '#A076F2' : '#9E9E9E')};
  }

  p {
    font-size: 10px;
    font-weight: 500;
    color: ${(props) => (props.index === props.selected ? '#A076F2' : '#9E9E9E')};
  }
`;
