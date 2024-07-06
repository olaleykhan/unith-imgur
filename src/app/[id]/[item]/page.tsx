"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useFetchAllQuery } from "@/lib/store/images/imagesApiSlice";

type Props = {
  params: { id: string; item: string };
};
const Page = ({ params }: Props) => {
  const { id, item } = params;

  const { image, isLoading, isError, isSuccess } = useFetchAllQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      image: data?.find((image) => image.index === Number(id)),
      ...rest,
    }),
  });

  console.log(image, "image in imageer");
  if (!image && isLoading) return <> IS loading </>;
  if (isError) return <>eror</>;
  if (!image && (isError || isSuccess)) return <> image not found</>;
  if (isSuccess) {
    return (
      <div>
        <h1>Page</h1>
        <p>Item: {image?.title}</p>
        <p>desc: {image?.description}</p>
      </div>
    );
  }

  return null;
};

export default Page;
