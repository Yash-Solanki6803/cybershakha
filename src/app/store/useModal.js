import { create } from "zustand";

const useModal = create((set) => ({
  open: false,
  setOpen: (isOpen) => set({ open: isOpen }),
}));

export default useModal;
