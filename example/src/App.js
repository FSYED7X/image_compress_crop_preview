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
// defaultImage="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"

export default App
