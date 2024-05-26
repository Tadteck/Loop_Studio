import logo from "../components/images/logo.svg";
const NavBar = () => {
  return (
    <div style={{ background: "#333"}}>
      <img src={logo} alt="logo" style={{ width:" 50%", height: "50%" }} />
    </div>
  );
};

export default NavBar;
