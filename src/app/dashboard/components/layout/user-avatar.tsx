import {type AvatarProps} from "@radix-ui/react-avatar"

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {User as UserIcon} from "lucide-react"


export function UserAvatar({}) {
    const user = {name: 'Fernando', image: null}
    return (
        <Avatar>
            {user.image ? (
                <AvatarImage alt="Picture" src={user.image}/>
            ) : (
                <AvatarFallback>
                    <span className="sr-only">{user.name}</span>
                    <UserIcon className="h-4 w-4"/>
                </AvatarFallback>
            )}
        </Avatar>
    )
}