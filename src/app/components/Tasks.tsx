import { Task } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

export default function Tasks({
  tasks,
  setTasks,
}: {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}) {
  const handleCheckboxChange = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col gap-2 items-center w-fit px-4'>
      <h2 className='text-2xl font-bold'>Tasks</h2>
      <AnimatePresence>
        {tasks.map((task) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className='bg-slate-800 px-4 py-2 h-fit rounded-md flex flex-col gap-4 w-fit'
              key={task.id}>
              {task.completed ? (
                <h2 className='text-lg font-bold text-center'>Completed</h2>
              ) : (
                ''
              )}
              <p className={`text-md font-medium text-left text-wrap h-auto break-words ${task.completed ? 'line-through' : ''}`}>
                {task.text}
              </p>
              <div className='flex flex-row w-full justify-around gap-8 items-center'>
                <div className='flex flex-row gap-2 items-center'>
                  <label htmlFor='Task Completed'>Task Complete?</label>
                  <input
                    checked={task.completed}
                    onChange={() => handleCheckboxChange(task.id)}
                    type='checkbox'
                    className='w-4 h-4 cursor-pointer'
                    name='Task Completed'
                  />
                </div>
                <button
                  className='bg-red-900 hover:bg-red-800 transition-colors p-2 rounded-md
                                        text-center w-fit cursor-pointer self-center'
                  onClick={() => {
                    setTasks(tasks.filter((t) => t.id !== task.id));
                  }}>
                  Delete
                </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
