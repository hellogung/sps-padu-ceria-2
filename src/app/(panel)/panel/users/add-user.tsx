"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toast } from "sonner";

const AddUserComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button onClick={() => setIsOpen(true)}>Tambah User</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <button
              onClick={() => {
                setIsOpen(false);
                toast.success("Users created successfully");
              }}
            >
              Open Sheet
            </button>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default AddUserComponent;
