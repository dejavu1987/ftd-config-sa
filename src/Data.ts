export const mdIcoUrl =
  'https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg/';

export interface Page {
  name: string;
  icon: string;
}

export type ActionTuple = [string, string];
export interface Action {
  name: string;
  icon: string;
  actions: ActionTuple[];
  latch?: boolean;
  latchIcon?: string;
}

export const pages: Page[] = [
  { name: 'Media', icon: `multimedia` },
  { name: 'OBS', icon: `video-wireless` },
  { name: 'Youtube', icon: `youtube` },
  { name: 'Premiere', icon: `movie-open-edit` },
  { name: 'Chrome', icon: `google-chrome` },
];

export const actions: Action[][] = [
  [
    {
      name: 'Volume Up',
      icon: `volume-plus`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Volume Down',
      icon: `volume-minus`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Next',
      icon: `skip-next`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Play/Pause',
      icon: `play-pause`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Previous',
      icon: `skip-previous`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
  ],
  [
    {
      name: 'Start Streaming',
      icon: `access-point`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Stop Streaming',
      icon: `access-point-off`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Start Recording',
      icon: `record-rec`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Stop Recording',
      icon: `stop`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    // Add more OBS actions here
  ],
  [
    {
      name: 'Like',
      icon: `thumb-up`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Dislike',
      icon: `thumb-down`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Subscribe',
      icon: `youtube-subscription`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Share',
      icon: `share`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    // Add more Youtube actions here
  ],
  [
    {
      name: 'Cut',
      icon: `content-cut`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Copy',
      icon: `content-copy`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Paste',
      icon: `content-paste`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Undo',
      icon: `undo`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    // Add more Premiere actions here
  ],
  [
    {
      name: 'Open New Tab',
      icon: `tab-plus`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Close Tab',
      icon: `tab-remove`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    {
      name: 'Refresh Page',
      icon: `refresh`,
      actions: [
        ['5', '1'],
        ['4', 'r'],
      ],
    },
    {
      name: 'Bookmark Page',
      icon: `bookmark`,
      actions: [
        ['5', '1'],
        ['4', 't'],
      ],
    },
    // Add more Chrome actions here
  ],
];

export const icons: string[] = [
  'volume-plus',
  'volume-minus',
  'skip-next',
  'play-pause',
  'skip-previous',
  'volume-off',
  'access-point',
  'access-point-off',
  'record-rec',
  'stop',
  'thumb-up',
  'thumb-down',
  'youtube-subscription',
  'share',
  'content-cut',
  'content-copy',
  'content-paste',
  'undo',
  'tab-plus',
  'tab-remove',
  'refresh',
  'bookmark',
  'layers',
  'crop',
  'image-filter-black-white',
  'undo',
  'border-none-variant',
];

export type Subitem = {
  name: string;
  value: string;
};

export type ActionItem = {
  name: string;
  value: string;
  subitems: Subitem[];
};

export const actionTree: ActionItem[] = [
  {
    name: 'Do Nothing',
    value: '0',
    subitems: [
      {
        name: '--',
        value: '0',
      },
    ],
  },
  {
    name: 'Delay',
    value: '1',
    subitems: [
      {
        name: '100ms',
        value: '100',
      },
      {
        name: '200ms',
        value: '200',
      },
      {
        name: '500ms',
        value: '500',
      },
      {
        name: '1000ms',
        value: '1000',
      },
    ],
  },
  {
    name: 'Arrows and TAB',
    value: '2',
    subitems: [
      {
        name: '--',
        value: '0',
      },
      {
        name: 'UP Arrow',
        value: '1',
      },
      {
        name: 'DOWN Arrow',
        value: '2',
      },
      {
        name: 'LEFT Arrow',
        value: '3',
      },
      {
        name: 'RIGHT Arrow',
        value: '4',
      },
      {
        name: 'Backspace',
        value: '5',
      },
      {
        name: 'TAB',
        value: '6',
      },
      {
        name: 'Return',
        value: '7',
      },
      {
        name: 'Page Up',
        value: '8',
      },
      {
        name: 'Page Down',
        value: '9',
      },
      {
        name: 'Delete',
        value: '10',
      },
      {
        name: 'PrintScreen',
        value: '11',
      },
      {
        name: 'ESC',
        value: '12',
      },
      {
        name: 'HOME',
        value: '13',
      },
      {
        name: 'END',
        value: '14',
      },
    ],
  },
  {
    name: 'Mediakey',
    value: '3',
    subitems: [
      {
        name: 'Mute',
        value: '1',
      },
      {
        name: 'Volume Down',
        value: '2',
      },
      {
        name: 'Volume Up',
        value: '3',
      },
      {
        name: 'Play/Pause',
        value: '4',
      },
      {
        name: 'Stop',
        value: '5',
      },
      {
        name: 'Next',
        value: '6',
      },
      {
        name: 'Previous',
        value: '7',
      },
    ],
  },
  {
    name: 'Letters',
    value: '4',
    subitems: [
      {
        name: '-space-',
        value: ' ',
      },
      {
        name: 'a',
        value: 'a',
      },
      {
        name: 'b',
        value: 'b',
      },
      {
        name: 'c',
        value: 'c',
      },
      {
        name: 'd',
        value: 'd',
      },
      {
        name: 'e',
        value: 'e',
      },
      {
        name: 'f',
        value: 'f',
      },
      {
        name: 'g',
        value: 'g',
      },
      {
        name: 'h',
        value: 'h',
      },
      {
        name: 'i',
        value: 'i',
      },
      {
        name: 'j',
        value: 'j',
      },
      {
        name: 'k',
        value: 'k',
      },
      {
        name: 'l',
        value: 'l',
      },
      {
        name: 'm',
        value: 'm',
      },
      {
        name: 'n',
        value: 'n',
      },
      {
        name: 'o',
        value: 'o',
      },
      {
        name: 'p',
        value: 'p',
      },
      {
        name: 'q',
        value: 'q',
      },
      {
        name: 'r',
        value: 'r',
      },
      {
        name: 's',
        value: 's',
      },
      {
        name: 't',
        value: 't',
      },
      {
        name: 'u',
        value: 'u',
      },
      {
        name: 'v',
        value: 'v',
      },
      {
        name: 'w',
        value: 'w',
      },
      {
        name: 'x',
        value: 'x',
      },
      {
        name: 'y',
        value: 'y',
      },
      {
        name: 'z',
        value: 'z',
      },
    ],
  },
  {
    name: 'Option Keys',
    value: '5',
    subitems: [
      {
        name: 'Left CTRL',
        value: '1',
      },
      {
        name: 'Left Shift',
        value: '2',
      },
      {
        name: 'Left ALT',
        value: '3',
      },
      {
        name: 'Left GUI',
        value: '4',
      },
      {
        name: 'Right CTRL',
        value: '5',
      },
      {
        name: 'Right Shift',
        value: '6',
      },
      {
        name: 'Right ALT',
        value: '7',
      },
      {
        name: 'Right GUI',
        value: '8',
      },
      {
        name: 'Release All',
        value: '9',
      },
    ],
  },
  {
    name: 'Function Keys',
    value: '6',
    subitems: [
      {
        name: 'F1',
        value: '1',
      },
      {
        name: 'F2',
        value: '2',
      },
      {
        name: 'F3',
        value: '3',
      },
      {
        name: 'F4',
        value: '4',
      },
      {
        name: 'F5',
        value: '5',
      },
      {
        name: 'F6',
        value: '6',
      },
      {
        name: 'F7',
        value: '7',
      },
      {
        name: 'F8',
        value: '8',
      },
      {
        name: 'F9',
        value: '9',
      },
      {
        name: 'F10',
        value: '10',
      },
      {
        name: 'F11',
        value: '11',
      },
      {
        name: 'F12',
        value: '12',
      },
      {
        name: 'F13',
        value: '13',
      },
      {
        name: 'F14',
        value: '14',
      },
      {
        name: 'F15',
        value: '15',
      },
      {
        name: 'F16',
        value: '16',
      },
      {
        name: 'F17',
        value: '17',
      },
      {
        name: 'F18',
        value: '18',
      },
      {
        name: 'F19',
        value: '19',
      },
      {
        name: 'F20',
        value: '20',
      },
      {
        name: 'F21',
        value: '21',
      },
      {
        name: 'F22',
        value: '22',
      },
      {
        name: 'F23',
        value: '23',
      },
      {
        name: 'F24',
        value: '24',
      },
    ],
  },
  {
    name: 'Numbers',
    value: '7',
    subitems: [
      {
        name: '0',
        value: '0',
      },
      {
        name: '1',
        value: '1',
      },
      {
        name: '2',
        value: '2',
      },
      {
        name: '3',
        value: '3',
      },
      {
        name: '4',
        value: '4',
      },
      {
        name: '5',
        value: '5',
      },
      {
        name: '6',
        value: '6',
      },
      {
        name: '7',
        value: '7',
      },
      {
        name: '8',
        value: '8',
      },
      {
        name: '9',
        value: '9',
      },
    ],
  },
  {
    name: 'Special Chars',
    value: '8',
    subitems: [
      {
        name: '.',
        value: '.',
      },
      {
        name: ',',
        value: ',',
      },
      {
        name: '!',
        value: '!',
      },
      {
        name: '?',
        value: '?',
      },
      {
        name: '/',
        value: '/',
      },
      {
        name: '+',
        value: '+',
      },
      {
        name: '-',
        value: '-',
      },
      {
        name: '&',
        value: '&',
      },
      {
        name: '^',
        value: '^',
      },
      {
        name: '%',
        value: '%',
      },
      {
        name: '*',
        value: '*',
      },
      {
        name: '#',
        value: '#',
      },
      {
        name: '$',
        value: '$',
      },
      {
        name: '[',
        value: '[',
      },
      {
        name: ']',
        value: ']',
      },
    ],
  },
  {
    name: 'Combos',
    value: '9',
    subitems: [
      {
        name: 'LEFT CTRL+SHIFT',
        value: '1',
      },
      {
        name: 'LEFT ALT+SHIFT',
        value: '2',
      },
      {
        name: 'LEFT GUI+SHIFT',
        value: '3',
      },
      {
        name: 'LEFT CTRL+GUI',
        value: '4',
      },
      {
        name: 'LEFT ALT+GUI',
        value: '5',
      },
      {
        name: 'LEFT CTRL+ALT',
        value: '6',
      },
      {
        name: 'LEFT CTRL+ALT+GUI',
        value: '7',
      },
      {
        name: 'RIGHT CTRL+SHIFT',
        value: '8',
      },
      {
        name: 'RIGHT ALT+SHIFT',
        value: '9',
      },
      {
        name: 'RIGHT GUI+SHIFT',
        value: '10',
      },
      {
        name: 'RIGHT CTRL+GUI',
        value: '11',
      },
      {
        name: 'RIGHT ALT+GUI',
        value: '12',
      },
      {
        name: 'RIGHT CTRL+ALT',
        value: '13',
      },
      {
        name: 'RIGHT CTRL+ALT+GUI',
        value: '14',
      },
    ],
  },
  {
    name: 'Helpers',
    value: '10',
    subitems: [
      {
        name: 'Helper 1',
        value: '1',
      },
      {
        name: 'Helper 2',
        value: '2',
      },
      {
        name: 'Helper 3',
        value: '3',
      },
      {
        name: 'Helper 4',
        value: '4',
      },
      {
        name: 'Helper 5',
        value: '5',
      },
      {
        name: 'Helper 6',
        value: '6',
      },
      {
        name: 'Helper 7',
        value: '7',
      },
      {
        name: 'Helper 8',
        value: '8',
      },
      {
        name: 'Helper 9',
        value: '9',
      },
      {
        name: 'Helper 10',
        value: '10',
      },
      {
        name: 'Helper 11',
        value: '11',
      },
    ],
  },
  {
    name: 'FTD Functions',
    value: '11',
    subitems: [
      {
        name: 'Config Mode',
        value: '1',
      },
      {
        name: 'Brightness Up',
        value: '2',
      },
      {
        name: 'Brightness Down',
        value: '3',
      },
      {
        name: 'Enable/Disable Sleep',
        value: '4',
      },
    ],
  },
  {
    name: 'Numpad',
    value: '12',
    subitems: [
      {
        name: 'Numpad 0',
        value: '0',
      },
      {
        name: 'Numpad 1',
        value: '1',
      },
      {
        name: 'Numpad 2',
        value: '2',
      },
      {
        name: 'Numpad 3',
        value: '3',
      },
      {
        name: 'Numpad 4',
        value: '4',
      },
      {
        name: 'Numpad 5',
        value: '5',
      },
      {
        name: 'Numpad 6',
        value: '6',
      },
      {
        name: 'Numpad 7',
        value: '7',
      },
      {
        name: 'Numpad 8',
        value: '8',
      },
      {
        name: 'Numpad 9',
        value: '9',
      },
      {
        name: 'Numpad /',
        value: '10',
      },
      {
        name: 'Numpad *',
        value: '11',
      },
      {
        name: 'Numpad -',
        value: '12',
      },
      {
        name: 'Numpad +',
        value: '13',
      },
      {
        name: 'Numpad RETURN',
        value: '14',
      },
      {
        name: 'Numpad .',
        value: '15',
      },
    ],
  },
  {
    name: 'User Actions',
    value: '13',
    subitems: [
      {
        name: 'Action 1',
        value: '1',
      },
      {
        name: 'Action 2',
        value: '2',
      },
      {
        name: 'Action 3',
        value: '3',
      },
      {
        name: 'Action 4',
        value: '4',
      },
      {
        name: 'Action 5',
        value: '5',
      },
      {
        name: 'Action 6',
        value: '6',
      },
      {
        name: 'Action 7',
        value: '7',
      },
    ],
  },
];

export const getOptionsForAction = (act: string) => {
  return actionTree.filter(({ value }) => value === act)[0].subitems;
};
