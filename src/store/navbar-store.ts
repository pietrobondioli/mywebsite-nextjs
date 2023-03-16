import { create } from "zustand"

type NavBarState = {
    isOpen: boolean
}

type NavBarActions = {
    TOGGLE_NAVBAR: () => void
    RESET_NAVBAR: () => void
}

type NavBarStore = {
    state: NavBarState
    actions: NavBarActions
}

export const useNavBarStore = create<NavBarStore>()((set) => ({
    state: {
        isOpen: false,
    },
    actions: {
        TOGGLE_NAVBAR: () => set((s) => ({ state: { isOpen: !s.state.isOpen } })),
        RESET_NAVBAR: () => set(() => ({ state: { isOpen: false } })),
    },
}))

export const useNavBarActions = () => useNavBarStore((s) => s.actions)

export const useNavBarState = () => useNavBarStore((s) => s.state)
