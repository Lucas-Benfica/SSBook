import { CiHeart } from "react-icons/ci";
import { Body, Home, LibraryContainer } from "./HomeStyles";
import { FaArrowLeft } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import styled from "styled-components";

export const HomeBook = styled(Home)`
    background-image: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.0001) 25%), url(${(props) => props.bookcover});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 550px;
    padding-top: 260px;
    position: relative;
`;
export const BookInfoContainer = styled(LibraryContainer)`
    z-index: 50;
    position: relative;
`;
export const TitleInfo = styled.div`
    font-family: 'Roboto', sans-serif;
    padding: 0 20px 20px;
    h1{
        font-weight: 700;
        font-size: 20px;
        color: #555555;
        width: 280px;
    }
    h2{
        font-weight: 400;
        font-size: 14px;
        color: #757575;
        margin: 8px 0 20px;
    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        color: #555555;
        text-align: left;
    }
`
export const StyledCiHeart = styled(CiHeart)`
    font-size: 20px;
    color: #555555;
    position: absolute;
    right: 22px;
    top: 35px;
    cursor: pointer;
`;
export const ArrowLeft = styled(FaArrowLeft)`
    font-size: 18px;
    color: #ffffff;
    position: absolute;
    top: 25px;
    left: 25px;
`;
export const ThreeDots = styled(BsThreeDotsVertical)`
    font-size: 18px;
    color: #ffffff;
    position: absolute;
    top: 25px;
    right: 25px;
`;
export const BodyDesk = styled(Body)`
    font-family: 'Roboto', sans-serif;  
`
export const BookDivTitle = styled.div`
    height: 168px;
    margin-left: 11%;
    margin-right: 11%;
    position: relative;
    padding: 24px 24px 24px 352px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    h1{
        font-size: 34px;
        font-weight: 700;
        line-height: 39.84px;
        color: #555555;
    }
    h2{
        font-size: 24px;
        font-weight: 400;
        line-height: 28.13px;
        color: #757575;
    }
`
export const BookImg = styled.div`
    position: absolute;
    left: 32px;
    top: 24px;
    display: flex;
    flex-direction: column;
    z-index: 3;
    img{
        width: 296px;
        height: 433px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    div{
        display: flex;
        gap: 12px;
        height: 48px;
        width: auto;
        align-items: center;
    }
    p{
        color: #555555;
        font-size: 18px;
        font-weight: 700;
    }
    svg{
        font-size: 20px;
        color: #555555;
    }
`
export const Description = styled(LibraryContainer)`
    padding: 24px 13.5% 100px 352px;
    display: flex;
    flex-direction: column;
    align-items: initial;
    p{
        font-size: 18px;
        font-weight: 400;
        line-height: 23px;
        color: #555555;
    }
    h1{
        font-size: 28px;
        font-weight: 700;
        line-height: 32.81px;
        color: #555555;
        margin: 40px 0 24px;
    }
`