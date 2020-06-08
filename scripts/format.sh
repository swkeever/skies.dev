#!/bin/bash
prettier --write "**/*.{js,jsx,ts,tsx,json,md,yml}";

npx eslint . \
  --ext .js,.ts,.tsx,.jsx \
  --fix;
