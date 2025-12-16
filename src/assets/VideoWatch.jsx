import { useParams } from 'react-router-dom';

export default function VideoWatch({ videos }) {
    const { id } = useParams();

    if (!videos || videos.length === 0) return <p>Loading...</p>;

    const video = videos.find(v => v.id === id);

    if (!video) return <p>Video not found.</p>;

    return (
        <div className="video-page">
            <iframe
                width="800"
                height="450"
                src={`https://www.youtube.com/embed/${id}`}
                title={video.video_title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <h1>{video.video_title}</h1>
            <p>{video.channel_name} • {video.views} • {video.published_ago}</p>
        </div>
    );
}
