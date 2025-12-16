import { useNavigate } from 'react-router-dom';

function VideoCard({ thumbnail, channelAvatar, title, channel, views, timeAgo, id }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/watch/${id}`);
    };

    return (
        <div className="video-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className="thumbnail-container">
                <img src={thumbnail} alt={title} className="video-thumbnail" />
            </div>
            <div className="video-info">
                <img src={channelAvatar} alt={channel} className="channel-avatar" />
                <div className="video-details">
                    <h3 className="video-title">{title}</h3>
                    <p className="channel-name">{channel}</p>
                    <div className="video-stats">
                        <span>{views}</span>
                        <span className="dot-separator">•</span>
                        <span>{timeAgo}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
