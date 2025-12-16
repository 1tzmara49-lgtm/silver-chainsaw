import { useNavigate } from 'react-router-dom';

function Header({ searchTerm, setSearchTerm }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`);
    };

    return (
        <header>
            <div className="logo-container">
                <div className="logo" onClick={handleClick}>
                    <i className="fab fa-youtube"></i>
                    <svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         width="800px" height="800px" viewBox="0 0 36.75 36.75" xmlSpace="preserve">
                        <g>
                            <path d="M34.75,3.375H2c-1.104,0-2,0.896-2,2v26c0,1.104,0.896,2,2,2h32.75c1.104,0,2-0.896,2-2v-26
                        C36.75,4.271,35.854,3.375,34.75,3.375z M6,29.625H2.25v-5.062H6V29.625z M6,20.906H2.25v-5.063H6V20.906z
                        M6,12.187H2.25V7.125H6V12.187z M28.438,29.375H8.313v-22h20.125V29.375L28.438,29.375z
                        M34.5,29.625h-3.75v-5.062h3.75V29.625z M34.5,20.906h-3.75v-5.063h3.75V20.906z
                        M34.5,12.187h-3.75V7.125h3.75V12.187z"/>
                        </g>
                    </svg>
                    <span className="logo-text">Fake-Tube</span>
                </div>
            </div>

            <div className="search-container">
                <input
                    className="search-box"
                    placeholder="Поиск видео"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-btn">
                    <i className="fas fa-search"></i>
                </button>
            </div>

            <div className="header-icons">
                <button className="icon-btn">
                    <i className="fas fa-video"></i>
                </button>
                <button className="icon-btn">
                    <i className="fas fa-bell"></i>
                </button>
                <div className="user-avatar">U</div>
            </div>
        </header>
    );
}

export default Header;
