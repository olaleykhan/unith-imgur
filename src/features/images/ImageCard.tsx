import React, { useState } from "react";
import Link from "next/link";
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
  function handleError() {
    setImage("https://placehold.co/200");
  }
  return (
    <CardActionArea
      component={Link}
      href={index + "/" + id}
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
      <Card>
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
