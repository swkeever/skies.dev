/* eslint-disable no-console */
const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs-extra');

const matches = glob.sync('src/images/**/*.{png,jpg,jpeg}');
const MAX_WIDTH = 1800;
const QUALITY = 70;

console.info('optimizing images...');

Promise.all(
  matches.map(async (match) => {
    const stream = sharp(match);
    const info = await stream.metadata();

    if (info.width < MAX_WIDTH) {
      return;
    }

    const optimizedName = match.replace(
      /(\..+)$/,
      (_, ext) => `-optimized${ext}`,
    );

    console.info('optimizing', match);

    await stream
      .resize(MAX_WIDTH)
      .jpeg({ quality: QUALITY })
      .toFile(optimizedName);

    fs.rename(optimizedName, match);
  }),
);
