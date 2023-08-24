import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type LoginDialogState = {
    isOpen: boolean
}

type LoginDialogActions = {
    OPEN: () => void
    CLOSE: () => void
}

type LoginDialogStore = {
    state: LoginDialogState
    actions: LoginDialogActions
}

const INITIAL_STATE: LoginDialogState = {
    isOpen: false,
}

export const useLoginDialogStore = create<LoginDialogStore>()(
    immer((set) => ({
        state: INITIAL_STATE,
        actions: {
            OPEN: () =>
                set((s) => {
                    s.state.isOpen = true
                }),
            CLOSE: () =>
                set((s) => {
                    s.state.isOpen = false
                }),
        },
    }))
)

export const useLoginDialogActions = () => useLoginDialogStore((s) => s.actions)

export const useLoginDialogState = () => useLoginDialogStore((s) => s.state)

export const useIsLoginDialogOpen = () => useLoginDialogState().isOpen
