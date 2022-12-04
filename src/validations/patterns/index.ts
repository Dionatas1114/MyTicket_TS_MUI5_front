import patterns from './patterns';

export default function pattern(pattern: string, data: string) {
  return new RegExp(patterns[pattern]).test(data);
}
