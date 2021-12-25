import React from "react";

const TasksList = (props) => {

    return(
        <ul>
            {
                props.tasks.map((task) => {
                    return(<li key={Math.random()}>{task.name} {task.location} {task.date}</li>);
                })
            }
        </ul>
    );
}

export default TasksList;