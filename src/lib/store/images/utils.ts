import { Image,ImageResponse } from "@/lib/types";
import { transformObjectToArray, sortByIndex } from "@/lib/utils/transform";


function replaceEmptyImageUrls(obj: Image, placeholder: string): Image {
    return {
        ...obj,
        image: obj.image.trim() === '' ? placeholder : obj.image
    };
}

export function transformAndSortImage(
    data: Record<string,ImageResponse>, 
    placeholder: string
): Image[] {
    const arrayData = transformObjectToArray(data);
    const replacedImages = arrayData.map(item => replaceEmptyImageUrls(item, placeholder));
    return sortByIndex(replacedImages);
}

