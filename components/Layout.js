"use client"
import PropTypes from 'prop-types'
import Sidebar from "./Sidebar/Sidebar";
import styles from "./layout.module.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

function Layout({ children, api }) {
  const router = useRouter()

  const [userAuth, setUserAuth] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const jwt = localStorage.getItem('JWT_TOKEN');
    console.log(jwt)
    if (jwt !== null) {
      async function fetch() {
        const res = await axios.get(`${api}/user`, {
          headers: {
            'Authorization': localStorage.getItem('JWT_TOKEN'), // Add your authorization token here
            'Content-Type': 'application/json', // Set Content-Type according to your data format
          }
        })
        setUserAuth(res.data);
        setLoading(false)
      }
      fetch();
      console.log("first")
    }else{
      setLoading(false);
    }
    
  }, [])
  const user = userAuth.role;
  return (
    <>
      {user === "admin" ? <><div className={`${styles.main}`}>
        <div className={`${styles.col1}`}>
          <Sidebar api={api} /></div>
        <div className={`${styles.col2}`}>
          {children}
        </div>
      </div></>
        :
        <>{loading ?
          <>
            <h1 className={styles.loading}>loading</h1>
          </>
          :
          <>
            <div className={`${styles.invalid}`}>
              <h1 className={styles.loading}>Invalid</h1>
              <button onClick={() => { router.push('/login') }}>Login</button>
            </div></>
        }</>}

    </>
  )
}

Layout.propTypes = {}

export default Layout
