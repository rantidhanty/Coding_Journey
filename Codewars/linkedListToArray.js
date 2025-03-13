/**
 * Mengonversi daftar berantai (linked list) menjadi array.
 * @see {@link https://www.codewars.com/kata/557dd2a061f099504a000088} for the original problem statement.
 * @param {Object} list - Objek linked list dengan format { nilai: number, lanjut: Object | null }.
 * @param {number} list.nilai - Nilai pada node saat ini.
 * @param {Object|null} list.lanjut - Node berikutnya atau null jika sudah akhir.
 * @returns {number[]} - Array berisi nilai-nilai dari linked list.
 * @example
 * // Contoh penggunaan:
 * listToArray({ nilai: 1, lanjut: { nilai: 2, lanjut: { nilai: 3, lanjut: null } } });
 * // Output: [1, 2, 3]
 */
function listToArray(list) {
  const result = [];
  while (list !== null) {
    result.push(list.nilai);
    list = list.lanjut;
  }
  return result;
}

console.log(
  listToArray({
    nilai: 1,
    lanjut: { nilai: 2, lanjut: { nilai: 3, lanjut: null } },
  })
);
