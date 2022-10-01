import { Icon } from '@mui/material';
import './Event.css';

const Event = () => {
    return (
        <div className='event-container'>
            <div className='info'>
                <h1>Birthday Bash</h1>
                <h6>Hosted by Elysia</h6>
                <div className='subInfo'>
                    <Icon></Icon>
                    <h5>18 August 6:00PM</h5>
                    <h5>to 19 August 1:00PM UTC +10</h5>
                </div>
                <div className='subInfo'>
                    <Icon></Icon>
                    <h5>Street name</h5>
                    <h5>Suburb, State, Postcode</h5>
                </div>
            </div>
            <div className='pic'>
                <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T191843Z&X-Amz-Expires=86400&X-Amz-Signature=d5cf90882d9e1b9ff2f7b183217cf3d46c8f9176727a3388027a7ea1adfac014&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject' alt='birthday cake' />
            </div>
        </div>
    )
}

export default Event;