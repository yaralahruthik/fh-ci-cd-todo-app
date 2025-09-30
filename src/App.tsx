import AddTask from '@/features/tasks/add-task';
import TaskList from '@/features/tasks/task-list';
import TaskListHeader from '@/features/tasks/task-list-header';
import TaskListItem from '@/features/tasks/task-list-item';
import type { Task } from '@/features/tasks/types';
import React from 'react';

export default function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(), // Not a great way to generate IDs
        title: taskName,
        isCompleted: false,
      },
    ]);
  };

  return (
    <div className="container mx-auto p-10 space-y-4">
      <h1 className="text-lg font-black">Tasks</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList header={<TaskListHeader count={tasks.length} />}>
        {tasks.map((task) => (
          <TaskListItem key={task.id}>{task.title}</TaskListItem>
        ))}
      </TaskList>
    </div>
  );
}
