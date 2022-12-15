const throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const player = new Player('vimeo-player');

const STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(STORAGE_KEY, seconds);
  }, 1000)
);

const currentTime = localStorage.getItem(STORAGE_KEY);
player.setCurrentTime(currentTime);
