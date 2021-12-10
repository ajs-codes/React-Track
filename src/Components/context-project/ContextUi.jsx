import Nav from "./Nav";
import Main from "./Main";
import {CommentsContext} from './CommentsContext'
import { useContext } from "react";
const ContextUi = () => {
  const commentdata = useContext(CommentsContext);
  return (
    <div>
      <Nav count={commentdata.length}/>
      {commentdata.map((comment) => (
        <Main>
          <h1>{comment.name}</h1>
          <p>{comment.email}</p>
        </Main>
      ))}
    </div>
  );
};

export default ContextUi;
