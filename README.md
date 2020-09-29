# image_compress_crop_preview 

> Another cool React library - the combination of browser-image-compression, tinycrop, curtail, react-progressbar and react-particles-js

![Demo](demo.gif)

[![NPM](https://img.shields.io/npm/v/image_compress_crop_preview.svg)](https://www.npmjs.com/package/image_compress_crop_preview) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/fsyed7x/image_compress_crop_preview.svg?branch=master)](https://travis-ci.org/fsyed7x/image_compress_crop_preview)


#### Image Compress Crop Preview Input Component for React using,
1. [`browser-image-compression`](https://www.npmjs.com/package/browser-image-compression)
2. [`tinycrop`](https://www.npmjs.com/package/browser-image-compression)
3. [`curtail`](https://www.npmjs.com/package/browser-image-compression)
4. [`react-progressbar`](https://www.npmjs.com/package/browser-image-compression)
5. [`react-particles-js`](https://www.npmjs.com/package/browser-image-compression)

#### Checkout the [DEMO](https://1dthizajchmucopxjhxata-on.drv.tw/build/)

## Install

```bash
npm install --save image_compress_crop_preview
```

## Usage

#### Default Usage
```jsx
import React from 'react'

import { Squared } from 'image_compress_crop_preview'
import 'image_compress_crop_preview/dist/index.css'

const App = () => {
  return <Squared />
}
export default App

```

#### Store the Result - Base64 
```jsx
import React, { useEffect, useState } from 'react'

import { Squared } from 'image_compress_crop_preview'
import 'image_compress_crop_preview/dist/index.css'

const App = () => {
  const [Output, setOutput] = useState()
  
  useEffect(() => {
    console.log(Output)
  }, [Output])

  return (
    <div>
      <Squared setOutput={setOutput}/>
    </div>
  )
}
export default App

```

#### Change the limit of image compression - MB
```jsx
      <Squared setOutput={setOutput} mb={0.1}/>   // 100 KB

```

#### Customization
```jsx
      <Squared 
        defaultImg="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg" 
        color="red" 
        size="150px" 
        setOutput={setOutput}
      />

```

## Parameters 
*All the Parameter are optional :sweat_smile:*

Parameter | Description | Default Value | Valid Values
------------ | ------------- | ------------- | -------------
defaultImg | Default image placeholder | Meme Face | Anything that goes within <img `src=" "` />
color | Color of progress bar (loading) | :yellow_square:`#FFCB2B` | HEX, RGB, Valid Color Names (RED, BLUE, etc...)
size | Defines the size of the component - Height x Width | 200px | px, em, vh, cm, mm, %, etc...
setOutput | Output Base64 will be returned as a parameter to this function. |  | __any function__. It can also be a console.log :sweat_smile:
  mb | Maximum Size of image after compression | 1 MB | MB

## License

MIT © [fsyed7x](https://github.com/fsyed7x)
