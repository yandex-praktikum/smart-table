// Возвращает номера страниц, которые видны в пагинации: не больше limit штук, текущая — примерно в середине.
// Принимает: current — номер текущей страницы; max — число страниц; limit — сколько номеров показывать.
// Пример: getPages(1, 23, 5) → [1, 2, 3, 4, 5]; getPages(10, 23, 5) → [8, 9, 10, 11, 12];
// getPages(23, 23, 5) → [19, 20, 21, 22, 23]; getPages(1, 2, 5) → [1, 2]
export function getPages(current, max, limit) {
  current = Math.max(1, Math.min(max, current));
  limit = Math.min(max, limit);

  let start = Math.max(1, current - Math.floor(limit / 2));
  let end = start + limit - 1;

  // У конца списка сдвигаем окно влево
  if (end > max) {
    end = max;
    start = Math.max(1, end - limit + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
}
