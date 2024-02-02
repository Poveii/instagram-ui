import { Icon } from '@phosphor-icons/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

interface IMenuItemProps {
  icon?: Icon
  photo?: string
  text: string
  link: string

  bigger?: boolean
}

export function MenuItem({
  icon: Icon,
  photo,
  text,
  link,
  bigger = false,
}: IMenuItemProps) {
  const [active, setActive] = useState(false)

  const MenuItemStyles =
    'flex gap-5 font-bold text-xl items-center hover:opacity-70 hover:scale-[1.03]' +
    (bigger ? ' py-4' : '')

  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) => {
          isActive ? setActive(true) : setActive(false)
          return MenuItemStyles
        }}
      >
        {Icon ? <Icon size={32} weight={active ? 'fill' : 'regular'} /> : <></>}
        {photo ? (
          <img
            src={photo}
            alt=""
            className="w-8 h-8 rounded-full border-black/[0.16] border"
          />
        ) : (
          <></>
        )}
        {text}
      </NavLink>
    </li>
  )
}
