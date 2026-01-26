import { create } from 'zustand'

interface SidebarState {
  isOpen: boolean
  isCollapsed: boolean
  toggleSidebar: () => void
  toggleCollapse: () => void
  setIsOpen: (open: boolean) => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  isCollapsed: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleCollapse: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
  setIsOpen: (open: boolean) => set({ isOpen: open }),
}))
