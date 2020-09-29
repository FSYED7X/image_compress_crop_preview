import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import imageCompression from 'browser-image-compression'
import * as curtail from 'curtail'
var Progress = require('react-progressbar').default
var Crop = require('tinycrop')

const DefaultImagePlaceholder = () => {
  return (
    <svg
      style={{ padding: '5px' }}
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 814.000000 854.000000'
    >
      <g
        transform='translate(0.000000,854.000000) scale(0.100000,-0.100000)'
        fill='#000000'
        stroke='none'
      >
        <path
          d='M4370 8520 c-288 -32 -562 -78 -805 -136 -175 -41 -298 -76 -690
-195 -93 -28 -190 -57 -215 -64 -131 -37 -291 -89 -337 -110 -145 -66 -325
-240 -577 -560 -225 -286 -204 -265 -443 -447 -72 -56 -127 -96 -337 -250
-156 -114 -231 -172 -326 -253 -170 -145 -155 -124 -142 -191 30 -149 7 -297
-79 -496 -120 -276 -153 -404 -147 -553 l3 -70 43 -9 c23 -6 42 -13 42 -17 0
-4 -9 -51 -19 -104 -25 -123 -96 -273 -118 -251 -5 4 -11 119 -14 254 -8 279
-17 328 -71 377 -33 30 -78 59 -82 53 -1 -2 2 -113 7 -248 9 -235 2 -545 -23
-1030 -28 -539 -32 -690 -27 -995 9 -508 43 -782 139 -1100 80 -268 129 -366
293 -585 156 -207 225 -367 261 -600 78 -509 146 -706 291 -845 47 -44 98 -85
107 -85 3 0 6 22 6 49 0 53 -28 154 -65 235 -135 296 -206 554 -178 650 l9 29
50 -69 c102 -139 265 -295 406 -387 138 -90 420 -240 537 -286 25 -10 96 -38
156 -63 118 -48 194 -72 201 -65 3 3 -9 28 -26 56 -119 203 -206 260 -615 406
-131 46 -196 80 -265 136 -65 54 -168 175 -230 269 -52 81 -167 316 -213 435
-65 170 -101 282 -187 585 -20 70 -71 276 -100 405 -27 120 -57 238 -90 355
-66 239 -115 497 -139 730 -47 466 -28 1089 39 1284 11 32 45 98 75 146 106
168 131 262 145 555 12 237 29 345 70 434 30 64 83 131 95 120 2 -3 0 -21 -5
-40 -15 -53 -12 -68 19 -100 48 -48 65 -41 183 79 297 302 701 671 835 762 11
8 65 47 120 85 122 88 277 185 407 256 92 51 97 54 70 60 -49 11 -278 10 -383
-2 -97 -11 -192 -7 -220 11 -12 7 -2 22 46 73 33 36 72 80 85 99 280 380 359
461 529 544 91 45 278 92 419 105 139 14 538 5 690 -15 58 -8 182 -24 275 -35
94 -12 213 -28 265 -36 124 -19 337 -42 473 -50 59 -4 107 -11 107 -15 0 -14
-108 -20 -380 -20 -291 0 -373 -8 -457 -42 l-52 -21 19 -27 c23 -33 102 -68
156 -71 21 -1 87 2 145 6 71 5 108 4 113 -3 3 -6 -7 -13 -24 -17 -36 -8 -50
-31 -50 -82 0 -82 -1 -81 98 -61 160 33 387 43 640 29 125 -6 274 -18 332 -26
544 -71 680 -87 776 -92 107 -6 113 -5 125 16 8 11 16 21 20 21 3 0 41 -44 84
-97 76 -95 179 -215 220 -258 160 -166 251 -291 327 -448 39 -79 81 -197 74
-204 -3 -3 -8 3 -12 13 -4 10 -22 55 -41 99 -97 229 -140 284 -237 306 -31 7
-59 10 -62 6 -20 -20 161 -419 264 -582 204 -319 311 -542 422 -875 209 -627
271 -771 429 -985 l59 -80 -48 -3 -48 -3 33 -100 c78 -230 96 -455 94 -1144
-1 -312 2 -540 9 -605 12 -111 54 -265 92 -340 34 -66 50 -135 50 -217 0 -158
-49 -290 -185 -498 -116 -177 -186 -322 -265 -550 -134 -389 -274 -824 -267
-831 10 -10 142 72 197 122 54 50 116 148 135 214 9 31 68 185 102 265 47 113
138 325 163 380 79 173 184 402 191 414 72 131 172 503 194 724 7 60 5 71 -13
90 -61 66 -133 241 -152 367 -38 251 -53 819 -29 1125 6 77 11 246 11 375 1
208 -2 256 -26 414 -55 356 -142 556 -442 1014 -109 167 -175 283 -269 472
-91 181 -134 336 -150 534 -8 92 -21 131 -80 231 -58 99 -107 164 -209 276
-63 70 -121 151 -163 229 l-33 60 59 -7 c56 -5 61 -4 85 22 43 46 30 101 -39
157 -16 14 -95 57 -175 96 -83 41 -158 85 -175 102 l-30 32 60 -8 c142 -20
180 -2 180 86 0 44 -4 53 -40 90 -22 23 -72 57 -112 77 -81 40 -174 56 -401
68 -73 4 -132 10 -132 14 0 13 -100 122 -156 171 -240 210 -540 298 -1039 305
-121 2 -254 0 -295 -5z m555 -171 c274 -32 483 -113 617 -241 l48 -45 -38 -17
c-20 -10 -93 -31 -162 -48 -104 -24 -154 -30 -295 -35 -262 -8 -447 9 -1220
111 -148 20 -326 39 -395 43 l-125 6 70 24 c295 100 746 193 1036 212 143 10
333 6 464 -10z m-4055 -1983 c0 -20 -19 -40 -54 -58 -22 -11 -53 -32 -68 -46
-28 -25 -34 -22 -28 18 3 22 41 61 75 76 29 13 75 19 75 10z m6706 -1354 c66
-60 111 -172 135 -334 6 -43 9 -81 6 -84 -13 -13 -197 395 -197 438 0 16 26 7
56 -20z m-7271 -2323 c45 -137 81 -260 111 -384 51 -211 107 -402 164 -558 17
-49 30 -90 28 -93 -7 -7 -55 49 -82 96 -114 195 -190 440 -247 795 -29 184
-37 293 -19 265 5 -8 25 -62 45 -121z'
        />
        <path
          d='M5182 7185 c-101 -18 -102 -19 -102 -60 0 -42 -20 -94 -43 -114 -10
-7 -17 -20 -17 -29 0 -21 97 -10 187 23 74 26 108 31 117 16 3 -5 -63 -50
-147 -101 -269 -164 -291 -178 -372 -243 -219 -176 -387 -409 -460 -637 -46
-147 -33 -363 35 -542 87 -232 378 -495 735 -663 219 -103 382 -157 625 -207
144 -29 169 -31 360 -31 191 0 212 2 305 27 311 83 517 275 565 526 17 88 15
254 -4 372 -63 389 -362 904 -727 1253 -228 218 -511 379 -729 414 -86 14
-238 12 -328 -4z m484 -172 c128 -43 282 -202 468 -480 64 -98 164 -202 214
-226 12 -5 22 -15 22 -22 0 -23 -73 -88 -128 -113 -51 -24 -69 -27 -162 -27
-90 1 -117 5 -190 30 l-85 30 -3 218 -2 217 -53 0 c-35 0 -63 -7 -85 -20 -55
-34 -61 -61 -54 -268 l5 -183 96 -65 c53 -35 124 -83 157 -107 85 -60 204 -83
285 -55 39 13 130 80 212 155 32 29 63 53 69 53 49 0 149 -93 193 -180 87
-172 129 -361 130 -580 0 -292 -81 -507 -217 -576 -67 -34 -151 -44 -418 -51
-272 -6 -385 3 -556 47 -446 115 -734 347 -1023 825 l-43 70 22 95 c45 190
152 443 237 558 110 149 240 277 374 368 75 50 261 148 339 177 133 51 121 41
105 81 -8 20 -15 38 -15 41 0 11 58 4 106 -12z'
        />
        <path
          d='M2021 6009 c-46 -4 -136 -21 -200 -38 -202 -52 -348 -131 -476 -259
-86 -85 -141 -190 -182 -344 -24 -91 -27 -121 -27 -263 0 -159 11 -259 64
-575 11 -64 23 -182 26 -262 l7 -147 96 -95 c135 -133 189 -173 301 -225 165
-76 330 -90 538 -46 157 33 288 87 421 173 174 112 382 327 500 517 24 39 54
86 66 105 40 65 123 244 159 345 59 162 104 395 106 537 0 33 -93 148 -178
221 -304 260 -780 399 -1221 356z m463 -169 c167 -37 275 -100 389 -227 10
-12 27 -69 42 -137 25 -124 57 -194 100 -222 19 -12 43 -15 101 -12 65 3 79 7
95 27 10 13 19 29 19 37 0 19 -65 89 -106 115 -68 42 -3 49 77 8 47 -23 79
-94 79 -174 0 -65 -37 -221 -76 -315 -102 -252 -226 -404 -594 -732 -96 -86
-209 -189 -250 -230 l-75 -73 -180 0 c-164 0 -189 3 -275 27 -298 83 -442 281
-457 629 l-6 125 159 53 c182 60 248 95 300 154 62 72 76 109 69 180 -9 85
-21 120 -68 202 -70 120 -58 115 -262 115 -121 0 -175 3 -175 11 0 26 67 134
114 183 135 141 342 238 591 276 92 14 277 4 389 -20z m-912 -641 c87 -21 128
-35 133 -46 16 -44 -31 -159 -80 -196 -34 -25 -277 -77 -361 -77 -27 0 -27 0
-21 60 4 32 17 90 30 127 13 37 30 92 37 122 l13 53 61 -6 c33 -4 118 -20 188
-37z'
        />
        <path
          d='M5055 4279 c-122 -83 -224 -140 -510 -284 -291 -147 -425 -229 -840
-514 -457 -315 -607 -404 -816 -487 -265 -105 -603 -164 -940 -164 l-106 0
-36 -137 c-50 -194 -62 -292 -62 -498 1 -209 19 -349 70 -530 72 -254 145
-405 311 -649 84 -121 334 -359 490 -464 l61 -42 74 17 c53 12 118 17 229 17
166 0 192 -5 328 -63 123 -52 144 -62 542 -255 133 -65 379 -156 515 -191 174
-45 487 -45 661 1 192 50 464 248 610 443 69 93 171 289 228 441 20 52 45 118
56 145 46 120 124 385 164 565 42 183 213 1054 231 1180 34 225 99 495 165
685 63 179 167 405 224 486 9 13 16 28 16 34 0 14 -117 85 -203 124 -85 38
-259 87 -357 101 -41 6 -219 24 -395 40 -176 17 -372 37 -435 45 -63 8 -128
17 -145 19 -24 3 -50 -10 -130 -65z m860 -160 c39 -6 95 -17 125 -25 132 -37
190 -55 190 -62 0 -18 -105 -124 -154 -157 -113 -75 -264 -102 -386 -70 -104
27 -185 77 -282 176 -47 49 -88 89 -91 89 -2 0 -7 -24 -10 -53 -25 -207 -199
-485 -387 -615 -170 -119 -369 -113 -489 12 -51 55 -117 182 -127 245 l-5 36
223 109 c334 164 471 219 688 275 219 56 483 71 705 40z m594 -180 c17 -6 31
-15 31 -20 0 -5 -22 -48 -48 -96 -98 -179 -175 -351 -271 -608 -114 -302 -231
-824 -276 -1225 -30 -266 -33 -291 -36 -294 -15 -12 -94 -35 -134 -41 -234
-30 -361 -121 -390 -275 l-6 -36 -80 27 c-99 33 -229 46 -290 28 -23 -7 -59
-29 -80 -49 -48 -46 -59 -99 -59 -290 l0 -150 -49 0 c-48 0 -51 2 -138 66 -28
20 -84 33 -144 34 -34 0 -51 -5 -67 -22 -35 -39 -42 -74 -42 -223 l0 -144 -52
23 c-29 13 -93 34 -143 46 -49 13 -107 32 -128 42 l-38 19 -51 -28 c-54 -30
-61 -41 -113 -181 l-28 -74 21 -21 c20 -19 23 -20 39 -4 10 9 48 30 85 47 120
56 232 40 328 -46 47 -43 79 -103 80 -148 l0 -29 -102 6 c-125 7 -216 26 -328
67 -113 41 -404 186 -615 305 -403 229 -483 265 -687 306 -98 20 -102 20 -115
3 -7 -10 -13 -37 -13 -61 0 -54 -4 -52 -116 49 -347 315 -537 720 -551 1178
-3 92 -1 185 6 228 15 98 51 267 60 281 4 7 88 39 187 73 l179 61 143 5 142 4
0 -93 c0 -103 -14 -177 -53 -284 -14 -38 -30 -112 -36 -163 -5 -51 -13 -97
-17 -103 -10 -17 -104 0 -159 30 -27 14 -100 74 -162 133 -88 83 -125 111
-168 127 -78 29 -79 29 -71 -31 11 -86 57 -172 133 -247 116 -114 240 -162
418 -162 170 -1 203 23 227 159 7 40 15 72 18 72 3 0 26 -28 51 -63 110 -147
278 -305 412 -386 253 -154 515 -152 669 4 41 42 128 171 128 190 0 3 10 29
22 57 l21 50 49 -6 c27 -4 83 -21 126 -39 70 -28 87 -31 182 -32 96 0 110 2
165 29 70 35 156 116 209 199 42 67 73 136 150 332 61 156 83 204 126 272 17
26 30 51 30 55 0 24 -176 -37 -219 -75 -58 -53 -108 -151 -239 -467 -37 -91
-102 -185 -133 -195 -29 -9 -135 22 -213 62 -68 36 -75 37 -171 36 -55 0 -110
-4 -122 -9 -12 -5 -35 -29 -52 -54 -59 -88 -176 -217 -268 -295 -118 -100
-147 -119 -176 -111 -72 18 -254 172 -331 280 -38 54 -86 137 -86 150 0 2 22
12 50 21 54 18 126 88 159 154 18 36 57 146 82 229 7 24 16 45 21 48 4 3 24
-7 43 -21 47 -36 173 -75 243 -75 70 0 245 41 326 77 34 15 89 44 124 66 l62
39 0 116 c1 93 5 128 21 172 58 153 71 198 76 262 l6 69 24 -23 c14 -13 40
-56 60 -96 26 -55 46 -82 85 -112 63 -50 79 -54 192 -47 171 12 344 83 432
179 87 94 193 293 249 468 15 47 29 87 31 89 2 2 28 -8 58 -23 37 -18 77 -52
127 -107 92 -100 155 -135 244 -133 113 2 191 48 360 210 192 185 255 217 354
183z m-2417 -465 c23 -65 22 -105 -3 -227 -27 -131 -65 -233 -141 -384 l-62
-123 -109 0 c-134 0 -158 10 -191 83 -44 98 -137 158 -190 124 -32 -21 -100
-113 -134 -182 -38 -77 -72 -152 -72 -161 0 -14 -73 -150 -103 -192 -30 -41
-101 -92 -130 -92 -8 0 -38 21 -67 46 -82 75 -130 191 -130 319 l0 54 63 20
c180 56 386 164 567 296 15 11 75 58 133 105 213 171 514 376 542 367 5 -2 18
-26 27 -53z m1796 -1941 c23 -5 23 -9 17 -67 -11 -96 -23 -143 -70 -271 -24
-66 -51 -148 -61 -182 -9 -35 -18 -63 -20 -63 -8 0 -120 88 -135 106 -17 20
-32 54 -23 54 3 0 18 -10 34 -21 24 -18 37 -21 77 -15 62 8 72 20 46 48 -11
13 -37 48 -57 80 -38 60 -78 98 -105 98 -9 0 -22 4 -29 9 -30 19 63 138 145
187 71 41 126 52 181 37z m-604 -346 c109 -50 213 -186 247 -322 6 -25 9 -80
7 -123 -8 -136 -80 -241 -190 -278 -26 -8 -51 -13 -56 -10 -7 4 -69 94 -128
186 -39 60 -103 203 -119 265 -24 93 -15 236 17 299 15 29 144 19 222 -17z
m-602 -403 c191 -59 320 -167 395 -327 30 -65 55 -149 46 -158 -10 -8 -184
-56 -252 -69 -78 -14 -165 -12 -227 6 l-54 15 0 280 c0 153 2 279 4 279 3 0
42 -12 88 -26z'
        />
      </g>
    </svg>
  )
}

