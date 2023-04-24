import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import AllPanel from '../components/AllPanel';
import ActivePanel from '../components/ActivePanel';
import CompletedPanel from '../components/CompletedPanel';
import Footer from '../components/Footer';
import '../css/Home.css';
import { Grid } from '@mui/material';
import moment from 'moment/moment';

function Home() {
    const [value, setValue] = useState(0);
    const [todoList, setTodoList] = useState([]);
    const [addingTodo, setAddingTodo] = useState(false);

    useEffect(() => {
        readTodoList();
    }, [])

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    }
    /**
     * read todo list
     */
    const readTodoList = () => {
        let curTodoList = JSON.parse(localStorage.getItem('todo'));
        if (!curTodoList) {
            localStorage.setItem('todo', JSON.stringify([]));
        }
        setTodoList(curTodoList ? curTodoList : []);
    }
    /**
     * create todo by reading text
     * @param {String} text 
     */
    const createTodo = (text) => {
        setAddingTodo(true);
        const todoObj = {
            id: moment().format(), 
            text: text, 
            active: true
        }
        let oldTodoList = JSON.parse(localStorage.getItem('todo'));
        localStorage.setItem('todo', JSON.stringify(oldTodoList.concat(todoObj)))
        setAddingTodo(false);
        readTodoList();
    }
    /**
     * update a todo
     * @param {*} event 
     * @param {String} id 
     */
    const updateTodo = (event, id) => {

    }

    useEffect(() => {
        console.log(todoList)
    }, [todoList])

    return (
        <div>
            <Grid container>
                <Grid item xs={0} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <div className='header'>#todo</div>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleTabChange} centered>
                            <Tab label="All" id='tab-0' />
                            <Tab label="Active" id='tab-1'/>
                            <Tab label="Completed" id='tab-2'/>
                        </Tabs>
                        <div id='tab-0' hidden={value !== 0} className='content'>
                            <AllPanel todoList={todoList} createTodo={createTodo} updateTodo={updateTodo}/>
                        </div>
                        <div id='tab-1' hidden={value !== 1} className='content'>
                            <ActivePanel todoList={todoList.filter(todo => todo.active === true)} updateTodo={updateTodo}/>
                        </div>
                        <div id='tab-2' hidden={value !== 2} className='content'>
                            <CompletedPanel />
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={0} md={3}></Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default Home;