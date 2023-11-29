import { useEffect, useState } from "react";
import HeaderPhone from "./HeaderPhone";
import HeaderDesk from "./HeaderDesk";


export default function Header() {

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
                <HeaderPhone />
            ) : (
                <HeaderDesk />
            )}
        </>
    );
}