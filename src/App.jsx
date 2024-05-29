import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import hero from "./components/images/mobile/image-hero.jpg";
import iterative from "./components/images/mobile/image-interactive.jpg";
import earth from "./components/images/mobile/image-deep-earth.jpg";
import night from "./components/images/mobile/image-night-arcade.jpg";
import soccer from "./components/images/mobile/image-soccer-team.jpg";
import gridy from "./components/images/mobile/image-grid.jpg";
import vr from "./components/images/mobile/image-from-above.jpg";
import pocket from "./components/images/mobile/image-pocket-borealis.jpg";
import curosity from "./components/images/mobile/image-curiosity.jpg";
import fisheye from "./components/images/mobile/image-fisheye.jpg";
import { Button } from "@mui/base";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <>
      <div>
        <Stack sx={{ xs: "0px", sm: "600px", md: "960px" }}>
          <Grid>
            <NavBar />
            <img
              src={hero}
              alt="hero"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Container
            sx={{
              backgroundColor: "white",
              mt: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: "2rem",
            }}
          >
            <Box>
              <img
                src={iterative}
                alt="iterative"
                style={{ width: "100%", height: "100%" }}
              />
              <Typography
                sx={{
                  textAlign: "center",
                  color: " hsl(0, 0%, 41%)",
                  textTransform: "capitalize",
                  mb: "2rem",
                }}
              >
                <h1>The leader in interactive VR</h1>
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "hsl(0, 0%, 55%)",
                  mb: "1.5rem",
                }}
              >
                <p style={{ alignItems: "center" }}>
                  {" "}
                  Founded in 2011, Loopstudios has been producing world-class
                  virtual reality projects for some of the best companies around
                  the globe. Our award-winning creations have transformed
                  businesses through digital experiences that bind to their
                  brand.
                </p>
              </Typography>
            </Box>
          </Container>
          <Container sx={{ mb: "2rem" }}>
            <Box>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "hsl(0, 0%, 41%)",
                  textTransform: "uppercase",
                }}
              >
                <h1>Our creations</h1>
              </Typography>
            </Box>
          </Container>
          <Container>
            <Box>
              <img
                src={earth}
                alt="earth"
                style={{
                  width: "100%",
                  height: "100%",
                  marginBottom: "1.5rem",
                }}
              />
            </Box>
            <img
              src={night}
              alt="night"
              style={{ width: "100%", height: "100%", marginBottom: "1.5rem" }}
            />
            <img
              src={soccer}
              alt="earth"
              style={{ width: "100%", height: "100%", marginBottom: "1.5rem" }}
            />
            <img
              src={gridy}
              alt="night"
              style={{ width: "100%", height: "100%", marginBottom: "1.5rem" }}
            />
            <img
              src={vr}
              alt="earth"
              style={{ width: "100%", height: "100%", marginBottom: "1.5rem" }}
            />
            <img
              src={pocket}
              alt="night"
              style={{ width: "100%", height: "100%", marginBottom: "1.5rem" }}
            />
            <img
              src={curosity}
              alt="earth"
              style={{ width: "100%", height: "100%", marginBottom: "1.5rem" }}
            />
            <img
              src={fisheye}
              alt="night"
              style={{ width: "100%", height: "100%", marginBottom: "1.5rem" }}
            />
          </Container>
          <Box sx={{ display: "flex", justifyContent: "center", mb: "5rem" }}>
            <Button sx={{ mt: "1rem" }}>
              <Typography
                sx={{
                  p: "1rem",
                  pl: "2.8rem",
                  pr: "2.8rem",
                  height: "0.3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "hsl(0, 0%, 0%)",
                  textTransform: "uppercase",
                }}
              >
                see all
              </Typography>
            </Button>
          </Box>
          <Container
            sx={{
              backgroundColor: "hsl(0, 0%, 0%)",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography sx={{ color: "hsl(0, 0%, 100%)", mt: 4, mb: 3 }}>
              <h1>Loopstudios</h1>
            </Typography>

            <Typography sx={{ color: "hsl(0, 0%, 100%)", mb: 3 }}>
              About
            </Typography>

            <Typography sx={{ color: "hsl(0, 0%, 100%)", mb: 3 }}>
<<<<<<< HEAD
              Careers
=======
              <a href="/Careers">Careers</a>
>>>>>>> dev
            </Typography>
            <Typography sx={{ color: "hsl(0, 0%, 100%)", mb: 3 }}>
              {" "}
              Events
            </Typography>
            <Typography sx={{ color: "hsl(0, 0%, 100%)", mb: 3 }}>
<<<<<<< HEAD
              Products
            </Typography>
            <Typography sx={{ color: "hsl(0, 0%, 100%)", mb: 3 }}>
              Support
=======
              <a href="/Products">Products</a>
            </Typography>
            <Typography sx={{ color: "hsl(0, 0%, 100%)", mb: 3 }}>
              <a href="/Support">Support</a>
>>>>>>> dev
            </Typography>
          </Container>
        </Stack>
      </div>
    </>
  );
}

export default App;
