declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }
  
  // Add custom declarations for other file types if needed
  declare module '*.customfile' {
    const content: string;
    export default content;
  }