import { createComparison, defaultRules } from "../lib/compare.js";

// @todo: #4.3 — настроить компаратор
const compare = createComparison(defaultRules);

export function initFiltering(elements, indexes) {
  // @todo: #4.1 — заполнить выпадающие списки опциями
  Object.keys(indexes) // Получаем ключи из объекта
    .forEach((elementName) => {
      // Перебираем по именам
      elements[elementName].append(
        // в каждый элемент добавляем опции
        ...Object.values(indexes[elementName]) // формируем массив имён, значений опций
          .map((name) => {
            const option = document.createElement("option");
            option.value = name;
            option.textContent = name;
            return option;
            // используйте name как значение и текстовое содержимое
            // @todo: создать и вернуть тег опции
          }),
      );
    });

  return (data, state, action) => {
    // @todo: #4.2 — обработать очистку поля
  if (action?.name === "clear") {
      action.parentElement.querySelector("input").value = "";
      state[action.dataset.field] = "";
    }
    // @todo: #4.5 — отфильтровать данные используя компаратор
    return data.filter(row => compare(row, state));
  };
}
