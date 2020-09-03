import React from 'react';
import tw from '@utils/tailwind';

export const BOARD_WIDTH = 800;
export const BOARD_HEIGHT = 600;
export const BOARD_ID = 'snake-game';

export default function Game() {
  // React.useEffect(() => {
  //   const canvas = document.getElementById(BOARD_ID);
  //   const ctx = canvas.getContext('2d');
  //   const scale = 10;

  //   const rows = canvas.height / scale;
  //   const columns = canvas.width / scale;
  // }, []);

  return (
    <canvas
      className={tw(
        'bg-neutralBgSoft',
        'border border-neutralBgSofter',
        'mx-auto',
        'w-full',
      )}
      id={BOARD_ID}
      width={BOARD_WIDTH}
      height={BOARD_HEIGHT}
    >
      heyy
    </canvas>
  );
}
