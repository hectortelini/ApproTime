import { getCocktails, saveCocktails, saveFavorites } from '../../localStorage'
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  GET_RANDOM_COCKTAIL,
  RESET_RANDOM_COCKTAIL,
} from '../actionTypes'
import { getInitialState } from '../models'
import {
  CocktailPayload,
  CocktailsAction,
  FavoritePayload,
  Reducer,
} from '../types'

const getRandomCocktail: Reducer = (state, action) => {
  const cocktail = (action.payload as CocktailPayload).cocktail
  const isCocktailExiting = state.cocktails.find((e) => e.id === cocktail.id)
  return {
    ...state,
    cocktails: isCocktailExiting
      ? state.cocktails
      : [...state.cocktails, cocktail],
    randomCocktail: (action.payload as CocktailPayload).cocktail,
  }
}

const resetRandomCocktail: Reducer = (state, action) => {
  return {
    ...state,
    randomCocktail: undefined,
  }
}

const addFavorite: Reducer = (state, action) => {
  console.log(state)
  const payload = action.payload as FavoritePayload
  const favorites = [...state.favorites, payload.id]
  saveFavorites(favorites)
  const favoriteCocktail = state.cocktails.find(
    (cocktail) => cocktail.id === payload.id
  )
  const savedCocktails = getCocktails() ?? []
  const cocktails = favoriteCocktail
    ? savedCocktails.concat(favoriteCocktail)
    : undefined
  if (cocktails) {
    saveCocktails(cocktails)
  }

  return {
    ...state,
    favorites,
  }
}

const removeFavorite: Reducer = (state, action) => {
  console.log(state)
  const payload = action.payload as FavoritePayload
  const favorites = [...state.favorites.filter((item) => item !== payload.id)]
  saveFavorites(favorites)
  const cocktails = state.cocktails.filter(
    (cocktail) => cocktail.id !== payload.id
  )
  saveCocktails(cocktails)
  return {
    ...state,
    favorites,
  }
}

const HANDLERS: Record<string, Reducer> = {
  [ADD_FAVORITE]: addFavorite,
  [REMOVE_FAVORITE]: removeFavorite,
  [GET_RANDOM_COCKTAIL]: getRandomCocktail,
  [RESET_RANDOM_COCKTAIL]: resetRandomCocktail,
}

const cocktailsReducer = (
  state = getInitialState(),
  action?: CocktailsAction
) => {
  if (action) {
    return HANDLERS[action.type as string]?.(state, action) ?? state
  }
  return state
}

export default cocktailsReducer
