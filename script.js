function selectImg(img) {
  selectedImg = img;
  alert("Dipilih: " + img);
}

// GPS
function getGPS() {
  navigator.geolocation.getCurrentPosition((pos) => {
    lat = pos.coords.latitude;
    lng = pos.coords.longitude;

    document.getElementById("gpsText").innerText =
      "GPS aktif ✔";
  });
}

// kirim WA + link admin
function sendWA() {

  const nama = document.getElementById("nama").value;
  const wa = document.getElementById("wa").value;
  const jumlah = document.getElementById("jumlah").value;
  const pesan = document.getElementById("pesan").value;

  if (!nama || !wa || !jumlah) {
    alert("Isi data dulu");
    return;
  }

  if (!selectedImg) {
    alert("Pilih foto dulu");
    return;
  }

  const maps = `https://maps.google.com/?q=${lat},${lng}`;

  // LINK ADMIN (ini inti sistem kamu)
  const adminLink =
`https://USERNAME.github.io/serasi/siap.html?nama=${encodeURIComponent(nama)}&wa=${encodeURIComponent(wa)}&jumlah=${encodeURIComponent(jumlah)}&img=${encodeURIComponent(selectedImg)}`;

  const msg =
`PESANAN BARU

Nama: ${nama}
WA: ${wa}
Jumlah: ${jumlah}

Desain: ${selectedImg}

GPS: ${maps}

Status: TANYA / BELUM FIX

Link Admin:
${adminLink}`;

  const url =
`https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(msg)}`;

  window.open(url, "_blank");
}
