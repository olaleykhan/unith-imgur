import React, { useState } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { setActive } from "@/lib/store/images/imageSlice";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Image } from "@/lib/types";
import { PLACEHOLDER_IMG } from "@/config";

type Props = {
  imageData: Image;
};

const ImageCard: React.FC<Props> = ({ imageData }) => {
  const { image: img, title, description, id, index } = imageData;
  const [image, setImage] = useState(img);

  const dispatch = useDispatch();
  const activeImage = useSelector((state: RootState) => state.image.active);

  function handleError() {
    setImage(PLACEHOLDER_IMG);
  }

  const handleClick = () => {
    dispatch(setActive(index));
  };

  return (
    <CardActionArea
      component={Link}
      href={index + "/" + id}
      onClick={handleClick}
      sx={{
        maxWidth: 300,
      }}
    >
      <Card
        sx={{
          border: activeImage === index ? "2px solid red" : "none",
          borderRadius: 4,
          backdropFilter: "blur(10px)",
          transition: "transform 0.08s ease-in-out",
          "&:hover": {
            boxShadow: 8,
            transform: "scale(1.012)",
          },
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          onError={handleError}
          sx={{
            height: 150,
            objectFit: "cover",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default ImageCard;
