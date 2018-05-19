let DOPPLER = new Doppler();
DOPPLER.setNoise(new Noise ({
    code: 'dodo',
    name: 'dodo',
    w:453, h:473,
    uri: 'http://localhost/doppler/assets/dodo.png',
    liner: () => {
        console.log('Tick!');
    },
    scaler: () => {
        console.log('Tick!');
    }}));
DOPPLER.startNoise('dodo');
