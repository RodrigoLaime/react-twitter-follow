/* import { useState } from 'react' */
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'Fernandes',
    name: 'Alberto',
    isFollowing: false,
  },
  {
    userName: 'capoya',
    name: 'Larry',
    isFollowing: true,
  },
  {
    userName: 'quito',
    name: 'Estevan',
    isFollowing: false,
  },
  {
    userName: 'Paredes',
    name: 'Armando',
    isFollowing: true,
  }
]

export function App() {
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
            {name}
          </TwitterFollowCard> 
        ))
      }
    </section>
  )
}
/* iniciar con npm run dev */