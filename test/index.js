function picUri (path) {
    let config = _CONFIG.pic;
    return config.scheme + '://' + config.host + (config.port.trim()=='' ? '' : ':') + config.port + path;
}

/////
///// Doppler
/////
let DOPPLER = new Doppler();
let dodo = new Noise ({
    code: 'dodo',
    name: 'dodo',
    w: Math.floor(453/2),
    h: Math.floor(473/2),
    uri: picUri('/doppler/assets/dodo.png'),
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
});
DOPPLER.setNoise(dodo);


let gogo = new Noise ({
    code: 'gogo',
    name: 'gogo',
    w: Math.floor(453/2),
    h: Math.floor(473/2),
    uri: picUri('/doppler/assets/gogo.png'),
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
});
DOPPLER.setNoise(gogo);



/////
///// Event
/////
function start_gogo () {
    DOPPLER.startNoise('gogo');
};
function start_dodo () {
    DOPPLER.startNoise('dodo');
};
function change_pic (v) {
    let html = document.getElementsByTagName('html')[0];
    let pic1 = picUri('/doppler/assets/jojo02.png');
    let pic2 = picUri('/doppler/assets/jojo03.jpg');
    if (v==1)
        console.log(html.style.backgroundImage="url("+pic1+")");
    else
        console.log(html.style.backgroundImage="url("+pic2+")");
}
