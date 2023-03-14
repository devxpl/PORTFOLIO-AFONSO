import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home-page'
import AboutPage from './pages/about-page'
import ContatoPage from './pages/contato-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/sobre',
    element: <AboutPage />
  },
  {
    path: '/contato',
    element: <ContatoPage />
  }
])

const App = (): JSX.Element => {
  return (
   <>
     <RouterProvider
        router={router}
      />
    </>
  )
}

export default App
