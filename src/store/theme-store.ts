import { create } from "zustand"
import { persist } from "zustand/middleware"

type ThemeState = {
    theme: "light" | "dark"
}

type ThemeActions = {
    TOGGLE_THEME: () => void
}

type ThemeStore = {
    state: ThemeState
    actions: ThemeActions
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set) => ({
            state: {
                theme: `dark`,
            },
            actions: {
                TOGGLE_THEME: () =>
                    set((s) => ({
                        state: { theme: s.state.theme === `light` ? `dark` : `light` },
                    })),
            },
        }),
        {
            name: `Theme`,
            getStorage: () => localStorage,
            partialize: (s) => ({ state: s.state }),
        }
    )
)

export const useThemeActions = () => useThemeStore((s) => s.actions)

export const useThemeState = () => useThemeStore((s) => s.state)
