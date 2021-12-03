import { List,ListItem, Typography, ListItemIcon, ListItemText, Box } from '@material-ui/core'
import React from 'react'
import { useTitle } from '../utils/hooks'
import LabelIcon from '@material-ui/icons/LabelOutlined';
import { Template } from '../components';
import { DisneyFacts } from '../utils/constants';


export const AboutPage = () => {
  useTitle("О персонажах")
  return (
    <Template>
      <Typography variant="h1" sx={{fontSize: 32, textAlign: "center", pt: "20px"}}>Факты о дисней</Typography>
      <List sx={{display: "flex", flexWrap: "wrap", alignItems: "stretch"}} >
        {DisneyFacts.map((fact, i) => (
          <ListItem key={i} sx={{
            padding: "10px", alignItems: "stretch", width: {
              xs: "100%",
              md: "50%"
          }}}>
            <Box sx={{boxShadow: "0 0 5px rgba(0,0,0,0.2)", borderRadius: "12px", padding: "10px", display: "flex", alignItems: "center", width: "100%"}}>
              <ListItemIcon>
                <LabelIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{fontSize: 20}}>Факт {i + 1}</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {fact.text}
                    </Typography>
                  </React.Fragment>
                }
              />
              </Box>
          </ListItem>
        ))}
        </List>
    </Template>
  )
}
