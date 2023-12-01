import styled from "styled-components"
import { AiFillPlusCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

export const HeaderDeskStyled = styled.div`
    background-color: #ffffff;
    width: 90%;
    height: 72px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    padding-left: 13.5%;
    padding-right: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    border-radius: 0 0 32px 0;
    box-shadow: 0px 0px 8px 0px #0000001A;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const InputBook = styled.input`
    max-width: 437px;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
    color: #757575;
    padding: 0 16px 0 8px;
    font-size: 14px;
    &:focus {
        outline: none;
        border-color: #A076F2;
    }
    display: flex;
    @media (max-width: 870px) {
        display: none;
    }
`
export const InputDiv = styled.div`
    position: relative;
    width: 34%;
    display: flex;
    @media (max-width: 870px) {
        display: none;
    }
`

export const Option = styled.div`
    gap: 12px;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const PlusIcon = styled(AiFillPlusCircle)`
  font-size: 20px; 
  color: #555555;  

`;

export const HeartIcon = styled(FaHeart)`
  font-size: 20px; 
  color: #555555; 
`;

export const Divider = styled.div`
    width: 0px;
    height: 40px;
    border: 1px solid #E4E4E4;
`;

export const UserInfo = styled.div`
    gap: 12px;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    cursor: pointer;
    img{
        width:32px;
        height: 32px;
        border-radius: 50px;
    }
    p{
        width: 75px;
        word-wrap: break-word;
    }
`;

export const InputImg = styled.img`
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    cursor: pointer;

    @media (max-width: 870px) {
        display: none;
    }
`