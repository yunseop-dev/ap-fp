export default function drop_first(array) {
    var array_copy = array.slice();
    array_copy.shift();
    return array_copy;
}
