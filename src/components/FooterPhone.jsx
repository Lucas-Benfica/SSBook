import { HeartIcon, PlusIcon } from "../styles/HeaderDeskStyles";
import { MdHomeFilled } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import { FooterContainer, NavItem } from "../styles/FooterStyles";

export default function FooterPhone() {
  const [selected, setSelected] = useState(0);

  return (
    <FooterContainer>
      <NavItem onClick={() => setSelected(0)} selected={selected} index={0}>
        <MdHomeFilled />
        <p>Início</p>
      </NavItem>
      <NavItem onClick={() => setSelected(1)} selected={selected} index={1}>
        <PlusIcon />
        <p>Adicionar</p>
      </NavItem>
      <NavItem onClick={() => setSelected(2)} selected={selected} index={2}>
        <BiSearchAlt2 />
        <p>Buscar</p>
      </NavItem>
      <NavItem onClick={() => setSelected(3)} selected={selected} index={3}>
        <HeartIcon />
        <p>Favoritos</p>
      </NavItem>
    </FooterContainer>
  );
}