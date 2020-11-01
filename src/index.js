import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"

import { ThemeProvider } from "styled-components"
import Theme from "./theme/theme"
import GlobalStyle from "./theme/GlobalStyle"

import App from "./App"

import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
)
