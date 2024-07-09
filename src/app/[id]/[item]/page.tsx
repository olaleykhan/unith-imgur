import LargeImageCard from "@/features/images/image/LargeImageCard";
import ImageCard from "@/features/images/ImageCard";
type Props = {
  params: { id: string; item: string };
};

const Page: React.FC<Props> = ({ params }) => {
  const { id } = params;

  return <LargeImageCard id={id} />;
};

export default Page;
