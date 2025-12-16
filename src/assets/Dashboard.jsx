import { useState } from "react";

function Dashboard() {
    const [count, setCount] = useState(0);

    return (
        <>
            <nav className="dashboard">
                <div className="dashboard-section">
                    <a href="#" className="dashboard-item active">
                        <i className="fas fa-home"></i>
                        <span>Главная</span>
                    </a>
                    <a href="#" className="dashboard-item">
                        <i className="fas fa-compass"></i>
                        <span>Навигатор</span>
                    </a>
                    <a href="#" className="dashboard-item">
                        <i className="fas fa-play-circle"></i>
                        <span>Мои подписки</span>
                    </a>
                </div>

                <div className="dashboard-section">
                    <a href="#" className="dashboard-item">
                        <i className="fas fa-bookmark"></i>
                        <span>Библиотека</span>
                    </a>
                    <a href="#" className="dashboard-item">
                        <i className="fas fa-history"></i>
                        <span>История</span>
                    </a>
                    <a href="#" className="dashboard-item">
                        <i className="fas fa-clock"></i>
                        <span>Смотреть позже</span>
                    </a>
                    <a href="#" className="dashboard-item">
                        <i className="fas fa-thumbs-up"></i>
                        <span>Понравившиеся</span>
                    </a>
                </div>

                <div className="dashboard-section">
                    <h3>Подписки</h3>
                    <a href="#" className="dashboard-item">
                        <div className="channel-avatar" style={{ backgroundColor: "#ff6b6b" }}>T</div>
                        <span>Канал 1</span>
                    </a>
                    <a href="#" className="dashboard-item">
                        <div className="channel-avatar" style={{ backgroundColor: "#4ecdc4" }}>И</div>
                        <span>Канал 2</span>
                    </a>
                    <a href="#" className="dashboard-item">
                        <div className="channel-avatar" style={{ backgroundColor: "#ffd166" }}>К</div>
                        <span>Канал 3</span>
                    </a>
                    <a href="#" className="dashboard-item">
                        <div className="channel-avatar" style={{ backgroundColor: "#06d6a0" }}>М</div>
                        <span>Канал 4</span>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Dashboard;
