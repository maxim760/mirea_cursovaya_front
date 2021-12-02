import { List,ListItem, Typography, ListItemIcon, ListItemText, Box } from '@material-ui/core'
import React from 'react'
import { useTitle } from '../utils/hooks'
import LabelIcon from '@material-ui/icons/LabelOutlined';

const facts = [
  {
    text: `В мультфильме «Мулан» моделью для Ли Шанга послужил Брюс Уиллис. Точнее, именно с него срисовывали движения во время тренировки бойцов в лагере. Его позвали и озвучить Шанга, но голос не подошел к образу.`
  },
  {
    text: `Самому молодому злодею Диснея — 23 года. Это Ханс из «Холодного сердца».`},
  { text: `У королевы из «Белоснежки и семи гномов» есть имя — Гримхильда.` },
  { text: `Производство мультфильма «Рапунцель» обошлось дороже фильма «Аватар» Джеймса Камерона.` },
  { text: `Производство мультфильма «Рапунцель» обошлось дороже фильма «Аватар» Джеймса Камерона.` },
  { text: `Первое слово, произнесенное Микки Маусом, — «хот-дог!» в мультфильме «Karnival Kid» 1929-го года. До этого Микки только свистел.` },
  { text: `Студия «Дисней» собиралась выпустить свою линию вина, чтобы прорекламировать мультфильм «Рататуй», но на них обрушился шквал критики за то, что они привлекают внимание к алкоголю с помощью мультиков, и от идеи пришлось отказаться.` },
  { text: `Для того, чтобы создать движения Тарзана, скользящего по стволам деревьев в джунглях, создатели наблюдали за профессиональным скейтбордистом Тони Хоуком.` },
  { text: `Для того, чтобы создать движения Тарзана, скользящего по стволам деревьев в джунглях, создатели наблюдали за профессиональным скейтбордистом Тони Хоуком.` },
  { text: `Настоящее имя Бу из «Корпорации монстров» — Мэри.Это можно узнать,
  рассмотрев рисунки в ее комнате.` },
]


export const AboutPage = () => {
  useTitle("О персонажах")
  return (
    <>
      <Typography variant="h1" sx={{fontSize: 32, textAlign: "center", pt: "20px"}}>Факты о дисней</Typography>
      <List sx={{display: "flex", flexWrap: "wrap", alignItems: "stretch"}} >
        {facts.map((fact, i) => (
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
    </>
  )
}
