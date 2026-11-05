// Возвращает следующее состояние кнопки сортировки: 'none' → 'up' → 'down' → 'none'.
// Пример: nextOrder('up') → 'down'
export function nextOrder(order) {
  return order;
}

// Сортирует строки по полю sort.field.
// Принимает: rows — массив строк; sort — объект { field: 'date' | 'total' | null, order: 'none' | 'up' | 'down' }.
// 'up' — по возрастанию, 'down' — по убыванию, 'none' — исходный порядок.
// Возвращает: новый массив, исходный не меняется.
// Пример: applySort(rows, { field: 'total', order: 'down' }) → сначала самые крупные чеки
export function applySort(rows, sort) {
  return rows;
}

// Показывает на кнопках, какая сортировка выбрана: записывает в data-value кнопки 'up', 'down' или 'none'.
// Иконку по data-value меняют стили.
// Принимает: buttons — кнопки сортировки (у каждой есть data-field); sort — объект сортировки.
// Ничего не возвращает.
export function renderSort(buttons, sort) {
}
