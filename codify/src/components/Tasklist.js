import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TaskList = ({concept}) => {
    const [tasks, setTasks] = useState([
        {id: 5271, name: "Record React Lectures", completed: true}, 
        {id: 7825, name: "Edit React Lectures", completed: false}, 
        {id: 8391, name: "Watch Lectures", completed: false}
    ]);
    const [show, setShow] = useState(true);

    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

  return (
    <>
        <h1>Task List</h1>
        <ul>
            <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
            { show && tasks.map((task) => (
                <TaskCard key={task.id} concept={concept} task={task} handleDelete={handleDelete} />
            )) }
        </ul>
        <BoxCard result="success">
            <p className="title">Lorem ipsum dolor sit amet.</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vel!</p>
        </BoxCard>

        <BoxCard result="warning">
            <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officia, quae optio maiores delectus tempora eaque saepe quaerat nulla, accusantium quos tempore minima, itaque veritatis cupiditate ullam vitae ad. Ratione harum laborum quos perferendis explicabo ea, dicta quam nobis accusantium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing?</p>
        </BoxCard>
    </>
  )
}