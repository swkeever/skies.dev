export function toHandle(name: string): string {
  return name.replace(/[.]/g, '').replace(/\s+/g, '.').toLowerCase();
}

// source: https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
export function toTitleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
}
