function TagList({ activeTag, setActiveTag }) {
    const tags = [
        "Все",
        "Музыка",
        "Игры",
        "Технологии",
        "Новости",
        "Спорт",
        "Кулинария",
        "Обучение",
        "Фильмы",
        "Прямые эфиры",
    ];

    return (
        <div className="tags-container">
            <div className="tags">
                {tags.map(tag => (
                    <button
                        key={tag}
                        className={`tag ${activeTag === tag || (!activeTag && tag === "Все") ? "active" : ""}`}
                        onClick={() => setActiveTag(tag === "Все" ? null : tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TagList;
