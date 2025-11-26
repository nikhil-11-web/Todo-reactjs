import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar';
import TodoItem from './Components/TodoItem'; // IMPORT THE NEW COMPONENT
import { v4 as uuidv4 } from 'uuid';
import { MdAdd } from "react-icons/md";

const App = () => {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = () => {
    setShowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    if(window.confirm("Are you sure you want to delete this task?")){
      let newTodos = todos.filter(item => {
        return item.id !== id
      });
      setTodos(newTodos)
      saveToLS()
    }
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && todo.length > 3) {
      handleAdd();
    }
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-white pt-8 pb-20 transition-all duration-300">
        <div className='container mx-auto my-5 p-5 md:p-0'>
          
          <div className='rounded-3xl p-6 md:p-10 bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-violet-900/20 max-w-3xl mx-auto ring-1 ring-white/5'>

            <div className="mb-8 flex flex-col gap-2">
              <h1 className="font-bold text-4xl bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
                Task Master
              </h1>
              <p className="text-slate-400 text-sm md:text-base font-light">
                Manage your daily goals with focus and clarity.
              </p>
            </div>

            {/* Input Section */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="relative group w-full">
                <input
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  value={todo}
                  type="text"
                  placeholder='Add a new task...'
                  className='w-full rounded-2xl px-6 py-4 bg-slate-800/50 border border-slate-700/50 focus:border-violet-500 focus:bg-slate-800 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all duration-300 placeholder:text-slate-600 text-slate-100 pr-16 shadow-inner'
                />
                <button
                  onClick={handleAdd}
                  disabled={todo.length <= 3}
                  className='absolute right-2 top-2 bottom-2 bg-violet-600 hover:bg-violet-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white px-4 md:px-6 rounded-xl font-bold shadow-lg shadow-violet-600/20 transition-all active:scale-95 flex items-center justify-center'
                >
                  <MdAdd className='text-xl' />
                </button>
              </div>
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center gap-3 mb-6 px-1">
              <input 
                id='show' 
                onChange={toggleFinished} 
                checked={showFinished} 
                type="checkbox" 
                className='w-5 h-5 accent-violet-500 cursor-pointer rounded border-slate-600 bg-slate-700' 
              />
              <label htmlFor="show" className='text-slate-400 text-sm select-none cursor-pointer hover:text-slate-200 transition-colors'>
                Show Finished Tasks
              </label>
            </div>

            <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent w-full mb-6"></div>

            <h2 className='font-semibold text-xl text-slate-200 mb-6 flex items-center gap-2'>
              <span className='w-2 h-8 bg-violet-500 rounded-full inline-block'></span>
              Your Tasks
            </h2>

           
            <div className='todos flex flex-col'>
              {todos.length === 0 && <div className='p-8 text-center text-slate-500 text-sm border-2 border-dashed border-slate-800 rounded-xl'>No tasks yet. Add one above!</div>}
              
              {todos.map(item => {
                return (showFinished || !item.isCompleted) && (
                   <TodoItem 
                      key={item.id}
                      item={item} 
                      handleEdit={handleEdit} 
                      handleDelete={handleDelete} 
                      handleCheckbox={handleCheckbox} 
                   />
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App