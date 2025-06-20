// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  safelist: [
    // Opacity
    'opacity-0',
    'opacity-100',
    // Translate X
    'translate-x-0',
    'translate-x-12',
    '-translate-x-12',
    // Translate Y
    'translate-y-0',
    'translate-y-12',
    '-translate-y-12',
    // Scale
    'scale-90',
    'scale-95',
    'scale-100',
    'scale-75',
    // (add more if you experiment with different effects)
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'primary-50':   '#fdebed',
        'primary-100':  '#f7c1c6',
        'primary-200':  '#f4a3aa',
        'primary-300':  '#ee7983',
        'primary-400':  '#eb5f6b',
        'primary-500':  '#e63746',
        'primary-600':  '#d13240',
        'primary-700':  '#a32732',
        'primary-800':  '#7f1e27',
        'primary-900':  '#61171d',
        // Neutral (gray)
        'neutral-50':   '#e8ebee',
        'neutral-100':  '#b9c1cb',
        'neutral-200':  '#68788f',
        'neutral-300':  '#1d3658',
        'neutral-400':  '#15263e',
        'neutral-500':  '#0c1725',
        // Success
        'success-50':   '#e3f9f2',
        'success-100':  '#d0f5e9',
        'success-200':  '#a1ecd2',
        'success-300':  '#71e2bc',
        'success-400':  '#42d9a5',
        'success-500':  '#13cf8f',
        'success-600':  '#0fa672',
        'success-700':  '#0b7c56',
        'success-800':  '#085339',
        'success-900':  '#04291d',
        // Warning
        'warning-50':   '#fff7e7',
        'warning-100':  '#fff1d7',
        'warning-200':  '#ffe3af',
        'warning-300':  '#ffd688',
        'warning-400':  '#ffc860',
        'warning-500':  '#fab431',
        'warning-600':  '#cc952d',
        'warning-700':  '#997022',
        'warning-800':  '#664a16',
        'warning-900':  '#33250b',
        // Error
        'error-50':     '#ffe3e3',
        'error-100':    '#ffd0d0',
        'error-200':    '#ffa2a2',
        'error-300':    '#ff7373',
        'error-400':    '#ff4545',
        'error-500':    '#ff1616',
        'error-600':    '#cc1212',
        'error-700':    '#990d0d',
        'error-800':    '#660909',
        'error-900':    '#330404',
        // White/black
        'white-100':    '#ffffff',
        'white-80':     'rgba(255,255,255,0.8)',
        'white-60':     'rgba(255,255,255,0.6)',
        'white-40':     'rgba(255,255,255,0.4)',
        'white-20':     'rgba(255,255,255,0.2)',
        'black-100':    '#000000',
        'black-80':     'rgba(0,0,0,0.8)',
        'black-60':     'rgba(0,0,0,0.6)',
        'black-40':     'rgba(0,0,0,0.4)',
        'black-20':     'rgba(0,0,0,0.2)',
        // Misc
        'misc-dark-background':   '#0c1725',
        'misc-dark-disable-fill': '#101e30',
        'misc-dark-disable-stroke': '#15263e',
        'misc-background':        '#f5f5f5',
        'misc-disable-fill':      '#f6f6f7',
        'misc-disable-stroke':    '#eaebec',
      },
      transitionDelay: {
        '500': '500ms',
        '1000': '1000ms',
        // Add more if needed!
      },
    },
  },
};
