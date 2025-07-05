function replaceAllStrings(str, search, replaceWith) {
    return str.replaceAll(search, replaceWith);
}

console.log(replaceAllStrings('apple banana apple grape apple', 'apple', 'orange'));

