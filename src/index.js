exports.min = min = (array) =>
    array === undefined || array.length === 0 ? 0 : Math.min(...array);

exports.max = max = (array) =>
    array === undefined || array.length === 0 ? 0 : Math.max(...array);

exports.avg = avg = (array) => {
    if (array === undefined || array.length === 0) return 0;
    const sum = array.reduce((sum, item) => sum + item, 0);
    return sum / array.length;
};
