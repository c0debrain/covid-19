import React, { HTMLAttributes } from 'react'

import styled from 'styled-components/macro'
import icMenu from 'images/ic-menu.svg'

const MenuButton = styled.button`
  width: 7vw;
  height: 7vw;
  min-width: 50px;
  min-height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${props => props.theme.colors.primaryLight};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 100%;
  border-width: 0px;
  outline: none;

  img {
    width: 30%;
    height: 30%;
    margin-right: 15%;
    margin-bottom: 15%;
  }

  :active {
    img {
      opacity: 0.5;
    }
  }
`

export const Menu: React.FC<HTMLAttributes<HTMLButtonElement>> = props => {
  return (
    <MenuButton {...props}>
      <img alt="Menu" src={icMenu} />
    </MenuButton>
  )
}

export default Menu
