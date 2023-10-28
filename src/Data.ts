export interface Page {
  name: string;
  icon: string;
}

export interface Action {
  name: string;
  icon: string;
}

export const pages: Page[] = [
  { name: 'Media', icon: `multimedia` },
  { name: 'OBS', icon: `video-wireless` },
  { name: 'Youtube', icon: `youtube` },
  { name: 'Premiere', icon: `movie-open-edit` },
  { name: 'Chrome', icon: `google-chrome` },
  { name: 'Photoshop', icon: `image` },
  // Add more pages with their corresponding Material Design icons
];

export const actions: { [pageName: string]: Action[] } = {
  Media: [
    { name: 'Volume Up', icon: `volume-plus` },
    { name: 'Volume Down', icon: `volume-minus` },
    { name: 'Next', icon: `skip-next` },
    { name: 'Play/Pause', icon: `play-pause` },
    { name: 'Previous', icon: `skip-previous` },
    { name: 'Mute', icon: `volume-off` },
  ],
  OBS: [
    { name: 'Start Streaming', icon: `access-point` },
    { name: 'Stop Streaming', icon: `access-point-off` },
    { name: 'Start Recording', icon: `record-rec` },
    { name: 'Stop Recording', icon: `stop` },
    // Add more OBS actions here
  ],
  Youtube: [
    { name: 'Like', icon: `thumb-up` },
    { name: 'Dislike', icon: `thumb-down` },
    { name: 'Subscribe', icon: `youtube-subscription` },
    { name: 'Share', icon: `share` },
    // Add more Youtube actions here
  ],
  Premiere: [
    { name: 'Cut', icon: `content-cut` },
    { name: 'Copy', icon: `content-copy` },
    { name: 'Paste', icon: `content-paste` },
    { name: 'Undo', icon: `undo` },
    // Add more Premiere actions here
  ],
  Chrome: [
    { name: 'Open New Tab', icon: `tab-plus` },
    { name: 'Close Tab', icon: `tab-remove` },
    { name: 'Refresh Page', icon: `refresh` },
    { name: 'Bookmark Page', icon: `bookmark` },
    // Add more Chrome actions here
  ],
  Photoshop: [
    { name: 'Create New Layer', icon: `layers` },
    { name: 'Select Area', icon: `crop` },
    { name: 'Apply Filter', icon: `image-filter-black-white` },
    { name: 'Undo', icon: `undo` },
    // Add more Photoshop actions here
  ],
};
