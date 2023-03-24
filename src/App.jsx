import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Form from "./components/Form";
import "./App.css";
import { NewsProvider } from "./context/NewsProvider";
import ListNews from "./components/ListNews";

function App() {
  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1">
            News Search Engine
          </Typography>
        </header>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Form></Form>
          </Grid>
        </Grid>
        <ListNews>

        </ListNews>
      </Container>
    </NewsProvider>
  );
}

export default App;
