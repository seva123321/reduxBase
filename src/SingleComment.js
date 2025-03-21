import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {commentUpdate, commentDelete} from './redux/actions'

function SingleComment({data}) {
    const [commentText, setCommentText] = useState('')
    const {text, id} = data

    const dispatch = useDispatch()

    useEffect(()=> {
        if (text) {
            setCommentText(text)
        }
    }, [text])
    
    const handleInput = (e) =>{
        setCommentText(e.target.value)
    }

    const handleUpdate = (e) =>{
        e.preventDefault()
        dispatch(commentUpdate(commentText, id))
    }
    const handleDelete = () =>{
        dispatch(commentDelete(id))
    }

  return (
        <form className='comment-item' onSubmit={handleUpdate}>
            <div className='comments-item-delete' onClick={handleDelete}>&times;</div>
            <input type='text' value = {commentText} onChange={handleInput}/>
            <input type='submit' hidden/>
        </form>
  )
}

export default SingleComment