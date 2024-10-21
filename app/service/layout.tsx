import "@/app/globals.css";
import "@/app/fonts/style.css";
import Header from "../components/header";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body>
            <Header />
            {children}
        </body>
    );
}
