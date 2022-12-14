export const priceWithTrim = (price: number): string => {
    let priceWithTrimArray: Array<string> = [];

    price.toString().split('').reverse()
        .forEach((number, id) => {
        if (id % 3 === 0) {
            priceWithTrimArray.push(' ');
        }

        priceWithTrimArray.push(number);
    });

    return priceWithTrimArray.reverse().join('');
};