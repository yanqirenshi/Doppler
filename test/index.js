let DOPPLER = new Doppler();
DOPPLER.setNoise(new Noise ({
    code: 'dodo',
    name: 'dodo',
    w: Math.floor(453/2),
    h: Math.floor(473/2),
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
