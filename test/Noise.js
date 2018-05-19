class Noise {
    constructor (params) {
        this._code = params.code;
        this._name = params.name;
        this._uri = params.uri;
        this._liner = params.liner;
        this._scaler = params.scaler;
        this._w = params.w;
        this._h = params.h;
    }
    code () {
        return this._code;
    }
    uri () {
        return this._uri;
    }
    w () {
        return this._w;
    }
    h () {
        return this._h;
    }
    position () {
        let w = this.h();
        let h = this.h();
        return {
            top:  Math.floor( Math.random() * h ) + 'px; ',
            left: Math.floor( Math.random() * w ) + 'px;'
        };
    }
    size () {
        let gain = (100 - Math.random()*77)/100;
        let w = this.h();
        let h = this.h();
        return {
            w: w * gain,
            h: h * gain
        };
    }
}
