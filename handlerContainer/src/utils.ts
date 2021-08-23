import namor = require("namor")

export const getRandomNumber: (min: number, max: number) => number = (min, max) => {
    return Math.random() * (max - min) + min;
}

export const getRandomDomain: () => string = () => {
    return namor.generate();
}