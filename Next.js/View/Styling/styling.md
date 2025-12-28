- CSS Modules: Use .module.css files for locally scoped styles (e.g., styles/MyComponent.module.css). Import them directly into your components.
- Styled-JS: Write scoped CSS within your components using -style jsx- tags (built-in, but less commonly used now).
- Tailwind CSS: A popular utility-first CSS framework. Requires setup, but integrates well with Next.js.
- CSS-in-JS Libraries: Emotion, Styled Components, etc. (require configuration).
- UI Component Libraries: Material UI, Ant Design, Chakra UI, etc.
[[Root]]

Global stylesGlobal Styles: Import a CSS file in pages/_app.js (Pages Router) or app/layout.js (App Router).


=======

Note 4: Styling & Fonts

 * Global Styles:
   * A global CSS file (e.g., app/ui/global.css) can be imported into the root layout (app/layout.tsx) to apply styles to the entire application.
   * This file is often where Tailwind directives (@tailwind base, etc.) are placed.
 * Styling Methods:
   * CSS Modules: The recommended way to scope styles to a specific component (e.g., component.module.css).
   * Sass: Supported out-of-the-box (.scss, .sass).
   * CSS-in-JS: Libraries like Styled Components and Emotion are supported.
 * Helpers:
   * clsx Library: A utility to conditionally join class names, especially useful for applying styles based on state.
 * Assets:
   * Fonts: Next.js provides a next/font module to optimize fonts (like Google Fonts or local fonts) by self-hosting them and removing layout shift.

Styling

  

- global styles in app/ui/global.css - use file to add CSS rules to all routes.  It can be imported into any component.  Root layout.  
- Import it into app/layout.tsx
- Global.css contains tailwind elements. 
- CSS modules allows you to scope css to a component.  
- Clsx library to toggle class names - use conditional classes.. 
- sass allows importing css and scss 
- CSS-in-j: styled and emotion.

  

Optimizing fonts -