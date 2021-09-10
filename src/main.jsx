import React, { StrictMode } from 'react'
import { Provider } from "react-redux"
import { render } from 'react-dom'
import { store } from "./store"
import App from "./app/App"

const root = document.getElementById('root')

render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
    root
)
