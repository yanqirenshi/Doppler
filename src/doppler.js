class Doppler {
    constructor () {
        this._bpm = 0;
        this._noises = {};
    }
    noise (code) {
        return !code ?
            this._noises[code] :
            this._noises[code] = true;
    }
    frequency () {
        // https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%83%E3%83%97%E3%83%A9%E3%83%BC%E5%8A%B9%E6%9E%9C

        let f  = 1; // 音源の出す音波の振動数
        let V  = 1; // 音速
        let v0 = 1; // 観測者の動く速度
        let vs = 1; // 音源の動く速度

        return f * (V - v0) / (V - vs);
    }
    tune (bpm) {
        this._bpm = bpm;
    }
    fetchNoise (code) {}
    rap (code) {}
}
