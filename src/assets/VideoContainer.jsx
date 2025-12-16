import VideoCard from "./VideoCard.jsx";

function VideoContainer({ videos }) {
    return (
        <section className="video-section">
            <div className="section-header">
                <h2 className="section-title">Рекомендуем для вас</h2>
                <a className="show-more">Показать все</a>
            </div>

            <div className="videos-grid">
                {videos.map((video, index) => (
                    <VideoCard
                        key={index}
                        id={video.id}
                        thumbnail={video.thumbnail_url}
                        channelAvatar={video.channel_avatar_url}
                        title={video.video_title}
                        channel={video.channel_name}
                        views={video.views}
                        timeAgo={video.published_ago}
                    />
                ))}
            </div>
        </section>
    );
}

export default VideoContainer;
