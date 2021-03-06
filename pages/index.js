import { Box, Container, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
    <Container>
        <Box borderRadius="lg" bg="blue" p={3} mb={6} align='center'>
            Yooo I are Me.
        </Box>

        <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Mikel-Jon (Mike) West
                </Heading>
                <p>Ultimate Badass</p>
            </Box>
        </Box>
    </Container>
    )
}

export default Page