import { create } from "zustand"

interface User {
    id: number
    name: string
    email: string
}

interface AuthState {
    user: User | null
    isAuthenticated: boolean
    setUser: (user: User | null) => void
    clearUser: () => void
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (user) => set({ user, isAuthenticated: !!user }),
    clearUser: () => set({ user: null, isAuthenticated: false })
}))

export default useAuthStore