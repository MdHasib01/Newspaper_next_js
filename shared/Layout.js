import Nav from "../shared/Nav";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        <main>{children}</main>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></Script>
      </div>
    </>
  );
};

export default Layout;
