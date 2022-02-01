import Container from "@mui/material/Container";
// import { Typography } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from "../components/modal";

const Tour = () => {
    return (
        <Container sx={{ width: 900 }}>

            <Typography variant="h3"
                component="h1" marginTop={3}>
                Explore the World in Vegas
            </Typography>
            <Box marginTop={3} sx={{ display: "flex" }}>
                <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" alt="image "
                    height={325} />
                <ImageCollage />
            </Box>
            <Box>
                <Typography variant="h6"
                    component="h4" marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant="paragraph"
                    component="p" marginTop={3}>
                    Lorem dcwejncwdc
                </Typography>
            </Box>
            <Box>
                <Typography variant="h6"
                    component="h4" marginTop={3} marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordions />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>

    );

}
export default Tour;