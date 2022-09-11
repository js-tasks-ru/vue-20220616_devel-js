
import { computed, isRef } from 'vue';



/**
 * @template T
 * @param {function(...[*]): T} func - Исходная функция вычисления
 * @returns {function(...[*]): ComputedRef<T>} - Функция вычисления от ref-ов, возвращающая вычисляемое значение computed
 */
export function reactify(func) {

  const unrefArray = (items) => items.map((item) => (isRef(item) ? item.value : item));
  return (...args) => computed(() => func(...unrefArray(args)));
}
