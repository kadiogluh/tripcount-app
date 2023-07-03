import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import styled from 'styled-components'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SideMenuData } from './SideMenuData'
import SideMenuContent from './SideMenuContent'

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  background-color: black;
`

const SidebarNav = styled.div<{ sideMenu: boolean }>`
  width: 250px;
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0;
  left: ${({ sideMenu }) => (sideMenu ? '0' : '-100%')};
  transition: 200ms;
`
const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  margin-left: 2rem;
  height: 5rem;
`

const SideMenuWrap = styled.div``

const SideMenu: React.FC = () => {
  const [sideMenu, setSideMenu] = useState(false)
  const showSideMenu = () => setSideMenu(!sideMenu)

  return (
    <IconContext.Provider value={{ color: 'white' }}>
      <Nav>
        <NavIcon to="#" onClick={showSideMenu}>
          <AiOutlineMenu />
        </NavIcon>
      </Nav>
      <SidebarNav sideMenu={sideMenu}>
        <SideMenuWrap>
          <NavIcon to="#" onClick={showSideMenu}>
            <AiOutlineClose />
          </NavIcon>
          {SideMenuData.map((item, index) => {
            return <SideMenuContent item={item} key={index} />
          })}
        </SideMenuWrap>
      </SidebarNav>
    </IconContext.Provider>
  )
}

export default SideMenu
