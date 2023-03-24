import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';



export const News = ({news}) => {

    const { urlToImage, title, description, source, url } = news;
  return (
    <Grid item md={6} lg={4}>
        <Card>
            {urlToImage && (
        <CardMedia 
                component="img"
                alt={`Image of new ${title}`}
                image="https://images.wsj.net/im-589547/social"
                height={"250"}
                />
            )}
            <CardContent>
            <Typography gutterBottom variant="body1" color="error">
                    {source.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
            <Link href={url}
                target="_blank"
                variant='button'>Read News
            </Link>
            </CardActions>
        </Card>
      
    </Grid>
    
  )
}

export default News
