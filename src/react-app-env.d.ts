/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="react-scripts" />

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
