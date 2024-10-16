import "@/app/globals.css";
import "@/app/fonts/style.css";
import Header from "../components/header";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body className="my-10 lg:mx-32 sm:mx-10 mx-4 relative">
            <Header homeLayout />
            {children}
        </body>
    );
}
