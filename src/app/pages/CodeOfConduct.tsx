
import { Box } from '@chakra-ui/react'
import CoC from 'app/components/about-page/CoC'
import { Footer } from 'app/layout/Footer'
import Header from 'app/layout/Header'
import React, { FC } from 'react'

const CodeOfConduct: FC = () => {
  return (
    <Box>
        <Header/>
        <CoC/>
        <Footer />
    </Box>
  )
}

export default CodeOfConduct