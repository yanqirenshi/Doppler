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
class Doppler {
    constructor () {
        this.stage(this.addStage(this.makeStage()));
        this._noises = {};
    }
    /// stage
    makeStage () {
        let stage = document.createElement('div');
        stage.setAttribute('id', 'doppler-stage');
        return stage;
    }
    addStage (stage) {
        let body = document.getElementsByTagName('body')[0];
        body.appendChild(stage);
        return stage;
    };
    stage (stage) {
        if (stage) this._stage = stage;
        return this._stage;
    }
    /// noise
    setNoise (noise) {
        let noises = this._noises;
        noises[noise.code()] = noise;
    }
    getNoise (code) {
        let noises = this._noises;
        return noises[code];
    }
    /// draw and remove
    draw (noise,counter) {
        this.stage().appendChild(
            noise.makeTag(counter));
    }
    findRemoveNoises (noise) {
        let cls = noise.tagCclass();
        let tags = document.getElementsByClassName(cls);
        if (tags.length==0) return [];

        let list = [];
        let len = tags.length;
        for (var i=0 ;i<len;i++)
            list.push(tags[i]);

        return list.sort(function (a, b) {
            let v1 = a.getAttribute('counter') * 1;
            let v2 = b.getAttribute('counter') * 1;
            return v1 < v2 ? -1 : 1;
        });
    }
    remove (noise,counter) {
        let noises = this.findRemoveNoises(noise);
        if (noises.length <= 8) return;

        let target = noises[0];
        target.parentNode.removeChild(target);
    }
    /// main
    startNoise (code) {
        let counter = 1;
        let noise = this.getNoise(code);
        noise.heart = setInterval(() => {
            counter++;
            if (counter>88888888)
                counter = 1;

            if (noise.terminat(counter)) {
                this.stopNoise(noise);
                return;
            }

            this.remove(noise,counter);
            this.draw(noise,counter);
        }, noise.bpm());
    }
    stopNoise (code_or_nosie) {
        let noise;
        if (typeof code_or_nosie == "string")
            noise = this.getNoise(code_or_nosie);
        else
            noise = code_or_nosie;
        clearInterval(noise.heart);
    }
}
