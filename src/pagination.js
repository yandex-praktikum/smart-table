// Считает, сколько всего страниц.
// Принимает: total — число строк; perPage — строк на странице.
// Возвращает: число страниц, не меньше 1.
// Пример: getPageCount(230, 10) → 23; getPageCount(0, 10) → 1
export function getPageCount(total, perPage) {
  return 1;
}

// Возвращает строки одной страницы.
// Принимает: rows — массив строк; page — номер страницы, начиная с 1; perPage — строк на странице.
// Возвращает: новый массив.
// Пример: applyPagination(rows, 2, 10) → строки с 11-й по 20-ю
export function applyPagination(rows, page, perPage) {
  return rows;
}

// Выводит кнопки с номерами страниц из шаблона #page вместо прежних и выделяет текущую классом active.
// Принимает: container — элемент для кнопок; pages — массив номеров, например [1, 2, 3, 4, 5];
// current — номер текущей страницы.
// Ничего не возвращает.
export function renderPages(container, pages, current) {
}

// Заполняет строку «Showing 11 to 20 of 230 entries».
// Принимает: status — элементы { fromRow, toRow, totalRows }; page — номер страницы;
// perPage — строк на странице; total — число строк после поиска и фильтров.
// Ничего не возвращает.
export function renderStatus(status, page, perPage, total) {
}
