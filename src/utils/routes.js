import { AboutPage, CharacterListPage, CharacterPage, FavoritesPage, PopularPage} from '../pages'
import { Routes } from './paths'

export const RedirectRoute = Routes.Characters
export const routes = [
  { path: Routes.Characters, component: CharacterListPage, exact: true },
  { path: Routes.About, component: AboutPage, exact: true, withBackBtn: true },
  { path: Routes.Characters + '/:id', component: CharacterPage, exact: true, withBackBtn: true },
  { path: Routes.Favorites, component: FavoritesPage, exact: true, withBackBtn: true  },
  { path: Routes.Popular, component: PopularPage, exact: true },
]

export const getCharacterUrl = (id) => `${Routes.Characters}/${id}`
