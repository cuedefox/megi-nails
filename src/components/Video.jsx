import video from '../assets/vid/home.mp4';

export const Video = () => {
    return <div className='video-container'>
        <video className='video' autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='overlay-video'>
            <h2>Unias muejejejeje</h2>
        </div>
    </div>
}