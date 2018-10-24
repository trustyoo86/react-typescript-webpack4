'use strict'

import * as React from 'react'
import * as Loadable from 'react-loadable'

const Loading = () => {
  return (
    <h3>Loading...</h3>
  )
}

export const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ 'components/home/Home'),
  loading: Loading,
})

export const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ 'components/about/About'),
  loading: Loading,
})