"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreditCard, LogOut, User } from "lucide-react";
import {
  LogoutLink,
  PortalLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useSuspenseQuery } from "@tanstack/react-query";
import { orpc } from "@/lib/orpc";
import { getAvatar } from "@/lib/getAvatar";

export default function UserNav() {
  const {
    data: { user },
  } = useSuspenseQuery(orpc.workspace.list.queryOptions());
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className={
            "size-12 rounded-xl hover:rounded-lg transition-all duration-200 bg-background/50 hover:bg-accent hover:text-accent-foreground"
          }
        >
          <Avatar>
            <AvatarImage
              src={getAvatar(user.picture, user.email!)}
              className={"object-cover"}
            ></AvatarImage>
            <AvatarFallback>
              {user.given_name?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={"end"}
        side={"right"}
        sideOffset={15}
        className={"w-[200px]"}
      >
        <DropdownMenuLabel
          className={
            "flex items-center justify-center gap-5 font-normal px-1 py-2 text-left text-sm"
          }
        >
          <Avatar>
            <AvatarImage
              src={getAvatar(user.picture, user.email!)}
              className={"object-cover"}
            ></AvatarImage>
            <AvatarFallback>
              {user.given_name?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className={"grid flex-1 text-left text-sm leading-tight px-2"}>
            <p className={"truncate font-medium"}>{user.given_name}</p>
            <p className={"text-muted-foreground truncate"}>{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <PortalLink>
              <User />
              Account
            </PortalLink>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <PortalLink>
              <CreditCard />
              Billing
            </PortalLink>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutLink>
            <LogOut />
            Log out
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
