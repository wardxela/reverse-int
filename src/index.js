// Stupid solution
// module.exports = reverse = (n) => parseInt(n.toString().split("").reverse().join(""));

// Just a bit math :)
module.exports = reverse = (n) => {
    if (n < 0) n = Math.abs(n);
    if (n < 10) return `${n}`;
    return `${n % 10}${reverse(Math.floor(n / 10))}`;
};
