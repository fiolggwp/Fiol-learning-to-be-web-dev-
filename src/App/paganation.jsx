import React from "react";
import _ from "lodash"; // Импорт библиотеки lodash для работы с массивами.
import PropTypes from "prop-types"; // Импорт библиотеки PropTypes для проверки типов props.

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize); // Определяет количество страниц, округляя до ближайшего большего целого.
    if (pageCount === 1) return null; // Если только одна страница, компонент не отображается.
    const pages = _.range(1, pageCount + 1); // Создаёт массив с номерами страниц.

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item" +
                            (page === currentPage ? " active" : "")
                        } // Добавляет класс "active" для текущей страницы.
                        key={"page_" + page} // Уникальный ключ для каждого элемента списка.
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)} // Обработчик для переключения страницы.
                        >
                            {page} 
                            {/* // Отображает номер страницы. */}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired, // Проверка, что itemsCount — число и обязательно.
    pageSize: PropTypes.number.isRequired, // Проверка, что pageSize — число и обязательно.
    onPageChange: PropTypes.func.isRequired, // Проверка, что onPageChange — функция и обязательно.
    currentPage: PropTypes.number.isRequired // Проверка, что currentPage — число и обязательно.
};

export default Pagination; // Экспорт компонента Pagination для использования в других файлах.
