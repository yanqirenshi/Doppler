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
