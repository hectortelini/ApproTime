import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { favoritesList as favoritesListSelector } from '../store'
import { Cocktail } from '../types'
import CocktailItem from '../components/CocktailItem'

const ApproDetail: React.FC = () => {
  const favorites: Cocktail[] = useSelector(favoritesListSelector)
  const renderFavoriteList = () =>
    favorites.map((cocktail) => {
      return <CocktailItem key={cocktail.id} cocktail={cocktail} />
    })
  const renderEmpty = () => (
    <div className="h-full text-gray-400 flex flex-col items-center justify-center text-2xl relative">
      <div className="flex flex-col justify-center items-center -top-20 relative">
        <figure className="w-28">
          <svg
            id="Capa_1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="m488 295.001h-263c-24.853 0-45-20.147-45-45v-5h308z"
                fill="#6d1d40"
              />
              <path
                d="m476.3 105.491h-225.58c-40.955 0-77.996 23.827-95.285 60.28h-50.515c-8.284 0-15 6.716-15 15v60.28c0 8.284 6.716 15 15 15h50.535c17.289 36.455 54.311 60.29 95.265 60.29h225.58c19.686 0 35.7-16.015 35.7-35.7v-139.45c0-19.685-16.015-35.7-35.7-35.7zm5.7 175.15c0 3.143-2.557 5.7-5.7 5.7h-225.58c-24.167 0-46.427-11.593-60.427-30.29h291.707z"
                fill="#a44e3f"
              />
              <path
                d="m89.92 210.876v30.175c0 8.284 6.716 15 15 15h50.535c17.289 36.455 54.311 60.29 95.265 60.29h225.58c19.686 0 35.7-16.015 35.7-35.7v-69.765zm392.08 69.765c0 3.143-2.557 5.7-5.7 5.7h-225.58c-24.167 0-46.427-11.593-60.427-30.29h291.707z"
                fill="#87373b"
              />
              <g>
                <path
                  d="m104.92 256.051h-60.03c-8.284 0-15-6.716-15-15v-60.28c0-8.284 6.716-15 15-15h60.03z"
                  fill="#ca5742"
                />
              </g>
              <g>
                <path
                  d="m44.891 406.509c-24.753 0-44.891-20.138-44.891-44.891 0-6.147 1.756-17.376 16.939-43.803 7.675-13.358 15.246-24.47 15.564-24.937 2.794-4.093 7.431-6.541 12.387-6.541s9.593 2.448 12.387 6.541c.319.467 7.89 11.579 15.564 24.937 15.183 26.427 16.939 37.656 16.939 43.803.001 24.753-20.136 44.891-44.889 44.891z"
                  fill="#ffcf64"
                />
              </g>
              <path
                d="m29.89 210.876v30.175c0 8.284 6.716 15 15 15h60.03v-45.175z"
                fill="#a44e3f"
              />
              <path
                d="m89.781 361.618c0-6.147-1.756-17.376-16.939-43.803-7.675-13.358-15.246-24.47-15.564-24.937-2.794-4.093-7.431-6.541-12.387-6.541v120.172c24.753 0 44.89-20.138 44.89-44.891z"
                fill="#fea72b"
              />
            </g>
          </svg>
        </figure>
        <h3>Oooh noo your list is empty!</h3>
        <h2>Try to add some cocktails =)</h2>
      </div>
    </div>
  )

  const renderFavoriteOrEmpty = () =>
    favorites.length ? renderFavoriteList() : renderEmpty()

  const render = () => (
    <div className="pb-10 h-full">{renderFavoriteOrEmpty()}</div>
  )

  return render()
}

export default ApproDetail
