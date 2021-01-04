export default function rfunc(x: number, y: number): number;
export default function rfunc(x: string, y: number): string;

export default function rfunc(x: any, y: any): any {
  if (typeof x === 'number') return x + y;
  return `X=${x}-Y=${y}`;
}
