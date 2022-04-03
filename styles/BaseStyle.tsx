import { createGlobalStyle } from "styled-components";

const BaseStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}
body {
  font-family: Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, sans-serif;
  font-size: 1.6rem;
  line-height: 1.2;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@keyframes infinitegradient {
  0% {
    background-position: 0% 94%;
  }
  50% {
    background-position: 100% 7%;
  }
  100% {
    background-position: 0% 94%;
  }
}

`;

export default BaseStyle;