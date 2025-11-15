"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { channelNameSchema, transformChannelName } from "@/schemas/channel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function CreateNewChannel() {
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(channelNameSchema),
    defaultValues: {
      name: "",
    },
  });
  const watchedName = form.watch("name");
  const transformedName = watchedName ? transformChannelName(watchedName) : "";
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className={"w-full cursor-pointer"}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Plus className={"size-4"} />
          Add New Channel
        </Button>
      </DialogTrigger>
      <DialogContent className={"max-w-[425px]"}>
        <DialogHeader>
          <DialogTitle>New Channel</DialogTitle>
          <DialogDescription>Create New Channel</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className={"space-y-6"}>
            <FormField
              name={"name"}
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder={"My Channel"} {...field} />
                  </FormControl>
                  {transformedName && transformedName !== watchedName && (
                    <p className={"text-sm text-muted-foreground"}>
                      Will be created as:{" "}
                      <code className={"bg-muted px-1 py-0.5 rounded text-xs"}>
                        {transformedName}
                      </code>
                    </p>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type={"submit"}>Create</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
