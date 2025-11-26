import React from 'react'
import { MdDelete, MdCheckBox } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoItem = ({ item, handleEdit, handleDelete, handleCheckbox }) => {
  return (
    <div className="group flex flex-col sm:flex-row justify-between items-center bg-slate-800/30 hover:bg-slate-800/80 p-4 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-violet-900/10 mb-3">
      
     
      <div className="flex gap-4 items-center w-full break-all">
        <div className="relative">
          <input
            name={item.id}
            onChange={handleCheckbox}
            type="checkbox"
            checked={item.isCompleted}
            className="peer appearance-none w-6 h-6 border-2 border-slate-600 rounded-full checked:bg-violet-500 checked:border-violet-500 cursor-pointer transition-all"
          />
          
          <MdCheckBox className={`absolute top-0 left-0 w-6 h-6 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200`} />
        </div>

        <div className="flex flex-col">
          <span className={item.isCompleted ? "text-slate-500 line-through decoration-2 decoration-violet-500/50 transition-all" : "text-slate-200 font-medium transition-all"}>
            {item.todo}
          </span>
          <span className='text-[10px] text-slate-600 uppercase tracking-widest'>
            {item.isCompleted ? "Completed" : "Pending"}
          </span>
        </div>
      </div>

      
      <div className="buttons flex gap-3 mt-4 sm:mt-0 w-full sm:w-auto justify-end">
        <button
          onClick={(e) => { handleEdit(e, item.id) }}
          className='bg-slate-700/50 hover:bg-blue-600 text-blue-400 hover:text-white p-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 group-hover:bg-slate-700'>
          <FaEdit />
        </button>
        <button
          onClick={(e) => { handleDelete(e, item.id) }}
          className='bg-slate-700/50 hover:bg-red-500 text-red-400 hover:text-white p-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 group-hover:bg-slate-700'>
          <MdDelete />
        </button>
      </div>

    </div>
  )
}

export default TodoItem