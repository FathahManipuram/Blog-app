import React from 'react'
import { useParams } from 'react-router-dom'

const PostDetails = () => {

	const id= useParams()
	console.log(id)
  return (
	<div>
	  <h1>PostDetails</h1>
	</div>
  )
}

export default PostDetails
