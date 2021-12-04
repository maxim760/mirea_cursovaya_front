import React from 'react'
import { useTitle, useWindowSize } from '../utils/hooks'
import Slider from "react-slick";
import { Card, CardHeader, CardMedia, CardContent, Typography, Box, useTheme, IconButton } from "@material-ui/core"
import PrevIcon from '@material-ui/icons/ArrowBackIos';
import NextIcon from '@material-ui/icons/ArrowForwardIos';
import { Template } from '../components';
import { PopularCharactersInfo } from '../utils/constants';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
}

const midSize = 385
const smallSize = 250
const xsSize = 275

export const PopularPage = ({}) => {
  useTitle("Популярные персонажи")
  const { breakpoints } = useTheme()
  const { width } = useWindowSize()
  return (
    <Template>
      <Box sx={{position: "relative", padding: "10px 0", width: "100%", flexGrow: 1,display: "flex",alignItems:"center"}}>
      <Box sx={{width: "100%"}}>
      <Slider
        // className={classes.slider}
        dots={width >= breakpoints.values.sm}
        {...settings}
        arrows={true}
        prevArrow={<IconButton size="small" aria-label="previous slide"><PrevIcon /></IconButton>}
        nextArrow={<IconButton size="small" aria-label="next-slide"><NextIcon /></IconButton>}
      >
        {PopularCharactersInfo.map(({ title, img, description }) => (
          <Card sx={{display: "flex !important", flexDirection: "column", alignItems: "center",maxWidth: {sm: smallSize * 2,md: midSize * 2, xs: xsSize},  width: "100%"}}>
            <CardHeader title={title} titleTypographyProps={{sx: {fontSize: "32px", textAlign: "center"}}} />
            <Box sx={{
              display: "flex", alignItems: "center", flexDirection: {
              sm: "row", xs: "column"
            }}}>
            <CardMedia
              sx={{objectFit: "cover", height: {md: midSize, sm: smallSize, xs: xsSize}, width: {md: midSize, xs: xsSize, sm: smallSize}, m: 0}}
              component="img"
              image={img}
              alt={title}
            />
            <CardContent sx={{width: {md: midSize,sm: smallSize, xs: xsSize }, padding: {md:"12px", xs: "8px"},paddingBottom: {md:"12px !important", xs: "8px !important"}}}>
              <Typography variant="body2" sx={{fontSize: {md: 20, xs: 16}}}>
                {description}
              </Typography>
            </CardContent>
              </Box>
          </Card>
        ))}
      </Slider>
  
      </Box>
    </Box>
    </Template>
  )
}