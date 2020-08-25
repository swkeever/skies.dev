/* eslint-disable no-bitwise */

/**
 * Implementation similar to Java's hashCode method.
 *
 * Sourced from: https://stackoverflow.com/a/7616484
 */
export default function hash(str: string): number {
  let res = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    res = ((res << 5) - res + str.charCodeAt(i)) | 0;
  }
  return res;
}
