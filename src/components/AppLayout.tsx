import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface AppLayoutProps {
  children: React.ReactNode;
  activeItem: "COMMAND" | "STRATEGY" | "ASSETS" | "ADVISORY" | "ARCHIVE";
}

export default function AppLayout({ children, activeItem }: AppLayoutProps) {
  return (
    <>
      <Header />
      <Sidebar activeItem={activeItem} />
      <main className="ml-64 pt-16 min-h-screen bg-surface">
        {children}
      </main>
      <Footer />
    </>
  );
}
