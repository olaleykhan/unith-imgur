export function transformObjectToArray<T>(input: Record<string, T>): ({ id: string}&T)[] {
    return Object.keys(input).map(key => ({
        id: key,
        ...input[key]
    }));
}



export function sortByIndex<T extends { index: number }>(arr: T[]): T[] {
    return arr.sort((a, b) => a.index - b.index);
}
