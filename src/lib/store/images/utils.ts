import { Image,ImageResponse } from "@/lib/types";
function transformObjectToArray<T>(input: Record<string, T>): ({ id: string}&T)[] {
    return Object.keys(input).map(key => ({
        id: key,
        ...input[key]
    }));
}



function sortByIndex<T extends { index: number }>(arr: T[]): T[] {
    return arr.sort((a, b) => a.index - b.index);
}





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

