import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import './index.css'
import { theme } from '../shared/config/theme'
import Header from '../widgets/Header'
import Routing from '../pages'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <Header />
          <Routing />
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HashRouter>,
)
