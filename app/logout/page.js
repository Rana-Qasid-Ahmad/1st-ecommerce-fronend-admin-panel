"use client"
import Layout from '@/components/Layout'
import { useRouter } from 'next/navigation'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

function page(props) {
  const router = useRouter()
  useEffect(() => {
    localStorage.removeItem("JWT_TOKEN");
    localStorage.removeItem("User_Email");
    localStorage.removeItem("User_Name");
    setTimeout(() => {
      router.push('/login')
    }, 2000);
  }, [])

  return (
    <><h1 className='loggout'>Logged Out</h1></>
  )
}

page.propTypes = {}

export default page
