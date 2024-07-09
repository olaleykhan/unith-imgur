import { transformAndSortImage } from '@/lib/store/images/utils'; // adjust the import path as necessary
import { ImageResponse } from '@/lib/types';

describe('transformAndSortImage', () => {
  const placeholder = 'placeholder.png';

  const data: Record<string, ImageResponse> = {
    '1': { index: 2, title: 'Title 2', description: 'Description 2', image: 'image2.png' },
    '2': { index: 1, title: 'Title 1', description: 'Description 1', image: '' },
    '3': { index: 3, title: 'Title 3', description: 'Description 3', image: 'image3.png' },
  };

  test('should replace empty image URLs with placeholder', () => {
    const result = transformAndSortImage(data, placeholder);

    expect(result[0].image).toBe(placeholder);
    expect(result[1].image).toBe('image2.png');
    expect(result[2].image).toBe('image3.png');
  });

  test('should sort the images by index', () => {
    const result = transformAndSortImage(data, placeholder);

    expect(result[0].index).toBe(1);
    expect(result[1].index).toBe(2);
    expect(result[2].index).toBe(3);
  });

  test('should transform the object to an array and maintain other properties', () => {
    const result = transformAndSortImage(data, placeholder);

    expect(result).toHaveLength(3);
    expect(result[0]).toEqual(expect.objectContaining({
      index: 1,
      title: 'Title 1',
      description: 'Description 1',
      image: placeholder,
    }));
    expect(result[1]).toEqual(expect.objectContaining({
      index: 2,
      title: 'Title 2',
      description: 'Description 2',
      image: 'image2.png',
    }));
    expect(result[2]).toEqual(expect.objectContaining({
      index: 3,
      title: 'Title 3',
      description: 'Description 3',
      image: 'image3.png',
    }));
  });
});
