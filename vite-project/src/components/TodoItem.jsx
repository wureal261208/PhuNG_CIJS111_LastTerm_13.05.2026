import { FaRegTrashAlt } from 'react-icons/fa'

function TodoItem({ task, showDelete, onToggleTask, onDeleteTask }) {
  return (
    <li className="flex items-center gap-2 text-left">
      <input
        type="checkbox"
        checked={!task.active}
        onChange={() => onToggleTask(task.id)}
        className="size-[18px] shrink-0 cursor-pointer accent-sky-500"
        aria-label={`Toggle ${task.title}`}
      />

      <span
        className={`flex-1 text-base font-bold transition ${
          task.active ? 'text-slate-700' : 'text-slate-700 line-through'
        }`}
      >
        {task.title}
      </span>

      {showDelete && (
        <button
          type="button"
          onClick={() => onDeleteTask(task.id)}
          className="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded text-slate-300 transition hover:bg-red-50 hover:text-red-500 focus:outline-none"
          aria-label={`Delete ${task.title}`}
          title="Delete task"
        >
          <FaRegTrashAlt aria-hidden="true" />
        </button>
      )}
    </li>
  )
}

export default TodoItem
