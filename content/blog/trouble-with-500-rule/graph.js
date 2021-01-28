import React from "react"
import styled from "styled-components"

const StyledSvg = styled.svg`
  .graph-vertical-grid-major-label {
    font-size: 0.6em;
    text-anchor: end;
    dominant-baseline: central;
    fill: #a0a0a0;
  }
  .graph-horizontal-grid-major-label {
    font-size: 0.6em;
    text-anchor: middle;
    dominant-baseline: hanging;
    fill: #a0a0a0;
  }
  .graph-horizontal-grid-major {
    stroke: #606060;
  }
  .graph-horizontal-grid-minor {
    stroke: #505050;
  }
  .graph-vertical-grid-major {
    stroke: #606060;
  }
`

function GraphIcon(props) {
  return (
    <StyledSvg
      viewBox="0 0 600 371"
      fill="none"
      strokeLinecap="square"
      strokeMiterlimit={10}
      width={600}
      height={371}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <style>
        {
          ".graph-vertical-grid-major-label{text-anchor:end;dominant-baseline:central;font-size:.6em}.graph-horizontal-grid-major-label{text-anchor:middle;dominant-baseline:hanging;font-size:.6em}"
        }
      </style>
      <path
        className="graph-background"
        fill="#404040"
        d="M0 0h600v371H0V0z"
      />
      <path
        className="graph-horizontal-grid-major"
        stroke="#a0a0a0"
        strokeLinecap="butt"
        d="M78.5 63.5v235M204.5 63.5v235M330.5 63.5v235M455.5 63.5v235M581.5 63.5v235"
      />
      <path
        className="graph-horizontal-grid-minor"
        stroke="#787878"
        strokeLinecap="butt"
        d="M120.5 63.5v235M162.5 63.5v235M246.5 63.5v235M288.5 63.5v235M371.5 63.5v235M413.5 63.5v235M497.5 63.5v235M539.5 63.5v235"
      />
      <path
        className="graph-vertical-grid-major"
        stroke="#a0a0a0"
        strokeLinecap="butt"
        d="M78.5 298.5h503M78.5 251.5h503M78.5 204.5h503M78.5 157.5h503M78.5 110.5h503M78.5 63.5h503"
      />
      <clipPath id="id_0">
        <path d="M78.55 63.417h502.9V298.45H78.55V63.417z" />
      </clipPath>
      <path
        className="graph-graph"
        stroke="#00abff"
        strokeWidth={2}
        strokeLinecap="butt"
        clipPath="url(#id_0)"
        d="M96.151 52.33l1.258 24.928 1.257 21.256 1.257 18.27 1.257 15.815 1.258 13.779 1.257 12.075 1.257 10.639 1.258 9.418 1.257 8.376 1.257 7.479 1.257 6.705 1.258 6.032 1.257 5.446 1.257 4.932 1.257 4.48 1.257 4.08 1.258 3.726 1.257 3.411 1.257 3.131 1.257 2.88 1.258 2.655 1.257 2.452 1.257 2.269 1.258 2.104 1.257 1.954 1.257 1.818 1.257 1.694 1.257 1.581 1.258 1.478 1.257 1.384 1.257 1.296 1.257 1.217 1.258 1.144 1.257 1.076 1.257 1.014 1.257.956 1.258.902 1.257.853 1.257.807 1.257.763 1.258.724 1.257.687 1.257.653 1.257.62 1.258.589 1.257.561 1.257.535 1.258.51 1.257.485 1.257.465 1.257.443 1.258.424 1.257.406 1.257.388 1.257.372 1.257.356 1.258.342 1.257.328 1.257.314 1.257.303 1.258.29 1.257.28 1.257.269 1.257.258 1.258.25 1.257.24 1.257.23 1.257.224 1.258.215 1.257.207 1.257.2 1.257.195 1.258.187 1.257.18 1.257.175 1.257.17 1.258.163 1.257.158 1.257.154 1.258.148 1.257.144 1.257.14 1.257.135 1.258.132 1.257.127 1.257.123 1.257.12 1.257.117 1.258.113 1.257.11 1.257.107 1.257.104 1.258.1 1.257.099 1.257.095 1.257.093 1.258.09 1.257.089 1.257.086 1.257.083 1.258.082 1.257.08 1.257.077 1.257.075 1.258.073 1.257.072 1.257.07 1.258.068 1.257.067 1.257.065 1.257.063 1.258.062 1.257.06 1.257.06 1.257.058 1.257.056 1.258.055 1.257.054 1.257.053 1.257.052 1.258.05 1.257.05 1.257.048 1.257.047 1.258.046 1.257.045 1.257.044 1.257.044 1.258.042 1.257.042 1.257.04 1.257.04 1.258.04 1.257.038 1.257.037 1.257.037 1.258.036 1.257.035 1.257.035 1.257.034 1.258.033 1.257.033 1.257.032 1.257.032 1.258.03 1.257.03 1.257.03 1.257.03 1.258.029 1.257.028 1.257.027 1.257.027 1.258.027 1.257.026 1.257.026 1.258.025 1.257.025 1.257.025 1.257.024 1.258.023 1.257.023 1.257.023 1.257.022 1.257.023 1.258.021 1.257.021 1.257.021 1.257.021 1.258.02 1.257.02 1.257.02 1.257.02 1.258.018 1.257.019 1.257.018 1.257.018 1.258.018 1.257.018 1.257.017 1.257.017 1.258.017 1.257.016 1.257.017 1.257.015 1.258.016 1.257.016 1.257.015 1.257.015 1.258.015 1.257.015 1.257.014 1.257.014 1.258.014 1.257.014 1.257.014 1.257.013 1.258.013 1.257.013 1.257.013 1.257.013 1.258.012 1.257.013 1.257.012 1.257.012 1.258.012 1.257.011 1.257.012 1.257.011 1.258.011 1.257.011 1.257.011 1.257.011 1.258.01 1.257.011 1.257.01 1.257.01 1.258.01 1.257.01 1.257.01 1.258.01 1.257.01 1.257.01 1.257.009 1.258.009 1.257.009 1.257.009 1.257.009 1.257.009 1.258.008 1.257.009 1.257.008 1.257.009 1.258.008 1.257.008 1.257.008 1.257.008 1.258.008 1.257.008 1.257.007 1.257.008 1.258.007 1.257.008 1.257.007 1.257.007 1.258.008 1.257.007 1.257.007 1.257.006 1.258.007 1.257.007 1.257.007 1.257.006 1.258.007 1.257.006 1.257.007 1.257.006 1.258.006 1.257.006 1.257.007 1.257.006 1.258.006 1.257.005 1.257.006 1.257.006 1.258.006 1.257.005 1.257.006 1.257.006 1.258.005 1.257.005 1.257.006 1.257.005 1.258.005 1.257.006 1.257.005 1.257.005 1.258.005 1.257.005 1.257.005 1.258.005 1.257.005 1.257.004 1.257.005 1.258.005 1.257.004 1.257.005 1.257.005 1.257.004 1.258.005 1.257.004 1.257.004 1.257.005 1.258.004 1.257.004 1.257.004 1.257.005 1.258.004 1.257.004 1.257.004 1.257.004 1.258.004 1.257.004 1.257.004 1.257.004 1.258.003 1.257.004 1.257.004 1.257.004 1.258.003 1.257.004 1.257.004 1.257.003 1.258.004 1.257.003 1.257.004 1.257.003 1.258.004 1.257.003 1.257.003 1.257.004 1.258.003 1.257.003 1.257.004 1.257.003 1.258.003 1.257.003 1.257.003 1.257.003 1.258.003 1.257.004 1.257.002 1.257.003 1.258.003 1.257.003 1.257.003 1.257.003 1.258.003 1.257.003 1.257.003 1.257.003 1.258.002 1.257.003 1.257.003 1.257.003 1.258.002 1.257.003 1.257.003 1.257.002 1.258.003 1.257.002 1.257.003 1.257.002 1.258.003 1.257.002 1.257.003 1.257.002 1.258.003 1.257.002 1.257.003 1.257.002 1.258.002 1.257.003 1.257.002 1.257.002 1.258.003 1.257.002 1.257.002 1.257.002 1.258.002 1.257.003 1.257.002 1.257.002 1.258.002 1.257.002 1.257.002 1.258.002 1.257.003 1.257.002 1.257.002 1.258.002 1.257.002 1.257.002 1.257.002 1.258.002 1.257.002 1.257.002"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M99.151 52.33a3 3 0 11-6 0 3 3 0 016 0zM100.409 77.258a3 3 0 11-6 0 3 3 0 016 0zM101.666 98.514a3 3 0 11-6 0 3 3 0 016 0zM102.923 116.783a3 3 0 11-6 0 3 3 0 016 0zM104.18 132.599a3 3 0 11-6 0 3 3 0 016 0zM105.438 146.378a3 3 0 11-6 0 3 3 0 016 0zM106.695 158.453a3 3 0 11-6 0 3 3 0 016 0zM107.952 169.092a3 3 0 11-6 0 3 3 0 016 0zM109.21 178.51a3 3 0 11-6 0 3 3 0 016 0zM110.467 186.886a3 3 0 11-6 0 3 3 0 016 0zM111.724 194.365a3 3 0 11-6 0 3 3 0 016 0zM112.981 201.07a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M114.239 207.102a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M115.496 212.548a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M116.753 217.48a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M118.01 221.96a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M119.267 226.04a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M120.525 229.766a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M121.782 233.177a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M123.04 236.308a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M124.296 239.188a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M125.554 241.843a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M126.811 244.295a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M128.068 246.564a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M129.326 248.668a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M130.583 250.622a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M131.84 252.44a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M133.097 254.134a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M134.355 255.715a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M135.612 257.193a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M136.869 258.577a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M138.126 259.873a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M139.383 261.09a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M140.64 262.234a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M141.898 263.31a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M143.155 264.324a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M144.412 265.28a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M145.67 266.182a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M146.927 267.035a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M148.184 267.842a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M149.441 268.605a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M150.699 269.33a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M151.956 270.016a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M153.213 270.669a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M154.47 271.288a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M155.728 271.878a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M156.985 272.44a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M158.242 272.974a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M159.5 273.483a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M160.757 273.97a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M162.014 274.434a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M163.271 274.877a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M164.529 275.301a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M165.786 275.707a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M167.043 276.095a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M168.3 276.467a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M169.558 276.823a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M170.815 277.165a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M172.072 277.493a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M173.33 277.807a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M174.587 278.11a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M175.844 278.4a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M177.101 278.68a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M178.358 278.949a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M179.615 279.207a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M180.873 279.456a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M182.13 279.696a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M183.387 279.928a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M184.644 280.15a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M185.902 280.366a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M187.159 280.573a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M188.416 280.774a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M189.673 280.968a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M190.93 281.155a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M192.188 281.335a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M193.445 281.51a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M194.702 281.68a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M195.96 281.843a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M197.217 282.001a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M198.474 282.155a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M199.732 282.303a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M200.989 282.447a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M202.246 282.587a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M203.503 282.722a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M204.76 282.854a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M206.018 282.98a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M207.275 283.104a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M208.532 283.224a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M209.79 283.34a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M211.047 283.454a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M212.304 283.564a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M213.561 283.67a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M214.819 283.775a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M216.076 283.876a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M217.333 283.974a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M218.59 284.07a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M219.847 284.162a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M221.105 284.253a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M222.362 284.341a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M223.62 284.427a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M224.876 284.51a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M226.134 284.592a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M227.391 284.671a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M228.648 284.749a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M229.905 284.824a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M231.163 284.897a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M232.42 284.97a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M233.677 285.04a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M234.935 285.107a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M236.192 285.174a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M237.449 285.239a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M238.706 285.302a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M239.964 285.364a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M241.22 285.425a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M242.478 285.484a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M243.735 285.542a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M244.993 285.598a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M246.25 285.653a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M247.507 285.707a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M248.764 285.76a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M250.022 285.812a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M251.279 285.862a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M252.536 285.911a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M253.793 285.96a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M255.05 286.007a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M256.308 286.053a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M257.565 286.098a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M258.822 286.142a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M260.08 286.186a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M261.337 286.228a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M262.594 286.27a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M263.851 286.31a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M265.108 286.35a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M266.366 286.39a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M267.623 286.428a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M268.88 286.465a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M270.137 286.502a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M271.395 286.538a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M272.652 286.573a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M273.91 286.608a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M275.166 286.642a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M276.424 286.675a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M277.681 286.708a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M278.938 286.74a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M280.195 286.772a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M281.453 286.803a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M282.71 286.833a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M283.967 286.863a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M285.224 286.892a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M286.482 286.92a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M287.739 286.949a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M288.996 286.976a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M290.253 287.003a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M291.51 287.03a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M292.768 287.056a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M294.025 287.082a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M295.283 287.107a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M296.54 287.132a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M297.797 287.157a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M299.054 287.18a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M300.312 287.204a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M301.569 287.227a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M302.826 287.25a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M304.083 287.272a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M305.34 287.295a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M306.598 287.316a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M307.855 287.337a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M309.112 287.358a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M310.37 287.379a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M311.627 287.4a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M312.884 287.42a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M314.141 287.439a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M315.399 287.458a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M316.656 287.477a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M317.913 287.496a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M319.17 287.514a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M320.428 287.532a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M321.685 287.55a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M322.942 287.568a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M324.2 287.585a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M325.457 287.602a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M326.714 287.619a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M327.971 287.635a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M329.228 287.651a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M330.486 287.667a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M331.743 287.683a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M333 287.699a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M334.257 287.714a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M335.514 287.73a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M336.772 287.744a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M338.029 287.759a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M339.286 287.773a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M340.543 287.787a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M341.8 287.801a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M343.058 287.815a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M344.315 287.829a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M345.572 287.842a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M346.83 287.855a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M348.087 287.868a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M349.344 287.881a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M350.601 287.894a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M351.859 287.906a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M353.116 287.919a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M354.373 287.93a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M355.63 287.943a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M356.888 287.955a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M358.145 287.966a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M359.402 287.978a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M360.66 287.99a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M361.917 288a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M363.174 288.011a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M364.431 288.022a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M365.688 288.033a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M366.946 288.044a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M368.203 288.054a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M369.46 288.065a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M370.717 288.075a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M371.975 288.085a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M373.232 288.095a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M374.49 288.105a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M375.747 288.114a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M377.004 288.124a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M378.261 288.133a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M379.518 288.143a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M380.776 288.152a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M382.033 288.161a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M383.29 288.17a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M384.547 288.179a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M385.805 288.188a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M387.062 288.196a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M388.319 288.205a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M389.576 288.213a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M390.834 288.222a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M392.09 288.23a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M393.348 288.238a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M394.605 288.246a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M395.863 288.254a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M397.12 288.262a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M398.377 288.27a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M399.634 288.277a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M400.892 288.285a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M402.149 288.292a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M403.406 288.3a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M404.663 288.307a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M405.92 288.314a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M407.178 288.322a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M408.435 288.329a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M409.692 288.336a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M410.95 288.342a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M412.207 288.35a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M413.464 288.356a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M414.721 288.363a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M415.978 288.37a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M417.236 288.376a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M418.493 288.382a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M419.75 288.389a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M421.007 288.395a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M422.265 288.401a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M423.522 288.407a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M424.78 288.414a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M426.036 288.42a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M427.294 288.426a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M428.551 288.431a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M429.808 288.437a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M431.065 288.443a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M432.323 288.449a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M433.58 288.454a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M434.837 288.46a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M436.094 288.466a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M437.352 288.471a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M438.609 288.476a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M439.866 288.482a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M441.123 288.487a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M442.38 288.492a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M443.638 288.498a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M444.895 288.503a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M446.152 288.508a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M447.41 288.513a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M448.667 288.518a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M449.924 288.523a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M451.182 288.528a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M452.439 288.533a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M453.696 288.537a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M454.953 288.542a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M456.21 288.547a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M457.468 288.551a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M458.725 288.556a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M459.982 288.56a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M461.24 288.565a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M462.497 288.57a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M463.754 288.574a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M465.011 288.578a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M466.269 288.583a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M467.526 288.587a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M468.783 288.591a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M470.04 288.595a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M471.298 288.6a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M472.555 288.604a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M473.812 288.608a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M475.07 288.612a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M476.327 288.616a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M477.584 288.62a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M478.841 288.624a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M480.098 288.628a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M481.356 288.632a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M482.613 288.635a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M483.87 288.64a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M485.127 288.643a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M486.385 288.647a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M487.642 288.65a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M488.899 288.654a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M490.156 288.658a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M491.413 288.661a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M492.67 288.665a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M493.928 288.668a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M495.185 288.672a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M496.442 288.675a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M497.7 288.679a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M498.957 288.682a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M500.214 288.685a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M501.471 288.689a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M502.729 288.692a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M503.986 288.695a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M505.243 288.699a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M506.5 288.702a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M507.758 288.705a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M509.015 288.708a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M510.272 288.711a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M511.53 288.714a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M512.787 288.717a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M514.044 288.72a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M515.301 288.724a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M516.558 288.726a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M517.816 288.73a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M519.073 288.732a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M520.33 288.735a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M521.587 288.738a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M522.845 288.741a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M524.102 288.744a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M525.36 288.747a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M526.616 288.75a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M527.874 288.752a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M529.131 288.755a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M530.388 288.758a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M531.645 288.76a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M532.903 288.763a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M534.16 288.766a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M535.417 288.769a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M536.674 288.771a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M537.932 288.774a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M539.189 288.776a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M540.446 288.779a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M541.703 288.781a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M542.96 288.784a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M544.218 288.786a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M545.475 288.789a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M546.732 288.791a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M547.99 288.794a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M549.247 288.796a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M550.504 288.799a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M551.761 288.801a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M553.019 288.803a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M554.276 288.806a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M555.533 288.808a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M556.79 288.81a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M558.048 288.813a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M559.305 288.815a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M560.562 288.817a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M561.82 288.82a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M563.077 288.822a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M564.334 288.824a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M565.591 288.826a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M566.848 288.828a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M568.106 288.83a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M569.363 288.832a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M570.62 288.834a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M571.878 288.837a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M573.135 288.839a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M574.392 288.84a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M575.65 288.843a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M576.907 288.845a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M578.164 288.847a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M579.421 288.849a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M580.678 288.85a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M581.936 288.853a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M583.193 288.855a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className="graph-point"
        fill="#000"
        fillOpacity={0}
        clipPath="url(#id_0)"
        d="M584.45 288.857a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <text x={330.5} y={349.544} fill="coral" textAnchor="middle">
        {"Focal Length (mm)"}
      </text>
      <text
        x={30.566}
        y={179.5}
        fill="coral"
        transform="rotate(-90 30.566 179.5)"
        textAnchor="middle"
      >
        {"500 Rule Shift (pixels)"}
      </text>
      <text
        className="graph-vertical-grid-major-label"
        x={71.706}
        y={298.5}
        fill="#606060"
      >
        {"6"}
      </text>
      <text
        className="graph-vertical-grid-major-label"
        x={71.706}
        y={251.5}
        fill="#606060"
      >
        {"6.5"}
      </text>
      <text
        className="graph-vertical-grid-major-label"
        x={71.706}
        y={204.5}
        fill="#606060"
      >
        {"7"}
      </text>
      <text
        className="graph-vertical-grid-major-label"
        x={71.706}
        y={157.5}
        fill="#606060"
      >
        {"7.5"}
      </text>
      <text
        className="graph-vertical-grid-major-label"
        x={71.706}
        y={110.5}
        fill="#606060"
      >
        {"8"}
      </text>
      <text
        className="graph-vertical-grid-major-label"
        x={71.706}
        y={63.5}
        fill="#606060"
      >
        {"8.5"}
      </text>
      <text
        className="graph-horizontal-grid-major-label"
        x={78.5}
        y={305.5}
        fill="#606060"
      >
        {"0"}
      </text>
      <text
        className="graph-horizontal-grid-major-label"
        x={204.5}
        y={305.5}
        fill="#606060"
      >
        {"100"}
      </text>
      <text
        className="graph-horizontal-grid-major-label"
        x={330.5}
        y={305.5}
        fill="#606060"
      >
        {"200"}
      </text>
      <text
        className="graph-horizontal-grid-major-label"
        x={455.5}
        y={305.5}
        fill="#606060"
      >
        {"300"}
      </text>
      <text
        className="graph-horizontal-grid-major-label"
        x={581.5}
        y={305.5}
        fill="#606060"
      >
        {"400"}
      </text>
      <text x={20} y={38.5} fill="coral" fontSize="1.5em">
        {"Pixel Shift vs. Focal Length"}
      </text>
    </StyledSvg>
  )
}

export default GraphIcon
