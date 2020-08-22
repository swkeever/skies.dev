import { useState, useEffect, useRef } from 'react';
import TypeWriter from './typewriter';

const writer = new TypeWriter();

export default function useTypeWriter(str: string) {
  const [word, setWord] = useState<string>('');
  const intervalRef = useRef<any>({});
  const strRef = useRef<any>({});

  useEffect(() => {
    strRef.current = setWord(writer.startTypeWord(str));
  }, [str]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setWord(writer.typing());
    }, writer.rd());
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [word]);

  return word;
}
