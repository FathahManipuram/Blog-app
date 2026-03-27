import React from 'react'

const Button = ({onClick, children, disabled=false, className="bg-[var(--primary)]"}) => {

	// const base= "px-5 py-2 rounded font-medium hover:bg-blue-600"
  return (
	<button 
	onClick={onClick}
	disabled={disabled}
	className= {`w-full py-2.5 rounded-full font-medium shadow-xl hover:opacity-80 transition duration-200 ${className}`}
	>
		{children}
	</button>
  )
}

export default Button
