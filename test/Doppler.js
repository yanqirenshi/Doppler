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
    /// tag
    makeNoiseTag (noise) {
        let uri = noise.uri();
        let w = noise.w();
        let h = noise.h();
        let position = noise.position();
        let size = noise.size();
        let style = 'position:fixed;z-index:88888888;'
            + 'top:'  + position.top
            + 'left:' + position.left;

        let tag = document.createElement('img');
        tag.setAttribute('class', 'doppler noise');
        tag.setAttribute('src', uri);
        tag.setAttribute('style', style);
        tag.setAttribute('width', size.w);
        tag.setAttribute('height', size.h);

        return tag;
    }
    addNoiseTag (noise) {
        let stage = this.stage();
        stage.appendChild(noise);
    }
    /// main
    startNoise (code) {
        let noise = this.getNoise(code);
        let noise_tag = this.makeNoiseTag(noise);
        this.addNoiseTag(noise_tag);
    }
    stopNoise () {
    }
}
