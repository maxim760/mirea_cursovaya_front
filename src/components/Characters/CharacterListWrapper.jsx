import React, {memo} from 'react'
import { Grid } from '@material-ui/core'
import { CharacterListItem } from './CharacterListItem'
import {toImg} from "../../utils/utilsFn"


export const CharacterListWrapper = memo(({items}) => {
  return (
    <Grid container spacing={3} sx={{ flexGrow: 1, p: 1.5 }} columns={10}>
      {items?.map((item) => (
        <CharacterListItem
          key={item._id}
          id={item._id}
          img={toImg(item.imageUrl)}
          name={item.name}
          lg={2}
          sm={5}
          xs={10}
        />
      ))}
    </Grid>
        
  )
})