import { Box, CardMedia, Typography } from "@mui/material";
import * as styles from './styles';
import { Player } from "../types";

export default function PlayerCard({ player }: { player: Player }) {
    return (
        <Box css={styles.container}>
            <CardMedia
                css={styles.image}
                image={player.image}
                title="venn"
            />
            <Box css={styles.data}>
                <Typography css={styles.header}>Character description</Typography>
                <Box css={styles.mainData}>
                    <Box css={styles.keyValue}>
                        <Typography css={styles.key}>i.d</Typography>
                        <Typography css={styles.value}>{player.id}</Typography>
                    </Box>
                    <Box css={styles.keyValue}>
                        <Typography css={styles.key}>Name</Typography>
                        <Typography css={styles.value}>{player.name}</Typography>
                    </Box>
                    <Box css={styles.keyValue}>
                        <Typography css={styles.key}>Gender</Typography>
                        <Typography css={styles.value}>{player.gender}</Typography>
                    </Box>
                    <Box css={styles.keyValue}>
                        <Typography css={styles.key}>Origin</Typography>
                        <Typography css={styles.value}>{player.origin.name}</Typography>
                    </Box>
                    <Box css={styles.keyValue}>
                        <Typography css={styles.key}>Species</Typography>
                        <Typography css={styles.value}>{player.species}</Typography>
                    </Box>
                    <Box css={styles.keyValue}>
                        <Typography css={styles.key}>Status</Typography>
                        <Typography css={styles.value}>{player.status}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}