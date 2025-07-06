function findOverdueTask(tasks) {
    const today = new Date().toISOString().split('T')[0];
    return tasks.find(task => task.dueDate < today);
}
const tasks = [
    { taskName: 'Task 1', dueDate: '2023-06-01' },
    { taskName: 'Task 2', dueDate: '2024-05-01' },
    { taskName: 'Task 3', dueDate: '2024-01-01' }
];
console.log(findOverdueTask(tasks));
