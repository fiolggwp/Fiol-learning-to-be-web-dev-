import React from "react";
import PropTypes from "prop-types"; // Импорт PropTypes для проверки типов props.

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    if (!Array.isArray(items)) { // Проверяет, является ли items объектом, а не массивом.
        return (
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valueProperty]} // Использует значение valueProperty для уникального ключа.
                        className={
                            "list-group-item" +
                            (items[item] === selectedItem ? " active" : "")
                        } // Добавляет класс "active" для выбранного элемента.
                        onClick={() => onItemSelect(items[item])} // Обработчик для выбора элемента.
                        role="button" // Устанавливает элемент как кнопку для доступности.
                    >
                        {items[item][contentProperty]}
                         {/* // Отображает название элемента, используя contentProperty. */}
                    </li>
                ))}
            </ul>
        );
    }
    return (
        <ul className="list-group">
            {items.map((item) => (
                <li
                    key={item[valueProperty]} // Устанавливает уникальный ключ для элемента.
                    className={
                        "list-group-item" +
                        (item === selectedItem ? " active" : "")
                    } // Добавляет класс "active" для выбранного элемента.
                    onClick={() => onItemSelect(item)} // Обработчик для выбора элемента.
                    role="button" // Устанавливает элемент как кнопку для доступности.
                >
                    {item[contentProperty]} 
                    {/* // Отображает название элемента. */}
                </li>
            ))}
        </ul>
    );
};

// Значения по умолчанию для свойств valueProperty и contentProperty.
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

// Описание типов props, которые принимает компонент.
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // items может быть массивом или объектом.
    valueProperty: PropTypes.string.isRequired, // Проверяет, что valueProperty — строка.
    contentProperty: PropTypes.string.isRequired, // Проверяет, что contentProperty — строка.
    onItemSelect: PropTypes.func, // Функция для обработки выбора элемента.
    selectedItem: PropTypes.object // Объект выбранного элемента.
};

export default GroupList; // Экспорт компонента GroupList для использования в других файлах.




//кароче если проще практически ни чем эти функции не различаются в одном просто мы именно используем [item] чтобы
//получить значение по ключу и могу юзать его св-тва а если items массив то я обращаюсь к нему напрямую потому что item уже отдельный объект
//если еще проще у объектов обращени к элементу через items[item] а у массивов прямое то есть item сразу тк мы юзает map()
