import {create} from "zustand"

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("Linkup-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("Linkup-theme", theme);
        set({ theme })
    }
}))