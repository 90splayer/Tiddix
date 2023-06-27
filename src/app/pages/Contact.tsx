import { Box } from '@chakra-ui/react'
import ContactUs from 'app/components/contact/ContactUs'
import { Footer } from 'app/layout/Footer'
import Header from 'app/layout/Header'
import React, { FC } from 'react'

const Contact: FC = () => {
  return (
    <Box>
        <Header />
        <ContactUs />
        <Footer />
    </Box>
  )
}

export default Contact