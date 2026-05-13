import TodoItem from './TodoItem'

function TodoList({ tasks, selectedTab, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <p className="mt-7 text-center text-sm font-semibold text-slate-400">
        No tasks in this tab.
      </p>
    )
  }

  return (
    <ul className="mt-6 space-y-4">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          showDelete={selectedTab === 'completed'}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  )
}

export default TodoList
