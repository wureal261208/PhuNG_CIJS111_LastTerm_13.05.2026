import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

function TodoForm({ onAddTask, disabled }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (!trimmedTitle || disabled) {
      return
    }

    onAddTask(trimmedTitle)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 flex gap-6">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        disabled={disabled}
        placeholder="add details"
        className="h-[52px] min-w-0 flex-1 rounded-md border border-slate-300 px-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
      />

      <button
        type="submit"
        disabled={disabled}
        className="inline-flex h-[52px] w-[112px] shrink-0 items-center justify-center gap-2 rounded-md bg-sky-500 text-sm font-bold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
      >
        <FaPlus aria-hidden="true" />
        Add
      </button>
    </form>
  )
}

export default TodoForm
