import React, { useEffect, useState, useMemo } from 'react'
import {ReactComponent as ArticleIcon} from "../utils/assets/img/article.svg"
import {ReactComponent as EnemyIcon} from "../utils/assets/img/enemy.svg"
import {ReactComponent as FilmsIcon} from "../utils/assets/img/films.svg"
import {ReactComponent as GamesIcon} from "../utils/assets/img/games.svg"
import {ReactComponent as TVIcon} from "../utils/assets/img/tv.svg"
import {ReactComponent as AllyIcon} from "../utils/assets/img/ally.svg"
import {ReactComponent as ParkIcon} from "../utils/assets/img/park.svg"
import { useParams, useHistory } from 'react-router-dom'
import { disneyApi } from '../services/disneyApi'
import Swal from 'sweetalert2'
import { Routes } from '../utils/paths'
import { CircularProgress, Typography, Box, Fab, Tooltip } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { flex } from '../utils/style/common'
import { useLocalStorageState } from 'ahooks'
import { StorageKeys } from '../utils/constants'
import { useTitle } from '../utils/hooks'
import { InfoCard } from '../components/InfoCard/InfoCard'
import { toImg } from '../utils/utilsFn'
import { HEADER_HEIGHT, Template } from '../components'
/* 
allies: [] +
createdAt: "2021-04-12T01:31:45.428Z"
enemies: [] +
films: ['Bolt (film)'] +
imageUrl: "https://static.wikia.nocookie.net/disney/images/b/b2/Agent-%28Bolt%29.jpg/revision/latest?cb=20200730204648" +
name: "Agent" +
parkAttractions: [] 
shortFilms: [] +
sourceUrl: "https://disney.fandom.com/wiki/Agent" +
tvShows: [] +
updatedAt: "2021-04-12T01:31:45.428Z" +
url: "https://api.disneyapi.dev/characters/136" +
videoGames: []+
*/

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px",
  },
  loader: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    ...flex.center
  },
  cards: {
    display: "flex",
    my: "20px",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "space-evenly"
  }
}
export const CharacterPage = () => {
  const params = useParams()
  const id = +params.id
  const [favorites, setFavorites] = useLocalStorageState(StorageKeys.favorite, [])
  const isFavorite = useMemo(() => {
    return favorites.map(item => item._id).includes(id)
  }, [favorites])
  const Icon = isFavorite ? FavoriteIcon : FavoriteBorderIcon
  const toggleFavorite = () => {
    if(isFavorite) {
      setFavorites(prev => prev.filter(item => item._id !== id))
    } else {
      setFavorites(prev=> [...prev, item])
    }
  }  
  const favoriteTitle = isFavorite ? "Удалить из избранных" : "Добавить в избранные"
  const [item, setItem] = useState(null)
  useTitle(item?.name ? item.name  + " Дисней" : "Дисней")
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const item = await disneyApi.getOne(id)
        setItem(item)
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Ой...",
          text: error.message,
        }).then(() => {
          history.push(Routes.Characters)
        })
      } finally {
        setLoading(false)
      }
    })()
  }, [])
  return (
    <Template withBackBtn={!loading}>
      <Box sx={styles.wrapper}>
      {loading ? (
        <Box sx={styles.loader}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography sx={{textAlign: "center", px:"40px"}} variant="h2">{item.name}</Typography>
            <Box sx={styles.cards}>  
              <InfoCard
                Icon={ArticleIcon}
                caption="Информация"
                isLink
                list={[
                  { link: item.sourceUrl, value: "Статья о персонаже" },
                  { link: toImg(item.imageUrl), value: "Картинка" },
                ]}
                hideOnEmpty
              />    
              <InfoCard
                Icon={FilmsIcon}
                caption={"Фильмы"}
                list={[...item.films, item.shortFilms]}
                emptyText={"Фильмов нет"}
              />
              <InfoCard
                Icon={AllyIcon}
                caption={"Союзники"}
                list={item.allies}
                emptyText={"Союзников нет"}
                hideOnEmpty
              />
              <InfoCard
                Icon={EnemyIcon}
                caption={"Враги"}
                list={item.enemies}
                emptyText={"Врагов нет"}
                hideOnEmpty
              />
              <InfoCard
                Icon={ParkIcon}
                caption={"Парки"}
                list={item.parkAttractions}
                emptyText={"Парков нет"}
                hideOnEmpty
              />
              <InfoCard
                Icon={GamesIcon}
                caption={"Игры"}
                list={item.videoGames}
                emptyText={"Игр нет"}
                hideOnEmpty
              />
              <InfoCard
                Icon={TVIcon}
                caption={"ТВ Шоу"}
                list={item.tvShows}
                emptyText={"ТВ Шоу нет"}
                hideOnEmpty
              />
          </Box>
          <Fab
            color="default"
            size="medium"
            aria-label="add"
            sx={{ position: "fixed", right: 16, top: HEADER_HEIGHT + 16 }}
            onClick={toggleFavorite}
          >
            <Tooltip title={favoriteTitle}>
              <Icon sx={{fill: "red"}} />
            </Tooltip>
          </Fab>
        </>
      )}
    </Box>
    </Template>
  )
}
