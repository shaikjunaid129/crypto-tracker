import { Typography } from '@material-ui/core'
import React from 'react'
import Navbar from './Navbar'

function ContactUs() {
  return (
    <>
      <Navbar />
      <footer>
        <Typography
          style={{
            position: 'absolute',
            bottom: 0,
            fontSize: 20,
            left: 650
          }}

        >

          Mohammed Junaid Shaik  &copy;
        </Typography>
      </footer>
    </>

  )
}

export default ContactUs