function ShowCropWindow(
  setOpenCropWindow,
  Base64,
  setcropAreaHeight,
  setcropAreaWidth,
  setcropAreaX,
  setcropAreaY
) {
  function asd(region) {
    setcropAreaHeight(region._height)
    setcropAreaWidth(region._width)
    setcropAreaX(region._x)
    setcropAreaY(region._y)
  }

  document.getElementById('mount').innerHTML = ''
  var crop = Crop.create({
    parent: document.getElementById('mount'),
    image: Base64,
    bounds: {
      width: '100%',
      height: '100%'
    },
    backgroundColors: ['transparent', 'transparent'],
    selection: {
      color: '#fff',
      activeColor: 'crimson',
      aspectRatio: 1,
      minWidth: 100,
      minHeight: 100
      // width: 300,
      // height: 300,
      // x: 0,
      // y: 0
    }
  })
  crop
    .on('start', function (region) {
      asd(region)
    })
    .on('move', function (region) {
      asd(region)
    })
    .on('resize', function (region) {
      asd(region)
    })
    .on('change', function (region) {
      asd(region)
    })
    .on('end', function (region) {
      asd(region)
    })
}

const CropWindow = ({
  Base64,
  cropAreaHeight,
  cropAreaWidth,
  cropAreaX,
  cropAreaY,
  setPreviewImage,
  setOpenCropWindow,
  setOutput
}) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.cropperContainer}>
        <section className={styles.mountContainer}>
          <div id='mount' />
        </section>
        <button
          onClick={() =>
            CropImage(
              Base64,
              cropAreaHeight,
              cropAreaWidth,
              cropAreaX,
              cropAreaY,
              setPreviewImage,
              setOpenCropWindow,
              setOutput
            )
          }
        >
          Done
        </button>
      </div>
    </div>
  )
}

