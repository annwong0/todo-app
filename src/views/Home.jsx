import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import AllPanel from '../components/AllPanel';
import ActivePanel from '../components/ActivePanel';
import CompletedPanel from '../components/CompletedPanel';
import Footer from '../components/Footer';
import '../css/Home.css';
import { Grid } from '@mui/material';

function Home() {
    const [value, setValue] = useState(0);
    const [todo, setTodo] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    };

    const handleAddTodo = (newTodo) => {
        setTodo(newTodo, ...todo)
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={0} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <div className='header'>#todo</div>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} centered>
                            <Tab label="All" id='tab-0' />
                            <Tab label="Active" id='tab-1'/>
                            <Tab label="Completed" id='tab-2'/>
                        </Tabs>
                        <div id='tab-0' hidden={value !== 0} className='content'>
                            <AllPanel todo={todo} handleAddTodo={handleAddTodo}/>
                        </div>
                        <div id='tab-1' hidden={value !== 1} className='content'>
                            <ActivePanel />
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