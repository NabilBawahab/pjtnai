// components/ChatBox.tsx
"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { groqAction } from "../_actions/groqaction";

export const ChatBox = () => {
  const [state, formAction, pending] = useActionState(groqAction, null);
  return (
    <div>
      <ScrollArea></ScrollArea>
      <form action={formAction} className="flex space-x-2">
        <Input placeholder="Ketik pesan" name="input" />
        <Button>Send</Button>
      </form>
    </div>
  );
};
