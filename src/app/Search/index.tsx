import { Box, CardMedia, CircularProgress, Typography } from "@mui/material";
import SearchField from "@src/common-components/SearchField";
import useSearch from "./hooks";
import * as styles from './styles';
import search from '../../assets/search.png';
import PlayerCard from "../PlayerCard";

export default function Search() {
    const { setId, isLoading, data } = useSearch();

    return (
        <Box css={styles.container}>
            <SearchField onSubmit={setId} placeholder="Search for character I.d" />
            {
                isLoading ?
                    <CircularProgress />
                    : !!data ?
                        <PlayerCard player={data} />
                        :
                        <>
                            <CardMedia
                                css={styles.searchIcon}
                                image={search}
                                title="search"
                            />
                            <Typography css={styles.subTitle}>Search for a character i.d in order to view a character</Typography>
                        </>
            }
        </Box>
    );
}