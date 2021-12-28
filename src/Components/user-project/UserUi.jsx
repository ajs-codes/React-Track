import AddUser from "./AddUser.jsx";
import {CommentsContext} from '../context-project/CommentsContext'
import { useContext } from "react";

const UserUi = () => {
    const commentdata = useContext(CommentsContext);
    return (
        <main className="min-h-screen w-screen bg-gray-200">
        <h1>No of comments from context : {commentdata.length}</h1>
        <AddUser/>
        </main>
    )
}

export default UserUi;