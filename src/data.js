import { data as source } from './data/dataset_1.js';

// Имя и фамилия одной строкой: { first_name: 'Petr', last_name: 'Smirnov' } → 'Petr Smirnov'
function fullName(person) {
  return `${person.first_name} ${person.last_name}`;
}

// Строки таблицы, по одной на чек:
// { id: 'receipt_1', date: '2023-12-04', customer: 'Andrey Alekseev', seller: 'Nikolai Ivanov', total: 4657.56 }
export const rows = source.purchase_records.map((record) => ({
  id: record.receipt_id,
  date: record.date,
  customer: fullName(source.customers.find((customer) => customer.id === record.customer_id)),
  seller: fullName(source.sellers.find((seller) => seller.id === record.seller_id)),
  total: record.total_amount,
}));

// Имена продавцов для списка в фильтре: ['Alexey Petrov', 'Mikhail Nikolaev', …]
export const sellers = source.sellers.map(fullName);
