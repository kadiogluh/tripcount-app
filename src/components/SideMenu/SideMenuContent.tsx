import React, { useState } from 'react'
import { SideMenuItem } from '../../models/SideMenuItem'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type SideMenuProps = {
  item: SideMenuItem
}

const SideMenuLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25 rem;
  height: 3.5rem;
  padding: 2rem;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: #595955;
    border-left: 4px solid #973e95;
  }
`
const SideMenuLabel = styled.span`
  margin-left: 1rem;
`
const DropdownLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.25 rem;
  height: 3.5rem;
  padding: 2.5rem;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: #973e95;
  }
`

const SideMenuContent: React.FC<SideMenuProps> = ({ item }) => {
  const [subMenu, setSubMenu] = useState(false)
  const showSubMenu = () => setSubMenu(!subMenu)

  return (
    <>
      <SideMenuLink to={item.path} onClick={showSubMenu}>
        <div>
          {item.icon}
          <SideMenuLabel>{item.title}</SideMenuLabel>
        </div>
        <div>
          {item?.subMenu && subMenu ? item?.iconOpened : item?.iconClosed}
        </div>
      </SideMenuLink>
      {subMenu &&
        item?.subMenu?.map((subMenuItem, index) => {
          return (
            <DropdownLink to={subMenuItem.path} key={index}>
              {subMenuItem.icon}
              <SideMenuLabel>{subMenuItem.title}</SideMenuLabel>
            </DropdownLink>
          )
        })}
    </>
  )
}

export default SideMenuContent
