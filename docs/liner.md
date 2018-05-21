# liner

- [区分線形関数 - Wikipedia](https://ja.wikipedia.org/wiki/%E5%8C%BA%E5%88%86%E7%B7%9A%E5%BD%A2%E9%96%A2%E6%95%B0)
- [連続 - Wikipedia](https://ja.wikipedia.org/wiki/%E9%80%A3%E7%B6%9A_(%E6%95%B0%E5%AD%A6))
- [曲線 - Wikipedia](https://ja.wikipedia.org/wiki/%E6%9B%B2%E7%B7%9A)


## 座標系

```text
           y
   start   |     end
     a- - - - - ->b
           |
 x---|-----0------|--->
    x1- - -|- - ->x2
           |
           V
```

## 移動方法

`x1` から `x2` の直線を 1 sec 単位で移動する。

`移動量` は指定可能としよう。

## 計算式

- そのタイミングの `x` を引数として受けとること。
- 計算の結果 `{x: 9999, y: 9999}` を返すこと。
