import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'
import { ModeToggle } from './mode-toggle'
import { ProfileAvatar } from './profile-avatar'

export function Header() {
  return (
    <NavigationMenu className="w-full border-b sticky top-0 z-50">
      <NavigationMenuList className="p-4 flex items-center justify-between max-w-screen-lg mx-auto h-[60px]">
        <div className="flex items-center gap-4">
          <NavigationMenuItem>
            <Link className={navigationMenuTriggerStyle()} href="/">
              Front Challenges
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className={navigationMenuTriggerStyle()} href="/">
              Blog
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className={navigationMenuTriggerStyle()} href="/">
              Pratique
            </Link>
          </NavigationMenuItem>
        </div>
        <div className="flex items-center gap-4">
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <ProfileAvatar
                src="https://github.com/pedromtec.png"
                fallback="PS"
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col gap-2">
                <Link className={navigationMenuTriggerStyle()} href="/profile">
                  Perfil
                </Link>
                <Link className={navigationMenuTriggerStyle()} href="/sign-in">
                  Deslogar
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
