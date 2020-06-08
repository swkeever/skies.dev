// eslint-disable-next-line import/prefer-default-export
export function toHandle(name: string): string {
  return name.replace('.', '').replace(/\s+/g, '.').toLowerCase();
}