const CropImage = (
  Base64,
  cropAreaHeight,
  cropAreaWidth,
  cropAreaX,
  cropAreaY,
  setPreviewImage,
  setOpenCropWindow,
  setOutput
) => {
  curtail
    .crop(Base64, cropAreaX, cropAreaY, cropAreaWidth, cropAreaHeight)
    .then((newImage) => {
      setPreviewImage(newImage.src)
      setOpenCropWindow(false)
      setOutput && setOutput(newImage.src)
    })
    .catch((err) => console.log(err))
}

function CompressImage(
  event,
  setProgress,
  setBase64,
  setLoading,
  setOpenCropWindow,
  mb
) {
  setLoading(true)
  var imageFile = event.target.files[0]

  var options = {
    maxSizeMB: mb || 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    onProgress: (e) => {
      setProgress(e)
    }
  }

  imageCompression(imageFile, options)
    .then(function (compressedFile) {
      var reader = new FileReader()
      reader.readAsDataURL(compressedFile)
      reader.onloadend = function () {
        var base64data = reader.result
        setProgress(0)
        setBase64(base64data)
        setOpenCropWindow(true)
        setLoading(false)
      }
    })
    .catch(function (error) {
      console.log(error.message)
      setLoading(false)
    })
}

export const Squared = ({ defaultImg, size, color, setOutput, mb }) => {
  const [PreviewImage, setPreviewImage] = useState(defaultImg)
  const [Loading, setLoading] = useState(false)
  const [CompressionProgress, setProgress] = useState(0)
  const [Base64, setBase64] = useState(false)
  const [OpenCropWindow, setOpenCropWindow] = useState(false)

  const [cropAreaHeight, setcropAreaHeight] = useState()
  const [cropAreaWidth, setcropAreaWidth] = useState()
  const [cropAreaX, setcropAreaX] = useState()
  const [cropAreaY, setcropAreaY] = useState()

  const InputTag = useRef()

  useEffect(() => {
    if (OpenCropWindow) {
      ShowCropWindow(
        setOpenCropWindow,
        Base64,
        setcropAreaHeight,
        setcropAreaWidth,
        setcropAreaX,
        setcropAreaY
      )
    }
  }, [OpenCropWindow])

  return (
    <section className={styles.Squared}>
      {OpenCropWindow && (
        <CropWindow
          Base64={Base64}
          cropAreaHeight={cropAreaHeight}
          cropAreaWidth={cropAreaWidth}
          cropAreaX={cropAreaX}
          cropAreaY={cropAreaY}
          setPreviewImage={setPreviewImage}
          setOpenCropWindow={setOpenCropWindow}
          setOutput={setOutput}
        />
      )}

      <article style={{ height: size || 200, width: size || 200 }}>
        {!Loading && (
          <input
            type='file'
            accept='image/*'
            ref={InputTag}
            onChange={(event) =>
              CompressImage(
                event,
                setProgress,
                setBase64,
                setLoading,
                setOpenCropWindow,
                mb
              )
            }
            style={{ zIndex: Base64 && '-9999999' }}
          />
        )}
        <div>Click to Upload</div>

        {PreviewImage ? (
          <img src={PreviewImage} alt='Preview Image' />
        ) : (
            <DefaultImagePlaceholder />
          )}
      </article>

      {Loading && (
        <Progress completed={CompressionProgress} color={color || '#FFCB2B'} />
      )}

      {Base64 && !Loading && (
        <footer>
          <button onClick={() => setOpenCropWindow(true)}>
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M6.13 1L6 16a2 2 0 0 0 2 2h15' />
              <path d='M1 6.13L16 6a2 2 0 0 1 2 2v15' />
            </svg>
          </button>

          <button onClick={() => InputTag.current.click()}>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z' />
              <circle cx='12' cy='13' r='4' />
            </svg>
          </button>
        </footer>
      )}
    </section>
  )
}
