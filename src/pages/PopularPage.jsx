import React from 'react'
import { useTitle, useWindowSize } from '../utils/hooks'
import Slider from "react-slick";
import {Card, CardHeader, CardMedia, CardContent, Typography, Box, useTheme, IconButton} from "@material-ui/core"
import PrevIcon from '@material-ui/icons/ArrowBackIos';
import NextIcon from '@material-ui/icons/ArrowForwardIos';


const characters = [
  {
    title: "Микки Маус",
    img: "https://cdn.disney.ru/assets/w1386/14347961-da88-4f0a-8556-2badfb7c8004.webp",
    description: "Микки Маус - забавный персонаж мультфильма животных и официальный талисман The Walt Disney Company. Он был создан Уолтом Диснеем и Убом Иверксом в студии Walt Disney в 1928 году."
  },
  {
    title: "Дональд Дак",
    img: "https://cdn.disney.ru/assets/w1386/bea79212-f396-44b6-b79f-f1c224c92bcc.webp",
    description: "Дональд Дак - мультипликационный персонаж, созданный в 1934 году в Walt Disney Productions. Дональд - это антропоморфная белая утка с желто-оранжевым рисунком, ногами и ногами. Обычно он носит матросскую рубашку и кепку с галстуком-бабочкой."
  },
  {
    title: "Гуфи",
    img: "https://cdn.disney.ru/assets/w1386/a84b47d4-239a-4305-b3e4-54300e7b974a.webp",
    description: "Гуфи - забавный персонаж-животное, созданный в 1932 году в Walt Disney. Гуфи - высокая, черная собака с человеческим обликом, обычно носит кофту и жилет с брюками, туфлями, белыми перчатками и шляпой, изначально разработанной как смятый цилиндр."
  },
  {
    title: "Минни Маус",
    img: "https://cdn.disney.ru/assets/w1386/998c581d-d05d-4e31-beec-f4ef0052407a.webp",
    description: "Минерва «Минни» Маус - забавный животный персонаж мультфильма, созданный Убом Иверксом и Уолтом Диснеем. Первоначально она была нарисована Иверком в 1928 году, как и Микки Маус."
  },
  {
    title: "Плуто",
    img: "https://cdn.disney.ru/assets/w1386/f7f78990-2c47-46c8-927c-a952e4f489bb.webp",
    description: "Плуто, также называемый Плуто Пуп, является персонажем мультфильма, созданным в 1930 году в Walt Disney Productions. Он желто-оранжевого цвета, среднего размера, короткошерстная собака с черными ушами."
  },
  {
    title: "Винни-Пух",
    img: "https://cdn.disney.ru/assets/w1386/b2580274-f381-4112-b024-75721528583e.webp",
    description: "Винни-Пух - персонаж, основанный на рассказах А. Милна «Винни-Пух». Франшиза СМИ Диснея началась в 1966 году с театрального короткого выпуска про Винни-Пуха и Медового дерева."
  },
  {
    title: "Белоснежка",
    img: "https://cdn.disney.ru/assets/w1386/9f66ed11-e505-4d0f-b93a-5a7f3a746aea.webp",
    description: "Белоснежка - вымышленный персонаж из первого фильма Walt Disney \"Белоснежка и Семемь гномов\". Она - первая и единственная Принцесса Walt Disney, которая имеет свою собственную звезду на Голливудской Аллее славы."
  },
  {
    title: "Золушка",
    img: "https://cdn.disney.ru/assets/w1386/abee815d-8adf-4fbe-9297-d215125352da.webp",
    description: "Принцесса Золушка - вымышленный персонаж, который появляется в 12-м анимационном полнометражном фильме Walt Disney Pictures «Золушка» и его сиквелах «Золушка II: Мечты сбываются» и «Золушка III: Твист во времени»."
  },
  {
    title: "Ариэль",
    img: "https://cdn.disney.ru/assets/w1386/341430e4-0eac-48d8-bed5-a0750a4d3a9e.webp",
    description: "Принцесса Ариэль - вымышленный персонаж 28-го мультфильма Walt Disney Pictures «Русалочка»."
  },
  {
    title: "Базз Лайтер",
    img: "https://i.pinimg.com/originals/9d/f0/42/9df042b03eac9ce753313b92804c141f.jpg",
    description: "Базз Лайтер - вымышленный персонаж в франшизе \"История Игрушек\". Он - герой-охотник на игрушек в соответствии с фильмами и образом действия в франшизе \"История Игрушек\"."
  },
  {
    title: "Молния Маккуин",
    img: "https://cdn.disney.ru/assets/w1386/a59545e0-72be-494a-a75b-8f42cf097fb1.webp",
    description: "Молния Маккуин, обычно называемый просто Маккуин, представляет собой антропоморфную машину в анимационном фильме Pixar Cars, его сиквелах Тачки 2, Тачки 3 и телевизионных сериях, известных как Байки Мэтра."
  },
  {
    title: "Шериф Вуди",
    img: "https://im0-tub-ru.yandex.net/i?id=0cdd4e78e3bda859602d437fefd261f1-l&n=13",
    description: "Шериф Вуди Прайд - вымышленный персонаж в франшизе История игрушек. Он озвучен Томом Хэнксом во всех фильмах и Джимом Хэнксом в видеоиграх. Он чучело ковбойского персонажа, который ведет другие игрушки к приключениям в кино."
  },
  {
    title: "Мэтр",
    img: "https://cdn.disney.ru/assets/w1386/a26728f1-a8ae-4555-bce3-16a29aec99eb.webp",
    description: "Той Матер, или просто Мэтр, является персонажем в Тачках и его сиквелах, Тачках 2 и Тачках 3, а также Байки Мэтра. Он озвучен Ларри Кабель Гай и вдохновлен образом буксировочного грузовика International Harvester 1951 года."
  },
  {
    title: "Дейзи Дак",
    img: "https://cdn.disney.ru/assets/w1386/c9263944-4467-472b-95e6-f697d7358d13.webp",
    description: "Дейзи Дак — мультипликационный персонаж, созданный в 1940 году Диком Ландли. Дейзи представляет собой атропоморфную утку. Подружка Дональда Дака."
  },
  {
    title: "Пит",
    img: "https://cdn.disney.ru/assets/w1386/374d9fd9-4254-41df-9441-f50410e4177e.webp",
    description: "Пит  часто появляется в качестве заклятого врага и антагониста в историях вселенной Микки Мауса. Первоначально он был медведем, но с появлением Микки Мауса в 1928 году его определили как кота. Пит-старейший продолжающийся персонаж Диснея."
  },
]


const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const midSize = 385
const smallSize = 250
const xsSize = 300

export const PopularPage = ({}) => {
  useTitle("Популярные персонажи")
  const { breakpoints } = useTheme()
  console.log(breakpoints)
  const { width } = useWindowSize()
  return (
    <Box sx={{overflow: "hidden"}}>
      <Typography variant="h1" sx={{fontSize: 24, textAlign: "center", pt: "10px"}}>Популярные</Typography>
      <Slider
        dots={width >= breakpoints.values.sm}
        {...settings}
        arrows={true}
        prevArrow={<IconButton size="small"><PrevIcon /></IconButton>}
        nextArrow={<IconButton size="small"><NextIcon /></IconButton>}
      >
        {characters.map(({ title, img, description }) => (
          <Card sx={{display: "flex !important", flexDirection: "column", alignItems: "center",maxWidth: {sm: smallSize * 2,md: midSize * 2, xs: xsSize},  width: "100%"}}>
            <CardHeader title={title} titleTypographyProps={{sx: {fontSize: "32px"}}} />
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
  )
}