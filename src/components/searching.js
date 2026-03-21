import { rules, createComparison } from "../lib/compare.js";

export function initSearching(searchField) {
  const compare = createComparison(
    ['skipEmptyTargetValues'],  // ✅ строка — имя правила
    [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]
  );

  return (data, state, action) => {
    return data.filter(row => compare(row, state));
  };
}