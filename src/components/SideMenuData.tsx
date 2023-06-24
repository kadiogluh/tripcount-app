import { VscCircleLargeFilled, VscArrowSmallRight } from 'react-icons/vsc'
import { SideMenuItem } from '../models/SideMenuItem'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

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
    iconOpened: <AiFillCaretDown />,
    iconClosed: <AiFillCaretUp />,
    subMenu: [
      {
        title: 'Africa',
        path: '/continents/africa',
        icon: <VscArrowSmallRight />,
      },
      {
        title: 'Antartica',
        path: '/continents/antartica',
        icon: <VscArrowSmallRight />,
      },
      {
        title: 'Asia',
        path: '/continents/asia',
        icon: <VscArrowSmallRight />,
      },
      {
        title: 'Australia',
        path: '/continents/australia',
        icon: <VscArrowSmallRight />,
      },
      {
        title: 'Europe',
        path: '/continents/europe',
        icon: <VscArrowSmallRight />,
      },
      {
        title: 'North America',
        path: '/continents/north-america',
        icon: <VscArrowSmallRight />,
      },
      {
        title: 'South America',
        path: '/continents/south-america',
        icon: <VscArrowSmallRight />,
      },
    ],
  },
]
