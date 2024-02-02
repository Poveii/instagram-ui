import { Icon } from '@phosphor-icons/react'

interface IMenuItemProps {
  icon?: Icon
  photo?: string
  text: string

  bigger?: boolean
  active?: boolean
}

export function MenuItem({
  icon: Icon,
  photo,
  text,
  bigger = false,
  active = false,
}: IMenuItemProps) {
  return (
    <li>
      <a
        href=""
        className={
          'flex gap-5 font-bold text-xl items-center hover:opacity-70 hover:scale-[1.03]' +
          (bigger ? ' py-4' : '')
        }
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
      </a>
    </li>
  )
}
