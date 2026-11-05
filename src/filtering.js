// Добавляет в список продавцов по пункту <option> на каждое имя.
// Первый пункт «—» (все продавцы) уже есть в разметке.
// Принимает: select — элемент списка; sellers — массив имён.
// Ничего не возвращает.
// Пример: fillSellers(select, ['Ivan Petrov']) → в списке появится <option value="Ivan Petrov">Ivan Petrov</option>
export function fillSellers(select, sellers) {
}

// Оставляет строки, которые подходят под фильтры.
// Принимает: rows — массив строк; filters — значения полей формы { seller, totalFrom, totalTo }.
// Значения приходят строками. Пустая строка — фильтр не задан. Границы суммы входят в диапазон.
// Возвращает: новый массив.
// Пример: applyFilters(rows, { seller: 'Ivan Petrov', totalFrom: '1000', totalTo: '' })
//   → чеки продавца Ivan Petrov на сумму от 1000
export function applyFilters(rows, filters) {
  return rows;
}
