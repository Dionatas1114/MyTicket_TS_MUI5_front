import patterns from './patterns';

export const pattern = (pattern: string, data: string) => new RegExp(patterns[pattern]).test(data);
