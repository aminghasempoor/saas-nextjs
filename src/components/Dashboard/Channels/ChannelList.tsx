import Link from "next/link";
import {HashIcon} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const channelList = [
    {
        id: 1,
        name: "hello1"
    }, {
        id: 2,
        name: "hello2"
    }, {
        id: 3,
        name: "hello3"
    }, {
        id: 4,
        name: "hello4"
    },
]

export default function ChannelList() {
    return (
        <div className={"space-y-0.5 py-1"}>
            {channelList.map((channel) => (
                <Link className={buttonVariants({
                    variant: "ghost",
                    className : cn("w-full justify-start p-2 h-7 text-muted-foreground hover:text-accent-foreground hover:bg-accent")
                })} key={channel.id} href={"#"}>
                    <HashIcon className={"size-4"}/>
                    <span className={"truncate"}>{channel.name}</span>
                </Link>
            ))}
        </div>
    )
}