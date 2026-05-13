const tabs = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
]

function TodoTabs({ selectedTab, onSelectTab }) {
  return (
    <div className="grid grid-cols-3 border-b border-slate-300">
      {tabs.map((tab) => {
        const isSelected = selectedTab === tab.id

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectTab(tab.id)}
            className={`relative cursor-pointer pb-3 text-sm font-bold transition focus:outline-none ${
              isSelected
                ? 'text-slate-800 after:absolute after:inset-x-0 after:-bottom-px after:mx-auto after:h-1 after:w-20 after:rounded-full after:bg-sky-500'
                : 'text-slate-700 hover:text-sky-600'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

export default TodoTabs
