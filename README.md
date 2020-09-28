# image_compress_crop_preview

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/image_compress_crop_preview.svg)](https://www.npmjs.com/package/image_compress_crop_preview) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save image_compress_crop_preview
```

## Usage

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
      <Squared defaultImg="" color="" size="" setOutput={setOutput}/>
    </div>
  )
}
export default App

```

## License

MIT © [fsyed7x](https://github.com/fsyed7x)
