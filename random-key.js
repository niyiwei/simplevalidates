const s = require('someteayaya');

const RandomKey = {
    generate: (size) => {
        for (let i = 0; i < 10; i++) {
            secreetKey = "abc"+i;
            s.generateToken(secreetKey, "user")
        }
    }
};
export default RandomKey;