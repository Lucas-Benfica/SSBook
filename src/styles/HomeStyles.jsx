import styled from "styled-components";

export const Home = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F7F7F7;
    z-index: 1;
    font-family: 'Roboto', sans-serif;
`
export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 104px;

    @media (min-width: 480px) {
        padding-top: 72px;
    }
`
export const OptionsBody = styled.div`
    border-bottom: 1px solid #E7E7E7;
    width: 73%;
    height: 48px;
    display: flex;
    margin: 24px auto 0;
    @media (max-width: 480px) {
        display: none;
    }
`
export const FavoriteBooksContainer = styled.div`
    width: 100%;
    height: 319px;
    margin: 32px 0;

    @media (min-width: 480px) {
        width: 73%;
        margin: 24px auto 32px;
    }
`
export const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 20px;
    h1{
        font-weight: 700;
        font-size: 20px;
        line-height: 23.5px;
        color: #555555;
    }
    h2{
        font-weight: 700;
        font-size: 14px;
        line-height: 16.4px;
        color: #A076F2;
    }
    @media (min-width: 480px) {
        margin-bottom: 24px;
        
        h1{
            font-size: 28px;
            line-height: 32.8px;
        }
        h2{
            font-size: 16px;
            line-height: 18.75px;
        }
    }
`

export const LibraryContainer = styled.div`
    width: 100%;
    min-height: 600px;
    height: auto;
    box-shadow: 0px 1px 1px 0px #0000000D;
    background-color: #FFFFFF;
    border-radius: 32px 0px 0px 0px;
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 480px) {
        padding: 32px 13.5% 0 12px;
        width: 89%;
        margin-left: 11%;
        box-shadow: 0px 0px 8px 0px #0000001A;
    }
`