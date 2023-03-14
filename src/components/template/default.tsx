import Footer from "../footer";
import Navbar from "../navbar";

interface Layout {
  children: React.ReactNode;
};

const Layout = (props: Layout): JSX.Element => {
  return (
    <body className="bg-zinc-800 min-w-min h-full">
    <Navbar />
    {props.children}
      <Footer />
    </body>
  );
};

export default Layout;
