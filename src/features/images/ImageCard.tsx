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

type Props = {
  imageData: Image;
};

const ImageCard: React.FC<Props> = ({ imageData }) => {
  const { image: img, title, description, id, index } = imageData;
  const [image, setImage] = useState(img);

  const dispatch = useDispatch();
  const activeImage = useSelector((state: RootState) => state.image.active);
  console.log("ACTIVE IMAGE IS :", activeImage);

  function handleError() {
    setImage("https://placehold.co/200");
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
        borderRadius: 4,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        transition: "transform 0.05s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Card
        sx={{
          border: activeImage === index ? "2px solid red" : "none",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          onError={handleError}
          sx={{
            height: 200,
            objectFit: "cover",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default ImageCard;
