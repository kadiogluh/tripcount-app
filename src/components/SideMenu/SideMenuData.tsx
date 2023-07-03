import { VscCircleLargeFilled, VscArrowSmallRight } from 'react-icons/vsc'
import { SideMenuItem } from '../../models/SideMenuItem'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { Data } from '../Data'

export const SideMenuData: SideMenuItem[] = [
  {
    title: 'Maintable',
    path: '/maintable',
    icon: <VscCircleLargeFilled />,
  },
  {
    title: 'Continents',
    path: '/continents',
    icon: <VscCircleLargeFilled />,
    iconOpened: <AiFillCaretUp />,
    iconClosed: <AiFillCaretDown />,
    subMenu: Data.map((item) => ({
      title: item.name,
      path: `/continents/${item.name.toLowerCase().replace(' ', '')}`,
      icon: <VscArrowSmallRight />,
    })),
  },
]
