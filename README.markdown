# DOPPLER

WEBページに画像を表示したりします。

- 画像を表示する (出来た)
- ドップラー式によるサイズ変更 (出来てない)
- 線形/非線形関数による線形上連続表示 (出来てない)

## Usage

```js
let DOPPLER = new Doppler();
DOPPLER.setNoise(new Noise ({
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
}));
DOPPLER.startNoise('dodo');
```

## Installation

html にタグを埋め込むだけ。

```html
<script src="doppler.min.js"></script>
```

## Memo

- [ドップラー効果](https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%83%E3%83%97%E3%83%A9%E3%83%BC%E5%8A%B9%E6%9E%9C)
- [区分線形関数 - Wikipedia](https://ja.wikipedia.org/wiki/%E5%8C%BA%E5%88%86%E7%B7%9A%E5%BD%A2%E9%96%A2%E6%95%B0)
- [連続 - Wikipedia](https://ja.wikipedia.org/wiki/%E9%80%A3%E7%B6%9A_(%E6%95%B0%E5%AD%A6))
- [曲線 - Wikipedia](https://ja.wikipedia.org/wiki/%E6%9B%B2%E7%B7%9A)

## Author

+ Satoshi Iwasaki (yanqirenshi@gmail.com)

# Copyright

Copyright (c) 2018 Satoshi Iwasaki (yanqirenshi@gmail.com)

# License

LGPL
