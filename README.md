# iconpack
1- Add icons with correct naming 'filled' and 'outlined' like "EditFilled".

2- Run the command: npm run build:icons ---> This command will find the related script in package.json file and convert all icons to react components(.tsx files) and put them all in components folder.

3- Run Node script generate-icon-index.js, which scans components folder and creates an index.ts exporting all components, like the following: 
    export { default as HomeFilled } from './HomeFilled';
    export { default as SearchOutline } from './SearchOutline';

4-You run the following command ---> tsup src/icons --format esm,cjs --dts --out-dir dist

Actually we use a bundler like tsup (which uses esbuild under the hood) to:

    • Transpile TypeScript .tsx files to JavaScript .js

    • Bundle files into ESM and CJS formats

    • Generate TypeScript .d.ts declaration files