import React from 'react'
import { Grid, Typography } from '@mui/material'
import { News } from './News';
import useNews from '../hooks/useNews'

export const ListNews = () => {
    const { news } = useNews();
  return (
    <>
        <Typography align="center" marginY={5} component="h1">
            Last News
            
            </Typography>

            <Grid container spacing={2} justifyContent="center">
                {news.map((news) => (
                    <News key={news.url} news={news}>

                    </News>
                ))}
                </Grid>
    </>
    
  )
}

export default ListNews
