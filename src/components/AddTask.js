import React, {useState} from 'react';

const AddTask = (props) => {
    
    const [taskName, setTaskName] = useState('');
    const [taskLocation, setTaskLocation] = useState('');
    const [taskDate, setTaskDate] = useState('');

    const getTaskName = (event) => {
        setTaskName(event.target.value.trim());
    }

    const getTaskLocation = (event) => {
        setTaskLocation(event.target.value.trim());
    }

    const getTaskDate = (event) => {
        setTaskDate(event.target.value.trim());
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddTask(taskName,taskLocation,taskDate);
        console.log(taskName,taskLocation,taskDate);

    }


    return(
        <div>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="taskName">Enter task name: </label>
                    <input type="text" id="taskName" onChange={getTaskName} />    
                </div>
                <div>
                    <label htmlFor="taskLocation">Enter task location: </label>
                    <input type="text" id="taskLocation" onChange={getTaskLocation} />    
                </div>
                <div>
                    <label htmlFor="taskDate">Enter task date: </label>
                    <input type="date" id="taskDate" onChange={getTaskDate} />    
                </div>
                <div><button type='submit'>Add Task</button></div>
            </form>

        </div>
    );
}

export default AddTask;
