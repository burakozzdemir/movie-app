import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import Badge from "@mui/material/Badge";
import Rating from "@mui/material/Rating";
import StarRateIcon from "@mui/icons-material/StarRate";
import Tooltip from "@mui/material/Tooltip";
import FavoriteHeart from "./FavoriteHeart";

interface CardWithImageProps {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageTitle: string;
  imageWidth?: number;
  imageHeight?: number;
  badgeContent: string;
  rating: number;
}

const CardWithImage: React.FC<CardWithImageProps> = ({
  id,
  title,
  subtitle,
  imageUrl,
  imageTitle,
  imageWidth = 300,
  imageHeight = 450,
  badgeContent,
  rating,
}) => {
  const ratingOutOf5 = rating / 2;

  let releaseYear;
  if (!!subtitle) {
    releaseYear = subtitle.slice(0, 4);
  }

  const truncateTitle = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  };

  const truncatedTitle = truncateTitle(title, 50);

  const validImageUrl =
    imageUrl && !imageUrl.includes("null")
      ? `https://image.tmdb.org/t/p/w500${imageUrl}`
      : "https://via.placeholder.com/220x330.png?text=No+Image";

  return (
    <Card sx={{ maxWidth: imageWidth, margin: "16px auto", height: "604px" }}>
      <Tooltip title={title}>
        <div>
          <CardHeader
            title={truncatedTitle}
            subheader={releaseYear}
            titleTypographyProps={{
              noWrap: false,
              variant: "h6",
              display: "-webkit-box",
              overflow: "hidden",
            }}
            subheaderTypographyProps={{
              noWrap: true,
              variant: "subtitle2",
              marginLeft: 14,
              color: 'primary'

            }}
            sx={{
              height: "70px",
              paddingBottom: 1,
              paddingTop: 1,
              overflowWrap: "break-word",
              "& .MuiTypography-h6": {
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              },
            }}
          />
        </div>
      </Tooltip>
      <Badge
        badgeContent={badgeContent.toString().toUpperCase()}
        color="error"
        overlap="circular"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          height={imageHeight}
          image={validImageUrl}
          alt={imageTitle}
        />
      </Badge>
      <CardContent
        sx={{
          textAlign: "center",
        }}
      >
        <Rating
          value={ratingOutOf5}
          precision={0.1}
          readOnly
          icon={<StarRateIcon fontSize="inherit" />}
        />
        <FavoriteHeart
          movie={{
            id,
            title,
            posterPath: imageUrl,
            originalLanguage: badgeContent,
            voteAverage: rating,
            releaseDate: subtitle,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default CardWithImage;
