import styled from "styled-components";

export const ContainerFavoriteBooks = styled.div`
    width: 100%;
    overflow-x: auto;
    display: flex;
    @media (min-width: 480px) {
        overflow-x: hidden;
    }
`

export const CardFavoriteBook = styled.div`
    width: 136px;
    height: 262px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    cursor: pointer;

    img{
        width: 136px;
        height: 198px;
        margin-bottom: 10px;
        border-radius: 20px;
    }
    h1{
        width: 136px;
        height: 36px;
        margin-bottom: 2px;
        font-size: 16px;
        font-weight: 700;
        line-height: 18px;
        color: #555555;
        overflow: hidden;
    }
    h2{
        width: 136px;
        height: 16px;
        font-size: 14px;
        font-weight: 400;
        line-height: 16.4px;
        color: #757575;
    }
`