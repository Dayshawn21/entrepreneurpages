import Head from "next/head";
import Nav from "./Navbar";
import Footer from "./Footer.js";
const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main> {children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
