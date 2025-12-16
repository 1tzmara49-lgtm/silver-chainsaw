import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import VideoGridSection from "./assets/videoGridSection.jsx";
import Dashboard from "./assets/Dashboard.jsx";
import VideoWatch from "./assets/VideoWatch.jsx";
import axios from "axios";

function App() {
    const [videos, setVideos] = useState([]);
    const [activeTag, setActiveTag] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios
            .get("https://608487fe53ff8cfd.mokky.dev/fake-youtube-data")
            .then(res => setVideos(res.data[0].videos))
            .catch(console.error);
    }, []);

    return (
        <>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <main className="main-content">
                <Dashboard />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <VideoGridSection
                                videos={videos}
                                activeTag={activeTag}
                                setActiveTag={setActiveTag}
                                searchTerm={searchTerm}
                            />
                        }
                    />
                    <Route path="/watch/:id" element={<VideoWatch videos={videos} />}/>
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
