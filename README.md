# DARA

front

## 기술스택

- npm, node_modules
- TS
- ESLint-Airbnb, prettier
- React - Next.js
- recoil
- emotion

## 파일구조

```bash
src
 ┣ apis
 ┣ assets
 ┃ ┣ icons
 ┃ ┗ images
 ┣ commons # base values
 ┃ ┣ constants
 ┃ ┗ styles
 ┃ ┃ ┗ global.tsx # reset + globalStyle
 ┣ components
 ┃ ┣ atoms
 ┃ ┣ molecules
 ┃ ┣ organisms
 ┃ ┗ templates
 ┣ hooks
 ┃ ┗ queries # React-query
 ┣ pages
 ┃ ┣ _app.tsx
 ┃ ┣ _document.tsx
 ┃ ┗ index.tsx
 ┣ states # recoil
 ┣ types # module type 선언
 ┗ utils
```
