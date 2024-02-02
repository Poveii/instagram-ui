import {
  ChatCircleDots,
  Compass,
  Heart,
  House,
  List,
  PlusCircle,
} from '@phosphor-icons/react'

import { MenuItem } from './MenuItem'

import logo from '../assets/logo.svg'
import userPhoto from '../assets/photo.jpg'

const sideBarItemsData = [
  {
    text: 'Home',
    icon: House,
    link: '/',
  },
  {
    text: 'Explore',
    icon: Compass,
    link: '/explore',
  },
  {
    text: 'Mensagens',
    icon: ChatCircleDots,
    link: '/messages',
  },
  {
    text: 'Notificações',
    icon: Heart,
    link: '/notifications',
  },
  {
    text: 'Criar',
    icon: PlusCircle,
    link: '/create',
  },
  {
    text: 'Perfil',
    photo: userPhoto,
    link: '/profile',
  },
  {
    text: 'Mais',
    icon: List,
    bigger: true,
    link: '/more',
  },
]

export function SideBar() {
  return (
    <aside className="flex flex-col items-start gap-7 px-6">
      <img src={logo} alt="" className="h-9 my-11" />

      <nav>
        <ul className="list-none flex flex-col gap-8">
          {sideBarItemsData.map((item) => {
            return (
              <MenuItem
                key={item.text}
                text={item.text}
                icon={item.icon}
                bigger={item.bigger}
                photo={item.photo}
              />
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
