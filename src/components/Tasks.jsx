import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/todosSlice';

export function Tasks() {
    const storeData = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Tasks</h1>
            <ul>
                {storeData.tasks.map((task)=>(
                    <li key={task.id}>
                        {task.description}
                        <button onClick={()=>dispatch(deleteTask({idTask:task.id}))}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
