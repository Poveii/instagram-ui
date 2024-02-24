import { Icon } from '@phosphor-icons/react'
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
  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          'flex gap-5 font-bold text-xl items-center hover:opacity-70 hover:scale-[1.03] group' +
          (bigger ? ' py-4' : '') +
          (isActive ? ' active' : '')
        }
      >
        {Icon ? (
          <>
            <Icon
              size={32}
              weight="fill"
              className="hidden peer group-[.active]:block"
            />
            <Icon
              size={32}
              weight="regular"
              className="group-[.active]:hidden"
            />
          </>
        ) : (
          <></>
        )}
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
