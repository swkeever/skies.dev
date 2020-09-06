import React from 'react';
import tw from '@utils/tailwind';
import useInterval from '@hooks/use-interval';
import globalStyles from '@styles/index';

const width = 12;
const height = 12;
const board: number[] = Array.from({ length: width * height }, (v, i) => i);

type Direction = 'U' | 'D' | 'L' | 'R';

function m2t1(x: number, y: number): number {
  return x + width * y;
}

function m1t2(i: number): [number, number] {
  return [i % width, Math.floor(i / width)];
}

const initialSnake = [4, 3, 2, 1, 0];
const initialFruit = m2t1(Math.floor(width / 2), Math.floor(height / 2));
const initialDirection = 'R';

export default function Game() {
  const [snake, setSnake] = React.useState<number[]>(initialSnake);
  const direction = React.useRef<Direction>(initialDirection);
  const [fruit, setFruit] = React.useState<number>(initialFruit);
  const [gameOver, setGameOver] = React.useState<boolean>(false);

  function updateDirection(e) {
    let nextDir = direction.current;
    switch (e.key) {
      case 'w': // up
        if (nextDir !== 'D') nextDir = 'U';
        break;

      case 's': // down
        if (nextDir !== 'U') nextDir = 'D';
        break;

      case 'a': // left
        if (nextDir !== 'R') nextDir = 'L';
        break;

      case 'd': // right
        if (nextDir !== 'L') nextDir = 'R';
        break;

      default:
    }
    direction.current = nextDir;
  }

  React.useEffect(() => {
    window.addEventListener('keydown', updateDirection);
  }, []);

  function updateSnake(grow = false) {
    let nextHead;
    const currHead = snake[0];
    const [currX, currY] = m1t2(currHead);

    switch (direction.current) {
      case 'U':
        nextHead = m2t1(currX, currY > 0 ? currY - 1 : height - 1);
        break;

      case 'D':
        nextHead = m2t1(currX, currY < height - 1 ? currY + 1 : 0);
        break;

      case 'L':
        nextHead = m2t1(currX > 0 ? currX - 1 : width - 1, currY);
        break;

      case 'R':
        nextHead = m2t1(currX < width - 1 ? currX + 1 : 0, currY);
        break;

      default:
        throw Error('Unknown direction');
    }

    const nextTail = snake.slice(0, grow ? snake.length : snake.length - 1);
    setSnake(() => [nextHead, ...nextTail]);
  }

  function checkCollided() {
    const head = snake[0];
    for (let i = 1; i < snake.length; i += 1) {
      const tail = snake[i];
      if (head === tail) {
        return true;
      }
    }
    return false;
  }

  function getRandomFruit() {
    let f = Math.floor(Math.random() * width * height);
    while (snake.includes(f)) {
      f = Math.floor(Math.random() * width * height);
    }
    return f;
  }

  useInterval(() => {
    if (gameOver) {
      setSnake(initialSnake);
      setFruit(initialFruit);
      direction.current = initialDirection;
      setGameOver(false);
    } else {
      const collided = checkCollided();
      if (collided) {
        setGameOver(() => true);
      } else if (snake[0] === fruit) {
        updateSnake(true);
        setFruit(getRandomFruit);
      } else {
        updateSnake(false);
      }
    }
  }, Math.floor(200 - snake.length * 4));

  return (
    <section className="mx-auto max-w-screen-xl">
      <h2>Game</h2>
      <div>
        <div>
          Score:
          {snake.length - initialSnake.length}
        </div>
      </div>
      <div
        className={tw(
          'mx-auto',
          'grid gap-1 grid-cols-12 grid-rows-12',
          'w-96 h-96',
          'bg-neutralBg',
          'transform',
          globalStyles.transitions,
        )}
      >
        {board.map((cell) => {
          let classes;
          if (snake.includes(cell)) {
            classes = tw('bg-green-500', 'rounded-lg');
          } else if (fruit === cell) {
            classes = tw('bg-red-500', 'rounded-full');
          } else {
            classes = tw('bg-neutralBgSoft', 'rounded-sm');
          }

          return (
            <div
              key={`cell-${cell}`}
              className={tw(classes, 'h-full w-full', globalStyles.transitions)}
            />
          );
        })}
      </div>
    </section>
  );
}
