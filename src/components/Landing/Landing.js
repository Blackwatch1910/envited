import { Button } from '@mui/material';
import './Landing.css';

function Landing() {
  return (
    <div className="container">
      <img
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T160853Z&X-Amz-Expires=86400&X-Amz-Signature=10fe32cb16744c44b45662622a58e7d5388d1eb3f18164934a4e5324c573a48c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
        alt="movie night"
      />
      <div className='text-container'>
        <div className='first'>Imagine if</div>
        <h2>SnapChat</h2> 
        <div className='first'>had events.</div>
        <div className='second'>
          Easily host and share events with your friends across any social
          media.
        </div>
        <Button variant="contained" className='button-container' href={`/create`}>🎉 Create my event</Button>
      </div>
    </div>
  );
}

export default Landing;
