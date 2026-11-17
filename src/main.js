import './fonts/ys-display/fonts.css';
import './style.css';

import { rows, sellers } from './data.js';
import { createRow, renderRows } from './table.js';
import { applySearch } from './searching.js';
import { fillSellers, applyFilters } from './filtering.js';
import { nextOrder, applySort, renderSort } from './sorting.js';
import { getPageCount, applyPagination, renderPages, renderStatus } from './pagination.js';
import { getPages } from './lib/pages.js';

// Элементы страницы
const form = document.querySelector('form[name="table"]');
const rowsContainer = form.querySelector('[data-name="rows"]');
const sellerSelect = form.querySelector('select[name="seller"]');
const sortButtons = form.querySelectorAll('button[name="sort"]');
const pagesContainer = form.querySelector('[data-name="pages"]');
const status = {
  fromRow: form.querySelector('[data-name="fromRow"]'),
  toRow: form.querySelector('[data-name="toRow"]'),
  totalRows: form.querySelector('[data-name="totalRows"]'),
};

// Состояние таблицы, которого нет в полях формы: номер страницы, число страниц и сортировка.
// Число страниц считает render(): кнопкам «вперёд» и «последняя» нужно знать, где конец.
const state = {
  page: 1,
  pageCount: 1,
  sort: { field: null, order: 'none' },
};

// Перерисовывает таблицу.
function render() {
  // Здесь будет цепочка: поиск → фильтры → сортировка → страница → вывод
}

// Enter в текстовом поле не отправляет форму и не перезагружает страницу
form.addEventListener('submit', (event) => {
  event.preventDefault();
});

// Здесь будут слушатели событий формы

render();
