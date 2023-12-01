import styled from "styled-components"

export const Book = styled.div`
    width: 100%;
    height: 70px;
    gap: 10px;
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

    img{
        width: 48px;
        height: 70px;
        border-radius: 10px;
    }
    div{
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    h1{
        font-size: 16px;
        font-weight: 700;
        line-height: 18px;
        color: #555555;
    }
    h2{
        font-size: 14px;
        font-weight: 400;
        line-height: 16.41px;
        color: #757575;
    }
    @media (min-width: 480px) {
        width: 100%;
        min-width: 250px;
        height: 100px;
        gap: 16px;
        margin: 0;
        img{
            width: 68px;
            height: 100px;
        }
    }
`

export const ContainerBooks = styled.div`
    width: 100%;
    height: auto;
    gap: 20px;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    padding-left: 20px;
    padding-right: 20px;

    @media (min-width: 550px) {
        gap: 50px;
        display: grid;
        grid-template-columns: 50% 50%;
        margin: 20px auto;
    }

    @media (min-width: 1150px) {
        gap: 24px;
        display: grid;
        grid-template-columns: 33% 33% 33%;
    }
`