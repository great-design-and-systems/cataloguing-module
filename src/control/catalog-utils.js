export const objectToQuery = (obj) => {
    let query = '?';
    for (let obk in obj) {
        query += (obk + '=' + obj[obk] + '&');
    }
    return query.substring(0, query.length - 1);
}

export const hasOwnProperty = (obj, prop) => {
    var proto = obj.__proto__ || obj.constructor.prototype;
    return (prop in obj) &&
        (!(prop in proto) || proto[prop] !== obj[prop]);
}