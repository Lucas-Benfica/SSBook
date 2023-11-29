import styled from "styled-components";
import Header from "../components/Header";

export default function HomePage(){
    return (
        <Home>
            <Header />
        </Home>
    )
}

const Home = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F7F7F7;
`
/*
    margin-top: 104px;
    
    @media (min-width: 481px) {
        margin-top: 72px;
    }
*/
