function withObjectCopy(object, modify) {
    var copy = Object.assign({}, object);
    modify(copy);
    return copy;
}

export default function objectSet(object, key, value) {
    return withObjectCopy(object, function (copy) {
        copy[key] = value;
    });
}