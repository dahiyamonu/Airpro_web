
import { ThemeProvider } from "@/components/ui/theme-provider"

type Props = {
    children?: React.ReactNode
}

export default function LoggedOutLayout({ children }: Props) {
    return (
        <>
            <div className="flex flex-col gap-4 min-h-screen items-center p-24 justify-center">
                {children}
            </div>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange/>
        </>
    )
}