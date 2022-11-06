import React, { FC } from 'react';

type Props = {
  width: number
  height: number
  id: string
};
export const SharedSvgIcons: FC<Props> = ({width, id, height}) => {
  switch (id) {
    case 'logo':
      return <svg width={width} height={height} viewBox="0 0 346.7 346.7">
        <path
          d="M26.8 211c-4.8 19.1-1.4 33.7 8.2 46 9.6 12.4-1 19.6-9 23.4s-11 6.4-11.6 11.9 6.8 27 10.4 30.5 11.6 11.3 16.8 19.3c5.2 8 12.1 2.8 12.1 2.8 5 3.8 10 0 10 0 8.7 4 14-1.7 14-1.7 4.4-5.2-5-10.7-5-10.7-5.8-10.2-10.2-2-11.8-4.2s-3-2.4-11.8-12.6 14-6.9 22-8.8 23-12.1 23-12.1c0 12 4.2 10.2 10.3 16.5s8.8 10.4 16.8 13.7c8 3.4 11.8 2.8 19 7.5s22 3.8 22 3.8c6.6 2.2 13 0 13 0 15.9 0 9.3-5.5 3.5-12.9s-17.3-1.1-22.6-4.7-18.1-9-24.7-13c-6.7-3.8 0-10.7 0-17s4.9-11.3 4.9-11.3h25.6s19.8-1.3 25 9.4 13.3 13 13.5 18.7c.3 5.8-4.6 6.3-4.6 6.3-11-3-11.3 14.6-11.3 14.6 13.5 18 39.6-7.4 39.6-7.4 30.3-2.8 28-47.3 28-47.3 6.1-4.5 15.8-16 22.1-26.5a32.4 32.4 0 0 1 40.2-10.7c16 7.7 18.7-5.2 18.7-5.2 5.5.8 7.2-6.4 7.2-6.4 7.1-8-5.5-9.9-5.8-29.7s-16.8-23.4-16-29.2c.8-5.8 17.6-24.2 13.5-22.5-3.6 1.4-18.7 9-22.5 10.8a15 15 0 0 0-.9-2.3c-2.2-5-26.4 10.7-26.4 10.7s-38.4 22.7-45.8 24.4c-7.5 1.6-6.7-3.3-15.7-2.5-9.1.8-13.7 1.7-54.5-15.7-41-17.3-115.4 10.6-115.4 10.6S-8.6 82.8 41 41.9 24.2-33 8.1 56.2c-16 89.1 23.3 135.4 18.7 154.7z" />
      </svg>;
    case 'sortZA':
      return <svg width={width} height={height} viewBox="0 0 19 22">
        <path fill="#8C8C8C" fillRule="evenodd"
              d="M4 .21a.63.63 0 0 1 .94 0l4 4.36L8 5.6 5.14 2.48V21.8H3.8V2.48L.94 5.6 0 4.57 4 .21Zm11.14 1.24c-1.1 0-2 .98-2 2.18v2.18h4V3.63c0-1.2-.9-2.18-2-2.18Zm2 5.82v2.9h1.33V3.63c0-2-1.5-3.63-3.33-3.63-1.84 0-3.34 1.63-3.34 3.63v6.54h1.34v-2.9h4Zm-5.34 4.36h4c1.48 0 2.67 1.3 2.67 2.9 0 .87-.35 1.65-.9 2.18.55.54.9 1.32.9 2.18 0 1.6-1.2 2.91-2.67 2.91h-4V11.63Zm4 4.36c.74 0 1.34-.65 1.34-1.46 0-.8-.6-1.45-1.34-1.45h-2.66v2.9h2.66Zm-2.66 1.45h2.66c.74 0 1.34.65 1.34 1.45 0 .8-.6 1.46-1.34 1.46h-2.66v-2.91Z" />
      </svg>;
    case 'sortAZ':
      return <svg width={width} height={height} viewBox="0 0 19 22">
        <path fill="#8C8C8C" fillRule="evenodd"
              d="M3.8 19.32V0h1.34v19.32L8 16.2l.94 1.03-4 4.36a.64.64 0 0 1-.47.21.64.64 0 0 1-.47-.21l-4-4.36.94-1.03 2.86 3.12ZM15.14 1.45c-1.1 0-2 .98-2 2.18v2.18h4V3.63c0-1.2-.9-2.18-2-2.18Zm2 5.82v2.9h1.33V3.63c0-2-1.5-3.63-3.33-3.63-1.84 0-3.34 1.63-3.34 3.63v6.54h1.34v-2.9h4Zm-5.34 4.36h4c1.48 0 2.67 1.3 2.67 2.9 0 .87-.35 1.65-.9 2.18.55.54.9 1.32.9 2.18 0 1.6-1.2 2.91-2.67 2.91h-4V11.63Zm4 4.36c.74 0 1.34-.65 1.34-1.46 0-.8-.6-1.45-1.34-1.45h-2.66v2.9h2.66Zm-2.66 1.45h2.66c.74 0 1.34.65 1.34 1.45 0 .8-.6 1.46-1.34 1.46h-2.66v-2.91Z" />
      </svg>;
    case 'arrowBack':
      return <svg width={width} height={height} viewBox="0 0 20 20">
        <path fill="#FF868E"
              d="m4.7 10.99 8.6 8.6a1.4 1.4 0 1 0 1.99-1.98L7.68 10l7.6-7.6a1.4 1.4 0 0 0-1.96-2L4.72 9a1.4 1.4 0 0 0 0 1.98Z" />
      </svg>;
    case 'dislike':
      return <svg width={width} height={height} viewBox="0 0 30 30">
        <path fill="#FF868E"
              d="M0 15a15 15 0 1 1 30 0 15 15 0 0 1-30 0ZM15 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26Zm-5 10H8v-2h2v2Zm12 0h-2v-2h2v2ZM7.6 20.2l.6-.8a8.5 8.5 0 0 1 13.6 0l.6.8-1.6 1.2-.6-.8a6.5 6.5 0 0 0-10.4 0l-.6.8-1.6-1.2Z" />
      </svg>;
    case 'favorite':
      return <svg width={width} height={height} viewBox="0 0 30 26">
        <path fill="#FF868E"
              d="M8.071 2a6.071 6.071 0 0 0-4.293 10.364L15 23.586l11.222-11.222a6.071 6.071 0 1 0-8.586-8.586l-1.929 1.93a1 1 0 0 1-1.414 0l-1.929-1.93A6.071 6.071 0 0 0 8.071 2ZM0 8.071a8.071 8.071 0 0 1 13.778-5.707L15 3.586l1.222-1.222a8.071 8.071 0 0 1 11.414 11.414l-11.929 11.93a1 1 0 0 1-1.414 0L2.364 13.777A8.071 8.071 0 0 1 0 8.071Z" />
      </svg>;
    case 'like':
      return <svg width={width} height={height} viewBox="0 0 30 30">
        <path fill="#FF868E"
              d="M0 15a15 15 0 1 1 30 0 15 15 0 0 1-30 0ZM15 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26Zm-5 10H8v-2h2v2Zm12 0h-2v-2h2v2ZM9.2 16.6l.6.8a6.5 6.5 0 0 0 10.4 0l.6-.8 1.6 1.2-.6.8a8.5 8.5 0 0 1-13.6 0l-.6-.8 1.6-1.2Z" />
      </svg>;
    case 'search':
      return <svg width={width} height={height} viewBox="0 0 20 20">
        <path fill="#FF868E"
              d="m19.361 18.217-4.76-4.95a8.049 8.049 0 0 0 1.894-5.192C16.495 3.623 12.873 0 8.42 0 3.968 0 .345 3.623.345 8.075c0 4.453 3.623 8.075 8.075 8.075a7.989 7.989 0 0 0 4.627-1.461l4.796 4.988c.2.208.47.323.759.323a1.054 1.054 0 0 0 .759-1.783ZM8.421 2.107a5.975 5.975 0 0 1 5.968 5.968 5.975 5.975 0 0 1-5.969 5.969 5.975 5.975 0 0 1-5.968-5.969A5.975 5.975 0 0 1 8.42 2.107Z" />
      </svg>;
    case 'upload':
      return <svg width={width} height={height} viewBox="0 0 16 16">
        <path fill="#fff"
              d="m7.87 0 4.37 4.03-.83.9-2.92-2.7v10.13H7.28V2.3l-2.6 2.6-.86-.85L7.87 0ZM1.2 14.79V7.5H0V16h15.77V7.51h-1.22v7.28H1.21Z" />
      </svg>;
    case 'update':
      return <svg width={width} height={height} viewBox="0 0 18 20">
        <path fill="#FF868E"
              d="M8.48 2.5 6.93.95 7.9 0l3.17 3.17L7.9 6.34l-.96-.95 1.54-1.54a7.4 7.4 0 1 0 7.7 7.4v-.68h1.34v.68A8.76 8.76 0 1 1 8.48 2.5Z" />
      </svg>;
    case 'loader':
      return <svg width={width} height={height} viewBox="0 0 38 38">
        <linearGradient id="a" x1="8%" x2="65.7%" y1="0%" y2="23.9%">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="63.1%" stopColor="#000" stopOpacity=".6" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
          <path stroke="url(#a)" strokeWidth="2" d="M36 18C36 8 28 0 18 0">
            <animateTransform attributeName="transform" dur="0.9s" from="0 18 18" repeatCount="indefinite"
                              to="360 18 18" type="rotate" />
          </path>
          <circle cx="36" cy="18" r="1" fill="#000">
            <animateTransform attributeName="transform" dur="0.9s" from="0 18 18" repeatCount="indefinite"
                              to="360 18 18" type="rotate" />
          </circle>
        </g>
      </svg>;
    case 'close' :
      return <svg width={width} height={height} fill="none" viewBox="0 0 26 26">
        <path fill="#FF868E"
              d="M11.6 13 .3 1.7 1.7.3 13 11.6 24.3.3l1.4 1.4L14.4 13l11.3 11.3-1.4 1.4L13 14.4 1.7 25.7.3 24.3 11.6 13Z" />
      </svg>;
    case 'uploadBg' :
      return <svg width={width} height={height} fill="none" viewBox="0 0 200 200">
        <path fill="#F8F8F7" d="M140 40a20 20 0 1 0 0 40 20 20 0 0 0 0-40Z" />
        <path fill="#F8F8F7" fillRule="evenodd"
              d="M0 20C0 9 9 0 20 0h160c11 0 20 9 20 20v160a20.1 20.1 0 0 1-2.4 9.5A20 20 0 0 1 180 200H20c-11 0-20-9-20-20V20Zm64.7 21.9L60 37.2 13.3 84V20c0-3.7 3-6.7 6.7-6.7h160c3.7 0 6.7 3 6.7 6.7v113.3H156L64.7 42v-.1Z" />
      </svg>;
    case 'check':
      return <svg width={width} height={height} fill="none" viewBox="0 0 20 20">
        <path fill="#97EAB9"
              d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm10-8.67a8.67 8.67 0 1 0 0 17.34 8.67 8.67 0 0 0 0-17.34Zm5.19 5.75-5.76 7.2-4.52-3.77.85-1.02 3.48 2.9 4.9-6.14 1.05.83Z" />
      </svg>;
    case 'cross':
      return <svg width={width} height={height} fill="none" viewBox="0 0 20 20">
        <path fill="#FF868E"
              d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm10-8.67a8.67 8.67 0 1 0 0 17.34 8.67 8.67 0 0 0 0-17.34ZM9.06 10 5.53 6.47l.94-.94L10 9.06l3.53-3.53.94.94L10.94 10l3.53 3.53-.94.94L10 10.94l-3.53 3.53-.94-.94L9.06 10Z" />
      </svg>;
    default:
      return null;
  }
};
