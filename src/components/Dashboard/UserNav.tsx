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

const user = {
  picture: "https://avatars.githubusercontent.com/u/124599?v=4",
  name: "AI",
  email: "Email@example.com",
};

export default function UserNav() {
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
              src={user.picture}
              className={"object-cover"}
            ></AvatarImage>
            <AvatarFallback>{user.name}</AvatarFallback>
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
              src={user.picture}
              className={"object-cover"}
            ></AvatarImage>
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>
          <div className={"grid flex-1 text-left text-sm leading-tight px-2"}>
            <p className={"truncate font-medium"}>{user.name}</p>
            <p className={"text-muted-foreground"}>{user.email}</p>
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
