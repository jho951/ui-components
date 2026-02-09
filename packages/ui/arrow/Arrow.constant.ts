import type { ArrowDirection } from './Arrow.types.ts';

export const DIRECTION_MAP: Record<ArrowDirection, string> = {
    down: '0deg',
    left: '90deg',
    up: '180deg',
    right: '-90deg',
};