import React from "react";
import PropTypes from "prop-types"; // Импорт PropTypes для проверки типов props.

const Quality = ({ color, name, _id }) => {
    return (
        <span className={"badge m-1 bg-" + color}>
            {name} 
            {/* / Выводит название качества. */}
        </span>
    );
};

// Описание типов для props, указывающее, что color, name и _id обязательны и должны быть строками.
Quality.propTypes = {
    color: PropTypes.string.isRequired, // Проверяет, что color — это строка.
    name: PropTypes.string.isRequired, // Проверяет, что name — это строка.
    _id: PropTypes.string.isRequired // Проверяет, что _id — это строка.
};

export default Quality; // Экспорт компонента Quality для использования в других файлах.
