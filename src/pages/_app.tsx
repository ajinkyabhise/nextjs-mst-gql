// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }



import React from "react"
import * as ReactDOM from "react-dom"
import { createHttpClient } from "mst-gql"
import { RootStore, StoreContext } from "../../models"
import type { AppProps } from 'next/app'

const rootStore = RootStore.create(undefined, {
  //gqlHttpClient: createHttpClient("https://www.universe.com/graphiql")

  gqlHttpClient: createHttpClient("https://www.universe.com/graphiql")
})

export default function App({ Component, pageProps }: AppProps) {
  return <StoreContext.Provider value={rootStore}>
  <Component {...pageProps} />
 </StoreContext.Provider>
}
