import { useEffect, useState } from "react";
import HeaderDesk from "./HeaderDesk";
import FooterPhone from "./FooterPhone";
import FooterDesk from "./FooterDesk";


export default function Footer() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? (
                <FooterPhone />
            ) : (
                <FooterDesk />
            )}
        </>
    );
}