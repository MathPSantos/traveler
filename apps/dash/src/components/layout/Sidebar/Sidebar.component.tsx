import Image from 'next/image'
import {
  CategoriesIcon,
  MapPinIcon,
  ChatIcon,
  SignOutIcon,
} from 'ui/src/icons'

export function Sidebar() {
  const iconClassName =
    'text-white text-2xl cursor-pointer hover:brightness-75'

  return (
    <div className="relative flex flex-col items-center justify-between bg-brand-orange-500 w-24 h-screen py-7">
      {/* Image */}
      <Image
        src="/assets/logo.svg"
        alt="Traveler Logo"
        width={22}
        height={48}
      />

      {/* Nav */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10 ">
        <MapPinIcon className={iconClassName} />
        <CategoriesIcon
          className={iconClassName}
        />
        <ChatIcon className={iconClassName} />
      </div>

      {/* Logout */}
      <SignOutIcon className={iconClassName} />
    </div>
  )
}
