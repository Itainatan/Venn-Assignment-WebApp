import { Box, CardMedia } from "@mui/material";
import * as styles from "./styles";
import title from '../../assets/title.png'

export function Title() {
    return (
        <Box css={styles.container}>
            <CardMedia
                sx={{ height: "200px", width: "200px", objectFit: "contain"  }}
                image={title}
                title="venn"
            />

        </Box>
    )
}