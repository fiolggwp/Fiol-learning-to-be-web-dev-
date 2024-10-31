import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "./utils/Pagenate"; // Импорт функции paginate для пагинации списка.
import Pagination from "./paganation"; // Импорт компонента Pagination для отображения страниц.
import User from "./User"; // Импорт компонента User для отображения пользователей.
import api from "./api"; // Импорт API для получения данных.
import GroupList from "./groupList"; // Импорт компонента GroupList для фильтрации по профессиям.
import SearchStatus from "./searchStatus"; // Импорт компонента SearchStatus для отображения статуса поиска.

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1); // Хранит текущую страницу.
    const [professions, setProfession] = useState(); // Хранит список профессий.
    const [selectedProf, setSelectedProf] = useState(); // Хранит выбранную профессию.

    const pageSize = 4; // Количество пользователей на одной странице.

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data)); // Загружает список профессий при первом рендере.
    }, []);

    useEffect(() => {
        setCurrentPage(1); // Сбрасывает текущую страницу при выборе новой профессии.
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item); // Устанавливает выбранную профессию.
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex); // Устанавливает текущую страницу при нажатии на номер страницы.
    };

    const filteredUsers = selectedProf
        ? allUsers.filter(
            (user) =>
                user.profession._id === selectedProf._id
        ) // Фильтрует пользователей по выбранной профессии.
        : allUsers;

    const count = filteredUsers.length; // Количество отфильтрованных пользователей.
    const usersCrop = paginate(filteredUsers, currentPage, pageSize); // Отображает пользователей для текущей страницы.

    const clearFilter = () => {
        setSelectedProf(); // Сбрасывает выбранную профессию.
    };

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf} // Передает выбранную профессию.
                        items={professions} // Передает список профессий.
                        onItemSelect={handleProfessionSelect} // Передает обработчик для выбора профессии.
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter} // Обработчик для сброса фильтра.
                    >
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} /> 
                {/* // Отображает количество найденных пользователей. */}
                {count > 0 && (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Встретился, раз</th>
                                <th scope="col">Оценка</th>
                                <th scope="col">Избранное</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {usersCrop.map((user) => (
                                <User {...rest} {...user} key={user._id} /> // Отображает пользователя.
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count} // Передает общее количество пользователей для пагинации.
                        pageSize={pageSize} // Передает количество пользователей на одной странице.
                        currentPage={currentPage} // Передает текущую страницу.
                        onPageChange={handlePageChange} // Обработчик для изменения страницы.
                    />
                </div>
            </div>
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.array // Проверка, что users — массив.
};

export default Users; // Экспорт компонента Users для использования в других файлах.



// Описание JSON.stringify
// JSON.stringify — это метод, который преобразует объект или значение JavaScript 
// в строку JSON.В этом коде JSON.stringify(user.profession) === JSON.stringify(selectedProf) 
// используется для сравнения объектов user.profession и selectedProf как строк.Это необходимо, 
// потому что в JavaScript объектные данные(user.profession и selectedProf) сравниваются по ссылке,
//  а не по значению.