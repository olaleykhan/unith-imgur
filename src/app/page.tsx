import Image from "next/image";
import ImageList from "@/features/images/ImageList";
import Header from "@/components/Header";

export default function Page() {
  return (
    <main>
      <Header>Header</Header>
      <ImageList />
    </main>
  );
}
