import React, { useState, useEffect } from "react";
import Users from "./Users"; // Импорт компонента Users для отображения пользователей.
import api from "./api"; // Импорт API для загрузки данных пользователей.

function App() {
    const [users, setUsers] = useState(); // Хранит состояние списка пользователей.

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data)); // Загружает данные пользователей при первом рендере.
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId)); // Фильтрует список, исключая пользователя по ID.
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark }; // Переключает состояние закладки пользователя.
                }
                return user;
            })
        );
        console.log(id); // Выводит ID пользователя в консоль для проверки.
    };

    return (
        <div>
            {users && (
                <Users
                    onDelete={handleDelete} // Передает функцию handleDelete в компонент Users.
                    onToggleBookMark={handleToggleBookMark} // Передает функцию handleToggleBookMark в компонент Users.
                    users={users} // Передает список пользователей в компонент Users.
                />
            )}
        </div>
    );
}

export default App; // Экспорт компонента App для использования в других файлах.
