import React from 'react'

const Button = ({onClick, children}) => {

	// const base= "px-5 py-2 rounded font-medium hover:bg-blue-600"
  return (
	<button 
	onClick={onClick}
	className= "w-full py-2.5 rounded-xl font-medium bg-[var(--primary)] hover:opacity-90 transition duration-200"
	>
		{children}
	</button>
  )
}

export default Button
