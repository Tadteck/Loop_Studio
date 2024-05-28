import logo from "../components/images/logo.svg";
import TemporaryDrawer from "./TemporaryDrawer";
const NavBar = () => {
  return (
    <>
      <div
        style={{
          xs:"5rem",
          background: "#333",
          display: "flex",
          justifyContent: "center", 
          alignItems:"center",
          padding:"1rem",
          gap:"7rem"
          
        }}
      >
        <img src={logo} alt="logo" style={{ width: " 50%", height: "50%" }} />
        <div>
          <TemporaryDrawer />
        </div>
      </div>
    </>
  );
};

export default NavBar;
