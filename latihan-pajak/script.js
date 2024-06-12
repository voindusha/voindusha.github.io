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
    } else{
      tulisan.classList.remove('bener')
      tulisan.classList.remove('salah')
    }
  });
}
document.addEventListener('keydown', (e) => {
  if(document.activeElement.id.match(/PPh22/)) {
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
  }
})

const tarifLain = [
  ["Dividen DN, dan Dividen LN (yang tidak diinvestasikan di Indonesia)", "PPh 4(2)", "WP OP", 10, "Final"],
  ["Dividen LN (yang tidak diinvestasikan di Indonesia)", "PPh 23", "Badan, BUT", 15, "Tidak Final"],
  ["Dividen DN", "PPh 26", "SP LN", 20, "Final"],
  ["Bunga simpanan koperasi", "PPh 4(2)", "Koperasi", 10, "Final"],
  ["Bunga Utang obligasi", "PPh 4(2)", "WP OP, WP Badan", 10, "Final"],
  ["Bunga Utang obligasi", "PPh 4(2)", "SP LN", 10, "Final"],
  ["Bunga simpanan di bank", "PPh 4(2)", "WP OP, WP Badan", 20, "Final"],
  ["Bunga selain yang dikenakan PPh 4(2)", "PPh 23", "WP OP, WP Badan", 15, "Tidak Final"],
  ["Pendapatan sewa tanah dan/atau bangunan", "PPH 4(2)", "WP OP, WP Badan", 10, "Final"],
  ["Pendapatan sewa selain tanah dan/atau bangunan", "PPH 23", "WP OP, WP Badan", 15, "Tidak Final"],
  ["Hadiah undian", "PPh 4(2)", "WP OP, WP Badan", 25, "Final"],
  ["Hadiah penghargaan", "PPh 21", "WP OP", 17, "Tidak Final"],
  ["Hadiah penghargaan", "PPh 26", "SP LN (OP)", 20, "Final"],
  ["Hadiah undian", "PPh 26", "SP LN (OP)", 20, "Final"],
  ["Hadiah penghargaan", "PPh 23", "WP Badan", 15, "Tidak Final"],
  ["Pekerjaan Konstruksi", "PPh 4(2)", "WP Badan, sertifikat kecil", 1.75, "Final"],
  ["Pekerjaan Konstruksi", "PPh 4(2)", "WP Badan, tidak ada sertifikat kecil", 4, "Final"],
  ["Pekerjaan Konstruksi", "PPh 4(2)", "WP Badan, keadaan lain", 2.65, "Final"],
  ["Pekerjaan Konstruksi Terintegrasi", "PPh 4(2)", "WP Badan, ada sertifikat", 2.65, "Final"],
  ["Pekerjaan Konstruksi Terintegrasi", "PPh 4(2)", "WP Badan, tidak ada sertifikat", 4, "Final"],
  ["Jasa konsultasi konstruksi", "PPh 4(2)", "WP Badan, ada sertfikat", 3.5, "Final"],
  ["Jasa konsultasi konstruksi", "PPh 4(2)", "WP Badan, tidak ada sertfikat", 6, "Final"],
  ["Pekerjaan Konstruksi", "PPh 4(2)", "WP OP, sertifikat kompetensi", 1.75, "Final"],
  ["Pekerjaan Konstruksi", "PPh 4(2)", "WP OP, tidak ada sertifikat", 4, "Final"],
  ["Pekerjaan Konstruksi", "PPh 4(2)", "WP OP, keadaan lain", 2.65, "Final"],
  ["Jasa konsultasi konstruksi", "PPh 4(2)", "WP OP, ada sertfikat", 3.5, "Final"],
  ["Jasa konsultasi konstruksi", "PPh 4(2)", "WP OP, tidak ada sertfikat", 6, "Final"],
  
]

const printTarifLain = () => {
  tarifLain.sort(() => Math.random() - 0.5)
  document.querySelector('#tarifLain').innerHTML = ''
  const tr = document.createElement('tr')
  tr.innerHTML = `<td>Tarif Lain</td><td>Subjek Pajak</td><td>PPh</td><td>Tarif (tarif pasal 17 ditulis "17")</td><td>Sifat</td>`
  document.querySelector('#tarifLain').appendChild(tr)
  tarifLain.forEach((element, i) => {
    const tr = document.createElement('tr')
    tr.id = `tarifLain-tr-${i + 1}`
    tr.innerHTML = `
      <td>${element[0]}</td>
      <td>${element[2]}</td>
      <td><select>
      <option value="PPh 4(2)">PPh 4(2)</option>
      <option value="PPh 23">PPh 23</option>
      <option value="PPh 26">PPh 26</option>
      <option value="PPh 21">PPh 21</option>
      </select></td>
      <td><input type="number" id="tarifLain-${i + 1}"></td>
      <td><select><option value="Final">Final</option><option value="Tidak Final">Tidak Final</option></select></td>
    `
    document.querySelector('#tarifLain').appendChild(tr)
  });
}

printTarifLain()

document.addEventListener('keydown', (e) => {
  if(e.key == 'Enter') {
    validateTarifLain()
    console.log('enter')
  }
  if(document.activeElement.id.match(/tarifLain/)) {
    if(e.key == 'ArrowUp') {
      e.preventDefault()
      let focusedNum = parseInt(document.activeElement.id.split('-')[1])
      const prev = document.querySelector(`#tarifLain-${focusedNum - 1}`)
      prev.focus()
    }
    if(e.key == 'ArrowDown') {
      e.preventDefault()
      let focusedNum = parseInt(document.activeElement.id.split('-')[1])
      const prev = document.querySelector(`#tarifLain-${focusedNum + 1}`)
      prev.focus()
    }
  }
})

const validateTarifLain = () => {
  tarifLain.forEach((e, i) => {
    const input = document.querySelector(`#tarifLain-${i + 1}`).value
    const jenisEl = document.querySelector(`#tarifLain-tr-${i + 1} td:nth-child(3) select`)
    const sifatEl = document.querySelector(`#tarifLain-tr-${i + 1} td:nth-child(5) select`)
    const jenis = jenisEl.options[jenisEl.selectedIndex].value
    const sifat = sifatEl.options[sifatEl.selectedIndex].value
    const tulisan = document.querySelector(`#tarifLain-tr-${i + 1} td:nth-child(1)`)
    if(input == e[3] &&jenis == e[1] && sifat == e[4]) {
      tulisan.classList.add('bener')
      tulisan.classList.remove('salah')
    } else if(input > 0) {
      tulisan.classList.add('salah')
      tulisan.classList.remove('bener')
      console.log(`jawaban: ${e[3]}, sifat: ${e[4]}, jenis: ${e[1]}\ninput: ${input}, sifat: ${sifat}, jenis: ${jenis}`)
    } else{
      tulisan.classList.remove('bener')
      tulisan.classList.remove('salah')
    }
  })
}