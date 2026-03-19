// src/lib/utils.test.ts
import { cn } from './utils';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

jest.mock('clsx', () => ({
  clsx: jest.fn((...inputs) => inputs.join(' ')),
}));

jest.mock('tailwind-merge', () => ({
  twMerge: jest.fn((input) => input),
}));

describe('cn', () => {
  it('should merge class names correctly', () => {
    const result = cn('class1', 'class2');
    expect(result).toBe('class1 class2');
    expect(clsx).toHaveBeenCalledWith('class1', 'class2');
    expect(twMerge).toHaveBeenCalledWith('class1 class2');
  });

  it('should handle empty inputs', () => {
    const result = cn();
    expect(result).toBe('');
    expect(clsx).toHaveBeenCalledWith();
    expect(twMerge).toHaveBeenCalledWith('');
  });

  it('should handle undefined and null inputs', () => {
    const result = cn('class1', undefined, 'class2', null);
    expect(result).toBe('class1 class2');
    expect(clsx).toHaveBeenCalledWith('class1', undefined, 'class2', null);
    expect(twMerge).toHaveBeenCalledWith('class1 class2');
  });

  it('should handle multiple class names', () => {
    const result = cn('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
    expect(clsx).toHaveBeenCalledWith('class1', 'class2', 'class3');
    expect(twMerge).toHaveBeenCalledWith('class1 class2 class3');
  });
});
