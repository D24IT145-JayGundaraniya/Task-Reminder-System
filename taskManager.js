export const tasks = [];

export function addTask(title, dueTime, priority) {
    if (title && typeof dueTime === 'number' && priority) {
        tasks.push({ title, dueTime, priority });
    } else {
        console.error('Invalid task data');
    }
}

export function sortTasksByPriority() {
    tasks.sort((a, b) => a.priority - b.priority);
}

export function getTasksDueWithin(timeframe) {
    return tasks.filter(task => task.dueTime <= timeframe);
}

export function simulateReminders() {
    tasks.forEach(task => {
        setTimeout(() => console.log(`Reminder: ${task.title} is due!`), task.dueTime * 60000);
    });
}