import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from "../store/features/favoritesSlice";
import { Movie } from "../types/movie";

interface FavoriteHeartProps {
  movie: Movie;
}

const FavoriteHeart: React.FC<FavoriteHeartProps> = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <IconButton
      onClick={handleClick}
      sx={{ marginBottom: 2, marginLeft: 13 }}
      color="primary"
    >
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default FavoriteHeart;
