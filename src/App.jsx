import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import hero from "./components/images/mobile/image-hero.jpg";
import iterative from "./components/images/mobile/image-interactive.jpg";

function App() {
  return (
    <>
      <div>
        <Stack>
          <Grid>
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
              mb:"3rem"
            }}
          >
            <Box>
              <img
                src={iterative}
                alt="iterative"
                style={{ width: "100%", height: "100%" }}
              />
              <Typography
                sx={{ textAlign: "center", color: " hsl(0, 0%, 41%)",textTransform:"capitalize" ,mb:"2rem"}}
              >
                <h1>The leader in interactive VR</h1>
              </Typography>
              <Typography
                sx={{ textAlign: "center", color: "hsl(0, 0%, 55%)" }}
              >
                <p>
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
        </Stack>
      </div>
    </>
  );
}

export default App;
