import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type ProfileAvatar = {
  src: string
  fallback: React.ReactNode
}
export function ProfileAvatar({ src, fallback }: ProfileAvatar) {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}
