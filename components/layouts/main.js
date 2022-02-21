import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio for Mikel-Jon (Mike) West" />
        <meta name="author" content="Mikel-Jon West" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Mikel-Jon (Mike) West" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Mikel-Jon (Mike) West</title>
            </Head>

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main