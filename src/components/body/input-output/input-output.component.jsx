import { useState } from 'react';
import TableHeader from './tableHeader/tableHeader.component';

import './input-output.style.css'

let nextId = -1;
const InputOutput = () => {
    const [taskName, setTaskName] = useState("");
    const [expertName, setExpertName] = useState("");
    const [taskStatus, setTaskStatus] = useState("");
    const [doneTasks, setDoneTasks] = useState([]);
    const [notDoneTasks, setNotDoneTasks] = useState([]);
    const [doingTasks, setDoingTasks] = useState([]);
    const [challengingTasks, setChallengingTasks] = useState([]);

    const reset = () => {
        setTaskName("");
        setExpertName("");
        setTaskStatus("");
    }
    const handleTaskName = (e) => {
        setTaskName(e.target.value);
    }
    const handleExpertName = (e) => {
        setExpertName(e.target.value);
    }
    const handleStatus = (e) => {
        setTaskStatus(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.value) {
            taskStatus === "done"
                ? setDoneTasks([...doneTasks, { name: taskName, expert: expertName, status: "done", id: ++nextId }])
                : taskStatus === "notDone"
                    ? setNotDoneTasks([...notDoneTasks, { name: taskName, expert: expertName, status: "notDone", id: ++nextId }])
                    : taskStatus === "doing"
                        ? setDoingTasks([...doingTasks, { name: taskName, expert: expertName, status: "doing", id: ++nextId }])
                        : setChallengingTasks([...challengingTasks, { name: taskName, expert: expertName, status: "challenging", id: ++nextId }])
        }
        reset();
    }
    return (
        <div className='body-component'>
            <form dir='rtl' className='input-body'>
                <label className='d-block'>
                    نام تسک :
                    <input
                        className='task-name'
                        type='text'
                        value={taskName}
                        onChange={handleTaskName}
                        required
                    />
                </label>

                <label className='d-block'>
                    نام کارشناس :
                    <input
                        className='expert-name'
                        type='text'
                        value={expertName}
                        onChange={handleExpertName}
                        required
                    />
                </label>

                <label className='d-block'>
                    وضعیت :
                    <select
                        className='task-status'
                        type='text'
                        value={taskStatus}
                        onChange={handleStatus}
                        required
                    >
                        <option value="" disabled defaultValue hidden>
                            انتخاب وضعیت
                        </option>
                        <option value="done">
                            انجام شده
                        </option>
                        <option value="notDone">
                            انجام نشده
                        </option>
                        <option value="doing">
                            در حال انجام
                        </option>
                        <option value="challenging">
                            چالشی
                        </option>
                    </select>
                </label>
                <button className='d-block' id='submit-btn' type='submit' value="Submit" onClick={handleSubmit}>ثبت</button>
            </form>

            <div className='output-body d-inline-block'>
                <TableHeader/>
                <div className='task-table'>
                    <ul className='ms-3'>
                        {notDoneTasks.map((items) => (
                            <li key={items.id}>{items.name + " : " + items.expert}</li>
                        ))}
                    </ul>
                    <ul className='ms-3'>
                        {doingTasks.map((items) => (
                            <li key={items.id}>{items.name + " : " + items.expert}</li>
                        ))}
                    </ul>
                    <ul className='ms-3'>
                        {challengingTasks.map((items) => (
                            <li key={items.id}>{items.name + " : " + items.expert}</li>
                        ))}
                    </ul>
                    <ul className=''>
                        {doneTasks.map((items) => (
                            <li key={items.id}>{items.name + " : " + items.expert}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        
    );
}

export default InputOutput;