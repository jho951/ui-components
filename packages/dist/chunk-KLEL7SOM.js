// assert/svg/arrow.svg
var arrow_default = '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <polyline points="6 9 12 15 18 9" />\n</svg>';

// assert/svg/close.svg
var close_default = '<svg\n  viewBox="0 0 32 32"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n  aria-hidden="true"\n  focusable="false"\n>\n  <line x1="8" y1="8" x2="24" y2="24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>\n  <line x1="24" y1="8" x2="8" y2="24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>\n</svg>\n';

// assert/svg/spinner.svg
var spinner_default = '<svg\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="3"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <circle\n    cx="12"\n    cy="12"\n    r="10"\n    stroke="currentColor"\n    opacity="0.25"\n    fill="none"\n  />\n  <path\n    d="M12 2a10 10 0 0 1 10 10"\n    stroke="currentColor"\n  />\n</svg>\n';

// assert/svg/required.svg
var required_default = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"\n          fill="currentColor"\n          stroke="currentColor"\n          stroke-width="2"\n          stroke-linejoin="round"/>\n</svg>';

// assert/svg/index.ts
var SVG_ASSETS = {
  arrow: arrow_default,
  close: close_default,
  spinner: spinner_default,
  required: required_default
};

export {
  SVG_ASSETS
};
