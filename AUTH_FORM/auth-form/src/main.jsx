import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostProvider from './context/PostProvider.jsx'
import UserProvider from './context/LoginUserProvider.jsx'
import ListProvider from './context/UserListProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostProvider>
      <UserProvider>
        <ListProvider>
          <App />
        </ListProvider>
      </UserProvider>
    </PostProvider>
    
  </StrictMode>,
)
