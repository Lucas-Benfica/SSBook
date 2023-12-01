import styled from "styled-components"

export const HeaderPhoneStyled = styled.div`
    background-color: #ffffff;
    width: 100%;
    max-width: 480px;
    height: 104px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    border-radius: 0 0 30px 0;
    box-shadow: 0px 1px 1px 0px #0000000D;

    @media (min-width: 481px) {
        display: none;
    }
`;
export const LogoDiv = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    img{
        width: 32px;
        height: 32px;
        border-radius: 50px;
    }
`
export const LogoStyled = styled.div`
    cursor: pointer;
    display: flex;
    h1{
        color: #555555;
    }
    h2{
        color: #A076F2;
    }
    font-family: 'Bebas Neue', sans-serif;  
    font-size: 33px;
    line-height: 44px;
`
export const OptionsDiv = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 0 20px;
    border-radius: 0 0 30px 0;
`
export const Option = styled(({ text, ...rest }) => <div {...rest} />)`
    width: 94px;
    height: 100%;
    font-size: 14px;
    font-weight: 700;
    color: #555555;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p{
        z-index: 1;
    }
    
    div{
        display: ${(prop) => (prop.selected === prop.text) ? "flex" : "none" };
        width: 100%;
        height: 4px;
        border-radius: 20px 20px 0 0;
        background-color: #A076F2;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
    }
`