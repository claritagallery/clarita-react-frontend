import React from "react"

export interface IconProps {
  className?: string
  fill?: string
}

export const ImageIcon = (props: IconProps) => (
  <svg
    width="200"
    height="152.17"
    version="1.1"
    viewBox="0 0 150 114.13"
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(.29115 0 0 .29115 -26.902 -24.457)">
      <path d="m92.398 84v392h515.2v-392zm33.602 33.602h448v259l-88.375-96.773c-3.418-3.7422-8.5977-5.8008-13.648-5.4258-4.1562 0.30078-8.1719 2.2148-11.023 5.25l-75.949 80.676-112-125.12c-3.3828-3.8047-8.5703-5.9336-13.648-5.6016-4.2148 0.25781-8.3047 2.1758-11.199 5.25l-122.15 131.25zm263.2 44.801c-27.637 0-50.398 22.766-50.398 50.398 0 27.637 22.766 50.398 50.398 50.398 27.637 0 50.398-22.766 50.398-50.398 0-27.637-22.766-50.398-50.398-50.398zm0 33.602c9.4766 0 16.801 7.3242 16.801 16.801 0 9.4766-7.3242 16.801-16.801 16.801-9.4766 0-16.801-7.3242-16.801-16.801 0-9.4766 7.3242-16.801 16.801-16.801zm-129.15 75.25 153.12 171.15h-287.18v-27.125zm212.98 44.625 100.98 110.6v15.926h-115.68l-50.926-56.875z" />
    </g>
  </svg>
)