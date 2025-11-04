"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { workspaceSchema } from "@/schemas/workspaceSchema";

export default function CreateWorkSpace() {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof workspaceSchema>>({
    resolver: zodResolver(workspaceSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof workspaceSchema>) {
    console.log(values);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="size-12 cursor-pointer rounded-xl border-2 border-dashed border-muted-foreground/50 text-muted-foreground hover:!border-muted-foreground hover:!text-foreground hover:rounded-lg transition-all duration-200"
            >
              <Plus className="size-5" />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent side={"right"}>
          <p>Create Workspace</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent className={"max-w-[425px]"}>
        <DialogHeader>
          <DialogTitle>Create Workspace</DialogTitle>
          <DialogDescription>
            Create a new Workspace to get started
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className={"space-y-6"} onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name={"name"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder={"my workspace"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type={"submit"} className={"cursor-pointer"}>
              Create Workspace
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
