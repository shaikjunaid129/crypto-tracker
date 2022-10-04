import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './News.css'


function News() {
  const [data, setData] = useState([])
  console.log(useState)
  useEffect(() => {

    axios.get("https://newsapi.org/v2/everything?q=crypto&apiKey=73cfb40b198e46e9943d950b5efa3d76")
      .then((res) => {
        setData(res.data.articles)
      })

  }, []);
  return (

    <>
      <Navbar />
      <div className="Wrapper">
      {data.map((value) => {
        return (
          
          
               <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={value.urlToImage}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button href={value.url} size="small" color="primary">
                    Readmore..
                  </Button>
                </CardActions>
              </Card>
        )
      }
      )
      }
      </div>
    </>

  )
}

export default News