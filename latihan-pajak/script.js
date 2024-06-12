const tarif22 = [
  ["Impor Barang tertentu (Daftar A)", 10],
  ["Impor Barang tertentu (Daftar B)", 7.5],
  ["Impor Kedelai, Gandum, Tepung Terigu (Daftar C) dengan API", 0.5],
  ["Impor Ekspor komoditas tambang batu bara, mineral logam, dan mineral bukan logam (Daftar D)", 1.5],
  ["Impor Barang selain yang tertera pada daftar A, B,dan C yang menggunakan Angka Pengenal Impor (API)", 2.5],
  ["Impor barang selain yang tertera pada daftar A, B, dan C yang tidak menggunakan API", 7.5],
  ["Impor Barang yang tertera pada daftar C yang tidak menggunakan API", 7.5],
  ["Impor Barang yang tidak dikuasai", 7.5],
  ["Komoditas tambang batu bara, mineral logam dan mineral bukan logam", 1.5],
  ["Pembelian barang oleh bendahara pemerintah dan KPA", 1.5],
  ["Pembelian barang oleh BUMN dan perusahaan yang langsung dimiliki BUMN", 1.5],
  ["Penjualan bahan bakar minyak kepada SPBU yang menjual bahan bakar minyak yang dibeli dari Pertamina atau anak perusahaan Pertamina", 0.25],
  ["Penjualan bahan bakar minyak kepada SPBU yang menjual bahan bakar minyak yang dibeli dari selain Pertamina atau anak perusahaan Pertamina", 0.3],
  ["Bahan bakar gas", 0.3],
  ['Pelumas', 0.3],
  ['Penjualan semen', 0.25],
  ['Penjualan kertas', 0.1],
  ['Penjualan baja', 0.3],
  ['penjualan semua jenis kendaraan bermotor beroda dua atau lebih, tidak termasuk alat berat', 0.45],
  ['Penjualan semua jenis obat', 0.3],
  [`pembelian bahan-bahan berupa hasil kehutanan,
  perkebunan, pertanian, peternakan, dan perikanan
  yang belum melalui proses industri manufaktur
  oleh badan usaha industri atau eksportir`, 0.25],
  [`pembelian batubara, mineral logam, dan mineral
  bukan logam, dari badan atau orang pribadi
  pemegang izin usaha pertambangan oleh industri
  atau badan usaha`, 1.5],
  [`penyerahan Emas Perhiasan hasil produksi dari
  Pabrikan Emas Perhiasan kepada Pengusaha
  Emas Perhiasan yang memesan Emas
  Perhiasan`, 0.25],
  [`penyerahan bahan baku berupa: 1. Emas
  Perhiasan; dan/atau 2. emas batangan,
  dari Pengusaha Emas Perhiasan yang
  memesan Emas Perhiasan kepada Pabrikan
  Emas Perhiasan`, 0.25],
]

let randomedTarif22

const printPPH22 = () => {
  tarif22.sort(() => Math.random() - 0.5)
  const sec1 = document.querySelector('#tarif22')
  sec1.innerHTML = ''
  for (let i = 0; i < tarif22.length; i++) {
    const tr = document.createElement('tr')
    tr.id = `pph22-tr-${i + 1}`
    tr.innerHTML = `
      <td>${tarif22[i][0]}</td>
      <td><input type="number" id="PPh22-${i + 1}"></td>
    `
    sec1.appendChild(tr)
  }
}

printPPH22()

const validatePPH22 = () => {
  let jumlahBener
  tarif22.forEach((element, i) => {
    const input = document.querySelector(`#PPh22-${i + 1}`)
    const tulisan = document.querySelector(`#pph22-tr-${i + 1} td:nth-child(1)`)
    if(input.value == element[1]) {
      tulisan.classList.add('bener')
      jumlahBener++
    } else if(input.value > 0){
      tulisan.classList.add('salah')
    }
  });
}
document.addEventListener('keydown', (e) => {
  if(e.key == 'Enter') {
    validatePPH22()
  }
  if(e.key == 'ArrowUp') {
    e.preventDefault()
    let focusedNum = parseInt(document.activeElement.id.split('-')[1])
    const prev = document.querySelector(`#PPh22-${focusedNum - 1}`)
    prev.focus()
  }
  if(e.key == 'ArrowDown') {
    e.preventDefault()
    let focusedNum = parseInt(document.activeElement.id.split('-')[1])
    const prev = document.querySelector(`#PPh22-${focusedNum + 1}`)
    prev.focus()
  }
})
