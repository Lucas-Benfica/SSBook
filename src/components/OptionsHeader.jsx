import { useState } from "react";
import { Option } from "../styles/HeaderPhoneStyles";

export default function Options() {
    const [isSelected, setIsSelected] = useState("myBooks");

    return (
        <>
            <Option text="myBooks" selected={isSelected} onClick={() => setIsSelected("myBooks")}>
                <p>Meus livros</p>
                <div></div>
            </Option>
            <Option text="borrowed" selected={isSelected} onClick={() => setIsSelected("borrowed")}>
                <p>Emprestados</p>
                <div></div>
            </Option>
        </>
    );
}