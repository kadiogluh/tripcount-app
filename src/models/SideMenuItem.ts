import { AccordionItem } from './AccordionItem'

export interface SideMenuItem {
  title: AccordionItem['name'] | string
  path: AccordionItem['name'] | string
  icon: any
  iconOpened?: any
  iconClosed?: any
  subMenu?: SideMenuItem[]
}
