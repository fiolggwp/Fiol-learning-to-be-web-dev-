import React from "react";
import PropTypes from "prop-types"; // Импорт PropTypes для проверки типов props.

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1)); // Извлекает последнюю цифру для определения правильной формы слова.
        
        if (number > 4 && number < 15) {
            return "человек тусанет"; // Для чисел 5-14 используется форма "человек тусанет".
        }
        if (lastOne === 1) return "человек тусанет"; // Если последняя цифра 1, то форма "человек тусанет".
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут"; // Для последних цифр 2-4 форма "человека тусанут".
        return "человек тусанет"; // Для остальных чисел форма "человек тусанет".
    };

    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
                // Устанавливает цвет метки в зависимости от наличия людей.
            >
                {length > 0
                    ? `${length + " " + renderPhrase(length)} с тобой сегодня` // Показывает количество и форму слова, если есть люди.
                    : "Никто с тобой не тусанет"}
                     {/* // Сообщение, если никто не найден. */}
            </span>
        </h2>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number // Проверка, что length — число.
};

export default SearchStatus; // Экспорт компонента SearchStatus для использования в других файлах.
