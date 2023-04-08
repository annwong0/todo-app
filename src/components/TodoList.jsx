import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { Box } from '@mui/material';

function TodoList() {
    return (
        <Box sx={{ padding: '10px 0'}}>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Disabled" />
            </FormGroup>
        </Box>
    )
}

export default TodoList;