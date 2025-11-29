import React, { useState } from 'react'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); 
    }
  };

  return (
    <nav className='sticky top-0 z-50 bg-gradient-to-r from-violet-950 via-slate-900 to-slate-950 text-white shadow-lg shadow-violet-500/20'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
            
          
            <div onClick={() => scrollToSection('home')} className='logo flex items-center gap-4 cursor-pointer group'>
                <div className='relative'>
                    <div className='absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500'></div>
                    <img 
                        className='relative rounded-full h-10 w-10 object-cover border-2 border-white/10' 
                        src="https://i.pinimg.com/736x/5e/81/9a/5e819a5ce865476b73087fd1276e7c3e.jpg" 
                        alt="iTask Logo" 
                    />
                </div>
                <span className='font-bold text-xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:to-white transition-all'>
                    iTask
                </span>
            </div>

        
            <ul className='hidden md:flex gap-10 font-medium text-sm tracking-wider uppercase'>
                <li onClick={() => scrollToSection('home')} className='cursor-pointer hover:text-violet-400 transition-all duration-300 relative group'>
                    Home
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all group-hover:w-full'></span>
                </li>
                <li onClick={() => scrollToSection('tasks')} className='cursor-pointer hover:text-violet-400 transition-all duration-300 relative group'>
                    Your Tasks
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all group-hover:w-full'></span>
                </li>
            </ul>

            <button 
                className='md:hidden text-white focus:outline-none'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
        </div>

     
        {isMenuOpen && (
            <div className='md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 absolute w-full left-0 shadow-2xl'>
                <ul className='flex flex-col gap-6 py-8 items-center font-medium'>
                    <li className='cursor-pointer hover:text-violet-400 transition-colors' onClick={() => scrollToSection('home')}>
                        Home
                    </li>
                    <li className='cursor-pointer hover:text-violet-400 transition-colors' onClick={() => scrollToSection('tasks')}>
                        Your Tasks
                    </li>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar