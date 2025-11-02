import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navigation/Navigation";

export const MainLayout = () => {
  return (
    <>
      <main>
        <Header />
        <Navigation />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};
