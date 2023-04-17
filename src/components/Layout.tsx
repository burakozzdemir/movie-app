import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Badge,
} from "@mui/material";
import { useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { selectFavorites } from "../store/features/favoritesSlice";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const favoritesCount = useSelector(selectFavorites).length;

  return (
    <>
      <AppBar position="fixed" sx={{ background: "#032541" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              style={{
                maxWidth: "135px",
                height: "auto",
                display: "block",
                margin: "auto",
              }}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt=""
            />
          </Typography>
          {favoritesCount !== 0 && (
            <IconButton
              size="large"
              aria-label="show 17 new favorites"
              color="inherit"
            >
              <Badge badgeContent={favoritesCount} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ marginTop: 3 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
