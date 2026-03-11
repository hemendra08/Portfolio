import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar/Navbar";
import Footer from "../Componets/Footer/Footer";
import Backgroundcomponent from "../Componets/Backgroundcomponent/Backgroundcomponent";

function Layout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a1929" }}>
      <Backgroundcomponent />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
