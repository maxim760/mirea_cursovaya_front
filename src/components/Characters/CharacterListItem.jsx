import React from 'react'
import {Routes} from "../../utils/paths"
import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import { OverflowTip } from '../UI'
import { useHistory } from 'react-router-dom'

const DISNEY_URL = 'https://www.objectivequiz.com/img/subcategory/disney.jpg'

export const CharacterListItem = ({ img, name, id, ...gridProps }) => {
  const history = useHistory() 
  const onClickCharacter = () => {
    history.push(`${Routes.Characters}/${id}` )
  }
  return (
    <Grid item {...gridProps}>
      <Card sx={{ boxShadow: 4, height: 320, display:"flex", justifyContent: "space-between", flexDirection: "column", '&:hover img': { transform: 'scale(1.2)' } }}>
        <Box sx={{ maxHeight: 200, overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="200"
            image={img || DISNEY_URL}
            alt={name}
            sx={{
              objectFit: {
                xs: 'contain',
                lg: 'cover',
              },
              userSelect: 'none',
              transition: 'transform 0.2s ease-in',
            }}
          />
        </Box>
        <CardContent>
          <Typography
            noWrap
            align="center"
            variant="h5"
            component="div"
          >
            <OverflowTip title={name}>{name}</OverflowTip>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ marginLeft: 'auto' }} onClick={onClickCharacter}>
            Подробнее
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
