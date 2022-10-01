import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './Create.css';

// const callLocation = () => {
    
// }

const Create = () => {

    const handleSubmit = (e) => {
        console.log('event', event);
        setSubmitData({
            event: event,
            host: host,
            start: start,
            end: end,
            location: location
        })
        console.log('submit clicked');
        console.log('data to be sent', submitData);
        e.preventDefault();
    }

    const [event, setEvent] = useState('');
    const [host, setHost] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [location, setLocation] = useState('');
    // const [file, setFile] = useState('')
    const [submitData, setSubmitData] = useState({
        event: '',
        host: '',
        start: '',
        end: '',
        location: ''
    });
    
    return (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="form-container">
          <TextField
            required
            id="standard-required"
            label="Event Name"
            name='event'
            variant="standard"
            onChange={e => setEvent(e.target.value)}
            value={event}
          />
          <TextField
            required
            id="standard-required"
            label="Host Name"
            name='host'
            variant="standard"
            onChange={e => setHost(e.target.value)}
            value={host}
          />
          <TextField
            id="standard-number"
            label="Date"
            type="datetime-local"
            name='start'
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={e => setStart(e.target.value)}
            value={start}
          />
          <TextField
            id="standard-number"
            label="Date"
            type="datetime-local"
            name='end'
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={e => setEnd(e.target.value)}
            value={end}
          />
          {/* <button onClick={callLocation}>Click here to fetch your geo-location</button> */}
          <TextField
            id="standard-search"
            label="Location"
            type="search"
            name='location'
            variant="standard"
            onChange={e => setLocation(e.target.value)}
            value={location}
          />
          <div className='button'>
            <Button variant="contained" component="label" className='button-container'>
              Upload event photo
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </div>
          <div>
            <Button type='submit' variant="outlined" endIcon={<NavigateNextIcon />} href={`/event`} >Next</Button>
          </div>
        </div>
      </Box>
    );
}

export default Create;