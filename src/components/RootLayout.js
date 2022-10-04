import Nav from "./Nav";

function RootLayout({ children }) {
  return (
    <>
      <Nav />
      <index>{children}</index>
    </>
  );
}

export default RootLayout;
