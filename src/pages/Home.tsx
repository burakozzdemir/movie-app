import * as React from "react";
import { useState } from "react";
import CardWithImage from "../components/CardWithImage";
import {
  Container,
  Grid,
  Skeleton,
  TextField,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchMovies from "../hooks/useFetchMovies";
import logo from "../assets/images/logo.png";

const HomePage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const { movies, fetchMore, hasMore, loading } = useFetchMovies(searchValue);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const renderMovies = () => {
    return (
      <>
        {movies.length ? (
          movies.map((movie, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardWithImage
                id={movie.id}
                title={movie.title}
                subtitle={movie.releaseDate}
                imageUrl={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
                imageTitle={movie.title}
                badgeContent={movie.originalLanguage}
                rating={movie.voteAverage}
              />
            </Grid>
          ))
        ) : (
          <>
            <img
              style={{
                position: "absolute",
                top: "50%",
                width: "115px",
                height: "115px",
              }}
              src={logo}
              alt="logo"
            />
            <h1
              style={{
                position: "absolute",
                top: "40%",
                fontFamily: "sans-serif",
              }}
            >
              The Movie Not Found...
            </h1>
          </>
        )}
      </>
    );
  };

  const renderSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < 6; i++) {
      skeletons.push(
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Skeleton variant="rectangular" width={330} height={72} />
          <Skeleton variant="rectangular" width={330} height={330} />
          <Skeleton variant="rectangular" width={330} height={64} />
        </Grid>
      );
    }
    return skeletons;
  };

  const isInputInvalid = searchValue.length > 0 && searchValue.length < 2;

  const helperTextStyles = {
    height: "1em",
    visibility: isInputInvalid ? "visible" : "hidden",
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        label="Search Movies"
        variant="outlined"
        value={searchValue}
        onChange={handleSearchChange}
        fullWidth
        sx={{ marginBottom: 1 }}
        error={isInputInvalid}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {isInputInvalid && (
                <FormHelperText sx={helperTextStyles}>
                  Type at least 2 characters to search
                </FormHelperText>
              )}
            </InputAdornment>
          ),
        }}
      />
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<h5 style={{ fontFamily: "sans-serif" }}>Loading...</h5>}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ width: "65rem" }}
        >
          {loading ? renderSkeletons() : renderMovies()}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
};

export default HomePage;
