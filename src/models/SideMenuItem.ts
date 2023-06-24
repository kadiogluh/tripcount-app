export interface SideMenuItem {
  title: string
  path: string
  icon: any
  iconOpened?: any
  iconClosed?: any
  subMenu?: SideMenuItem[]
}
