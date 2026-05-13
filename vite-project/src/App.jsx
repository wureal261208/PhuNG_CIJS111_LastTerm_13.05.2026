import { useMemo, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoTabs from './components/TodoTabs'

function App() {
  const [selectedTab, setSelectedTab] = useState('all')
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Do coding challenges', active: true },
    { id: 2, title: 'Do coding challenges', active: true },
    { id: 3, title: 'Task done', active: false },
  ])

  const filteredTasks = useMemo(() => {
    if (selectedTab === 'active') {
      return tasks.filter((task) => task.active)
    }

    if (selectedTab === 'completed') {
      return tasks.filter((task) => !task.active)
    }

    return tasks
  }, [selectedTab, tasks])

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      active: true,
    }

    setTasks((currentTasks) => [newTask, ...currentTasks])
  }

  const toggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, active: !task.active } : task,
      ),
    )
  }

  const deleteTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
  }

  const deleteCompletedTasks = () => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.active))
  }

  const completedCount = tasks.filter((task) => !task.active).length
  const canAddTask = selectedTab !== 'completed'

  return (
    <main className="min-h-screen bg-white px-5 py-10 text-slate-700">
      <section className="mx-auto w-full max-w-[620px]">
        <header className="mb-10 text-center">
          <h1 className="text-[34px] font-bold leading-none text-slate-800">
            #todo
          </h1>
        </header>

        <TodoTabs selectedTab={selectedTab} onSelectTab={setSelectedTab} />

        {canAddTask && <TodoForm onAddTask={addTask} disabled={!canAddTask} />}

        <TodoList
          tasks={filteredTasks}
          selectedTab={selectedTab}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />

        {selectedTab === 'completed' && (
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={deleteCompletedTasks}
              disabled={completedCount === 0}
              className="cursor-pointer rounded-sm bg-red-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-red-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              delete all
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
