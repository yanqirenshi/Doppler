# Core

https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%83%E3%83%97%E3%83%A9%E3%83%BC%E5%8A%B9%E6%9E%9C

- 画像を表示する
- ドップラー式によるサイズ変更
- 線形/非線形関数による線形上連続表示

## Usage

- クラス Doppler のインスタンスを作成する。
- メソッド tune で処理を開始する。
- メソッド fetchNoise して画像を取得する。
- メソッド rap で画像を表示する。
- メソッド tune で処理を停止する。

### Class: Doppler

クラス Doppler のインスタンスを作成してください。

```
let DOPPLER = new Doppler();
```

### Method: tune

準備中

### Method: fetchNoise

fetchNoise して画像を取得してください。

```
DOPPLER.fetchNoise(code, (res) => { /* do somthing */ });
```

fetchNoise すると Html 上の非表示領域に画像タグを追加します。

code がタグの id となります。


### Method: rap

rap すると画面に画像タグを追加します。

画像は一定期間が過ぎると画面から消えます。

```
DOPPLER.rap(code)
```

## Installation

html にタグを埋め込むだけ。

```html
<script src=".../doppler.min.js"></script>
```

## Author

+ Satoshi Iwasaki (yanqirenshi@gmail.com)

# Copyright

Copyright (c) 2018 Satoshi Iwasaki (yanqirenshi@gmail.com)

# License

LGPL
