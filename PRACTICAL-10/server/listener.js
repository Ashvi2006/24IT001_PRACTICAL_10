
const taskEvents = require('./event');

console.log('Listener.js loaded successfully');

taskEvents.on('task-created', async (task) => {
  const handlerStart = new Date();

  console.log('\n========== BACKGROUND EVENT ==========');
  console.log('Event Name:', 'task-created');
  console.log('Task Title:', task.title);
  console.log('Assigned User:', task.assignedUser);
  console.log('Event Time:', task.eventTime);
  console.log('Handler Start:', handlerStart.toISOString());

  // Simulate asynchronous notification work
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('Notification logged successfully');

  const handlerEnd = new Date();

  console.log('Handler End:', handlerEnd.toISOString());
  console.log('======================================\n');
});


