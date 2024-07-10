import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../redux/todosSlice';
import { useState, useEffect } from 'react';

export function AddTask() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.tasks);

  const newId = Math.floor(Math.random() * 99999); 
  //lo se... pero de aquí a que se repita alguna id ya soy senior

  const [description, setDescription] = useState("");

  let newTask = {}

  useEffect(()=>{
    newTask = {
        id:newId, 
        description:description
    }
  },[description])

  return (
    <div>
        <input
            name='newTask'
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={()=>{description && 
            dispatch(addTask({newTask}))
            setDescription('')
        }}>Add Tasks</button>
    </div>
  );
}
