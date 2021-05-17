import { useState, useEffect } from 'react'

import User from './User'

export const Users = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers((prevState) => [...prevState, ...data])
      setIsLoading(false)
    } catch {
      alert('Something went wrong')
      setIsLoading(false)
    }
  }

  const onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      !isLoading && getUsers()
    }
  }

  useEffect(() => {
    getUsers()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {users.map((user, index) => (
        <User data={user} key={`user-${index}`} />
      ))}
      {isLoading && `Loading`}
    </>
  )
}
