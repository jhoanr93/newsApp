import React from "react";
import { Grid, Typography } from "@mui/material";
import { News } from "./News";
import useNews from "../hooks/useNews";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const ListNews = () => {
  const { news, totalPages, handleChangePage, page } = useNews();
  const totalPages2 = Math.ceil(totalPages / 20)
  return (
    <>
      <Typography align="center" marginY={5} component="h1">
        Last News
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {news.map((news) => (
          <News key={news.url} news={news}></News>
        ))}
      </Grid>

      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        sx={{ marginY: 5 }}
      >
        <Pagination
         count={totalPages2}
         color="primary"
         onChange={handleChangePage}
         page = {page} />
      </Stack>
    </>
  );
};

export default ListNews;
