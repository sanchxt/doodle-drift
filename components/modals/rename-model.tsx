"use client";

import { useRenameModel } from "@/store/use-rename-model";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";

export const RenameModal = () => {
  const { isOpen, onClose, initialValues } = useRenameModel();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit board title</DialogTitle>
        </DialogHeader>

        <DialogDescription>Enter a new title for this board</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
