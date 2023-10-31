import { Box, CardMedia } from "@mui/material";
import * as styles from './styles';
import background from '../../assets/background.png';

export function PrimaryImage() {
    return (
        <Box css={styles.container}>
            <CardMedia
                css={styles.image}
                image={background}
                title="rick and morty"
            />
        </Box>
    )
}