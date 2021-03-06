import React, {useState} from "react";
import groupIcon from "@assets/icons/boards.png";
import taskIcon from "@assets/icons/add.png";
import CreateTask from "@pages/CreateTask";
import CreateGroup from "@pages/CreateGroup";

const Panel = () => {
    const [createTaskState, setCreateTaskState ] = useState(false);
    const [createGroupState, setCreateGroupState ] = useState(false);

    return (
        <>
            <div className="panel">
                <div className="panel-title">
                    <h1>TASK</h1>
                </div>
                <div className="panel-buttoncontainer">
                    <button onClick={() => setCreateGroupState(true)}>
                        <img src={groupIcon} alt="Group task icon"/>
                        GROUP</button>
                    <button onClick={() => setCreateTaskState(true)}>
                        <img src={taskIcon} alt="Task icon"/>
                        TASK</button>
                </div>
            </div>
            { createTaskState && <CreateTask State={setCreateTaskState}/> }
            { createGroupState && <CreateGroup State={setCreateGroupState} /> }
        </>
    );
}

export default Panel;