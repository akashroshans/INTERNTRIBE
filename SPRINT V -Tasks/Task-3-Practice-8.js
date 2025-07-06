function findProductById(products, id) {
    return products.find(product => product.id === id);
}

const products = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Phone' },
    { id: 103, name: 'Tablet' }
];
console.log(findProductById(products, 102));

