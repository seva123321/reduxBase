import { commentCreate, commentsLoad} from './redux/actions';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { useDispatch, useSelector } from 'react-redux';
import SingleComment from './SingleComment';

function Comments(props) {
    const [textComment, setTextComment] = useState('')
    // console.log('comment.props >> ', props);
    const comments = useSelector(state=> {
        const {commentsReducer} = state
        return commentsReducer.comments
    })

    const dispatch = useDispatch()
    

    const handleInput = (e)=>{
        setTextComment(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log('submit textComment>> ', textComment);
        const id = uniqid()
        dispatch(commentCreate(textComment, id))
    }

    useEffect(()=>{
        dispatch(commentsLoad())
    }, [dispatch])

    // console.log('COMMENTS > ', comments);
    

  return (
    <div className='card-comments'>
        <form className='comment-item-create' onSubmit={handleSubmit}>
            <input onChange={handleInput} type='text' value={textComment}/>
            <input type='submit' hidden/>
        </form>
        {!!comments.length && comments.map(res=> {
            return <SingleComment key={res.id} data={res}/>
        })}
        
    </div>
  )
}

export default Comments