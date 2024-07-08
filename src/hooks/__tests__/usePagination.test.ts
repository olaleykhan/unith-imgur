import {renderHook} from '@testing-library/react'
import { usePaginatedItems } from '@/hooks/usePagination';

describe('usePaginatedItems Hook', () => {
  test('returns correct paginated items', () => {
    const data = Array.from({ length: 100 }, (_, i) => ({ id: i + 1 }));

    const { result } = renderHook(() =>
      usePaginatedItems(data, 1, 10)
    );

    expect(result.current).toHaveLength(10);
    expect(result.current[0].id).toBe(1);
    expect(result.current[9].id).toBe(10);
  });

  test('returns correct items for middle page', () => {
    const data = Array.from({ length: 100 }, (_, i) => ({ id: i + 1 }));

    const { result } = renderHook(() =>
      usePaginatedItems(data, 5, 10)
    );

    expect(result.current).toHaveLength(10);
    expect(result.current[0].id).toBe(41);
    expect(result.current[9].id).toBe(50);
  });

  test('returns correct items for last page', () => {
    const data = Array.from({ length: 100 }, (_, i) => ({ id: i + 1 }));

    const { result } = renderHook(() =>
      usePaginatedItems(data, 10, 10)
    );

    expect(result.current).toHaveLength(10);
    expect(result.current[0].id).toBe(91);
    expect(result.current[9].id).toBe(100);
  });
});
