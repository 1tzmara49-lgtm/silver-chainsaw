import TagList from "./Tags.jsx";
import VideoContainer from "./VideoContainer.jsx";

function VideoGridSection({ videos, activeTag, setActiveTag, searchTerm }) {
    const filteredVideos = videos.filter(video => {
        const matchesTag = !activeTag || video.tags.includes(activeTag);
        const matchesSearch = !searchTerm || video.video_title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesTag && matchesSearch;
    });

    return (
        <div className="video-grid-section">
            <TagList activeTag={activeTag} setActiveTag={setActiveTag} />
            <VideoContainer videos={filteredVideos} />
        </div>
    );
}

export default VideoGridSection;
