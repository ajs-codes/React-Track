import { useState, createContext } from 'react';
import comments from './comments';

export const CommentsContext = createContext();

export const CommentsProvider = (props) => {
    const [commentData, setCommentData] = useState(comments);
    return(
        <CommentsContext.Provider value={commentData}>
         {props.children}
        </CommentsContext.Provider>
    )
}