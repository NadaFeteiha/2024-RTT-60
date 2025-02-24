import PerScholesLogo from "./PerScholeasLogo";

function NavBar() {
  const username = "Nada";
  return (
    <nav className="mt-5" onClick={() => alert("clicked")} style={styles}>
      <PerScholesLogo />
      <a href="#" className="some-class">Home</a>
      <a href="#">About</a>

      <div>Welcome, {username.toUpperCase()}</div>
    </nav>
  );
}

const styles = {
  display: "flex",
  justifyContent: "space-around"
}


export default NavBar;
