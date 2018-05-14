# Core

https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%83%E3%83%97%E3%83%A9%E3%83%BC%E5%8A%B9%E6%9E%9C

- 画像を表示する
- ドップラー式によるサイズ変更
- 線形/非線形関数による線形上連続表示

## Usage

### 準備

Nise データを fetch して Noise クラス のインスタンスを作成する

```
let noise = null;
fetchNoise(code, (res) => {
  noise = new Noise(res);
});
```

### 表示

```
rap!(noise)
```

## Installation

html にタグを埋め込むだけ。
自動でスタートする。

```html
<script src=".../doppler.min.js"></script>
```

## Author

+ Satoshi Iwasaki (yanqirenshi@gmail.com)

# Copyright

Copyright (c) 2018 Satoshi Iwasaki (yanqirenshi@gmail.com)

# License

LGPL
