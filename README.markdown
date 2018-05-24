# DOPPLER

WEBページに画像を表示したりします。

## Usage

```js
let DOPPLER = new Doppler();

let dodo = new Noise ({
    code: 'dodo',
    name: 'dodo',
    w: 226,
    h: 236,
    uri: 'http://localhost/doppler/assets/dodo.png',
    bpm: 1 * 1000,
    liner: (noise, counter) => {
        let w = window.innerWidth;
        let h = window.innerHeight;;
        return {
            top:  Math.floor( Math.random() * h ) + 'px; ',
            left: Math.floor( Math.random() * w ) + 'px;'
        };
    },
    scaler: (noise, counter) => {
        let gain = (100 - Math.random()*77)/100;
        let w = noise.w();
        let h = noise.h();
        return {
            w: w * gain,
            h: h * gain
        };
    },
    terminator: (nosie, counter) => {
        return counter > 22;
    }
})

DOPPLER.setNoise(dodo);

DOPPLER.startNoise('dodo');
```

## Installation

html にタグを埋め込むだけ。

```html
<script src="doppler.min.js"></script>
```

## Author

+ Satoshi Iwasaki (yanqirenshi@gmail.com)

# Copyright

Copyright (c) 2018 Satoshi Iwasaki (yanqirenshi@gmail.com)

# License

LGPL
