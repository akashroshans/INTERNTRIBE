async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching:', error);
    }
}


fetchData('https://jsonplaceholder.typicode.com/todos/1');
