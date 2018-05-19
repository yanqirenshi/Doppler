class Noise {
    constructor (params) {
        this._code = params.code;
        this._name = params.name;
        this._uri = params.uri;
        this._w = params.w;
        this._h = params.h;
        this._bpm = params.bpm;

        this._liner = params.liner;
        this._scaler = params.scaler;
        this._terminator = params.terminator;
    }
    bpm () { return this._bpm; }
    code () { return this._code; }
    uri () { return this._uri; }
    w () { return this._w; }
    h () { return this._h; }
    defaultLiner (counter) {
        let w = window.innerWidth;
        let h = window.innerHeight;;
        return {
            top:  Math.floor( Math.random() * h ) + 'px; ',
            left: Math.floor( Math.random() * w ) + 'px;'
        };
    }
    position (counter) {
        let liner = this._liner;
        return liner ?
            liner(this, counter) :
            this.defaultLiner(counter);
    }
    defaultScaler (counter) {
        let gain = (100 - Math.random()*77)/100;
        let w = this.w();
        let h = this.h();
        return {
            w: w * gain,
            h: h * gain
        };
    }
    size (counter) {
        let scaler = this._scaler;
        return scaler ?
            scaler(this, counter) :
            this.defaultScaler(counter);
    }
    defaultTerminator (counter) {
        return counter > 88;
    }
    terminat (counter) {
        let terminator = this._terminator;
        return terminator ?
            terminator(this, counter) :
            this.defaultTerminator(counter);
    }
    tagCclass () {
        return 'doppler noise ' + this.code();
    }
    makeTag (counter) {
        let uri = this.uri();
        let w = this.w();
        let h = this.h();
        let position = this.position(counter);
        let size = this.size();
        let style = 'position:fixed;z-index:88888888;'
            + 'top:'  + position.top
            + 'left:' + position.left;

        let tag = document.createElement('img');

        tag.setAttribute('class', this.tagCclass());
        tag.setAttribute('src', uri);
        tag.setAttribute('style', style);
        tag.setAttribute('width', size.w);
        tag.setAttribute('height', size.h);
        tag.setAttribute('counter', counter);

        return tag;
    }
}
