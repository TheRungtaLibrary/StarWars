# React Playground
#
## 1. Create an app from scratch

- Set up your root app folder
```shell script
mkdir my-app-name
cd my-app-name
```

- Initialise it as a npm application
```shell script
npm init -y
```
    
- Install react and react-dom
```shell script
npm install react react-dom
```
        
- Install Webpack and babel dependencies
```shell script
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin
```

- Create webpack configuration file `webpack.config.js` (so much to read [here](https://webpack.js.org/concepts/)) 
and add the minimum configuration required
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
        
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
```
- Create .babelrc configuration file with the minimal configuration required ([docs](https://babeljs.io/docs/en/config-files/))
```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```
    
- Create your `.gitignore` file specifying the folders you don't want to upload on your repository (such as `.idea`, `node_modules`, `build`)

- Create your src folder
```shell script
mkdir src
cd src
mkdir components
```

- Add utilities scripts to your `package.json`
```
  "scripts": {
    "create": "webpack",
    "lint": "eslint .",
    "start": "webpack-dev-server --open"
  }
```
#
## 2. Make it a Typescript app

- Make your `js` file `ts` and any file that contains some jsx code (that should have `jsx` extension) `tsx`

- Install typescript dependencies and the related types 
```shell script
npm install --save-dev typescript ts-loader source-map-loader @types/react @types/react-dom
```

- Create typescript configuration file `tsconfig.json` ([here more](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html))

- Update your webpack configuration (`webpack.config.js`) adding the following parts 

    - The rule
    - The extensions resolver [here more](https://webpack.js.org/configuration/resolve/#resolveextensions)

```
{
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: [
        {
            loader: "ts-loader"
        }
    ]
}
```

```
resolve: {
    extensions: ['.tsx', '.ts', '.js']
},
```


- Setup the configuration for creating map files. Aimed at improving the debugging in the browser via ([devTool](https://webpack.js.org/configuration/devtool/#root))
in your `webpack.config.js` file and via [sourceMap](https://www.typescriptlang.org/docs/handbook/compiler-options.html) in your `
```
devtool: 'source-map',
```
```
sourceMap: true,
```

- To see the results of typescript compilation using your `tsconfig` file just type
```
tsc
```

- Update eslint configuration to use typescript and install the relative plugin and parser (be sure they're running the 
same version)
```
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```
In your `.eslintrc` file
```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"]
}
```
- Add the desired rules to your `.eslintrc` file with the following format ([rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin))
```json
{
  "rules": {
    "@typescript-eslint/rule-name": [
      "error"
    ]
  }
}
```
And/or extend the [recommended](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json) 
settings
```json
{
  "extends": ["plugin:@typescript-eslint/recommended"]
}
```

- Update `.eslintignore` to skip compiled files (`.js` and `.map` files)

- As default eslint runs on `.js` files only. To specify that should now run on `.ts` and `.tsx` files the lint script has been updated as follow
```shell script
eslint . --ext .ts,.tsx
```


#
## 3. Add a production and dev builds
- In order to run webpack and generating the bundled code we can specify 2 different parameters according to what will be our target:
    `production` and `development` modes. 
    
    The `build` and `dev` scripts (see below) will perform a build using this 2 different targets,
    whereas the `start` script will keep an active server and automatically refresh your browser every time that code has changed.
    Debugging will be guaranteed by the `.map` files only in case of dev target. For production build code will be minified 
    (and possibly uglify/[split in chunks](https://webpack.js.org/guides/code-splitting/)) for improving the performances using for example 
    [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) from webpack. For more complex behaviours, we 
    can think of creating different webpack configuration files ([using more config files](https://webpack.js.org/configuration/#use-different-config-file) and
    [about production build](https://webpack.js.org/guides/production/))
```
"scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development",
    "start": "webpack-dev-server --open --mode development"
},
```
