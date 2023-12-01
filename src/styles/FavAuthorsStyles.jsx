import styled from "styled-components"

export const AuthorsDiv = styled.div`
    width: 100%;
    overflow-x: auto;
    display: flex;
    gap: 20px;
    padding-left: 20px;
    margin-bottom: 30px;
    @media (min-width: 480px) {
        overflow-x: hidden;
        gap: 24px;
        margin-bottom: 40px;
    }
`

export const AuthorCard = styled.div`
    cursor: pointer;
    min-width: 248px;
    height: 69px;
    border: 1px solid #E0E0E0;
    background-color: #FFFFFF;
    border-radius: 8px;
    display: flex;

    img{
        border-radius: 5px;
        width: 63px;
        height: 67px;
        margin: 0 20px 0 0;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;

    }
    h1{
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        color: #555555;
    }
    h2{
        font-weight: 400;
        font-size: 14px;
        line-height: 16.41px;
        color: #757575;
    }

    @media (min-width: 480px) {
        min-width: 296px;
        height: 70px;
        img{
            width: 68px;
            height: 68px;
            margin: 0 20px 0 0;
        }
    }
`