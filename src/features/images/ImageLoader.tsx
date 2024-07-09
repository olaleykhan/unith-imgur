import { Skeleton } from "@mui/material";

type Props = {
  h?: number;
};
const ImageLoader: React.FC<Props> = ({ h = 150 }) => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={h}
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={20}
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={20}
        animation="wave"
      />
    </>
  );
};

export default ImageLoader;
