import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

function TodoForm({ onAddTask, disabled }) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (disabled) {
      return
    }

    if (!trimmedTitle) {
      setError('Please enter task details.')
      return
    }

    onAddTask(trimmedTitle)
    setTitle('')
    setError('')
  }

  const handleChange = (event) => {
    setTitle(event.target.value)

    if (error) {
      setError('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="flex gap-6">
        <input
          type="text"
          value={title}
          onChange={handleChange}
          disabled={disabled}
          placeholder="add details"
          aria-invalid={Boolean(error)}
          className={`h-[52px] min-w-0 flex-1 rounded-md border px-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-300 focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 ${
            error
              ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
              : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
          }`}
        />

        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-[52px] w-[112px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md bg-sky-500 text-sm font-bold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
        >
          <FaPlus aria-hidden="true" />
          Add
        </button>
      </div>

      {error && <p className="mt-2 text-sm font-semibold text-red-500">{error}</p>}
    </form>
  )
}

export default TodoForm
