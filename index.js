import { tasks, addTask, sortTasksByPriority, getTasksDueWithin, simulateReminders } from './taskManager.js';
addTask('Task 1', 5, 1);
addTask('Task 2', 10, 2);
addTask('Task 3', 2, 3);

sortTasksByPriority();
console.log('Tasks sorted by priority:', tasks);

const dueSoon = getTasksDueWithin(10);
console.log('Tasks due within 10 minutes:', dueSoon);

simulateReminders();