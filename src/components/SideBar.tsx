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

export function SideBar() {
  return (
    <aside className="flex flex-col items-start gap-7 px-6">
      <img src={logo} alt="" className="h-9 my-11" />

      <nav>
        <ul className="list-none flex flex-col gap-8">
          <MenuItem text="Home" icon={House} />

          <MenuItem text="Explore" icon={Compass} />

          <MenuItem text="Mensagens" icon={ChatCircleDots} />

          <MenuItem text="Notificações" icon={Heart} />

          <MenuItem text="Criar" icon={PlusCircle} />

          <MenuItem text="Perfil" photo={userPhoto} />

          <MenuItem text="Mais" icon={List} bigger />
        </ul>
      </nav>
    </aside>
  )
}
