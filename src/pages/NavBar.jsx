import logo from "../components/images/logo.svg";
import TemporaryDrawer from "./TemporaryDrawer";
const NavBar = () => {
  return (
    <>
      <div
        style={{
          background: "#333",
          display: "flex",
          justifyContent: "center", 
          padding:"20px",
          gap:"3rem"
          
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
