let selectedImg = null;
let lat = 0;
let lng = 0;

let lastSend = 0;

function canSend() {
  const now = Date.now();
  if (now - lastSend < 5000) return false;
  lastSend = now;
  return true;
}

// EMAILJS
function kirimEmail(nama, wa, jumlah, img, gps, pesan, linkAdmin) {

  emailjs.send(
    "service_y6jn0ji",
    "TEMPLATE_ID_KAMU",
    {
      to_email: "evosrezasyah@gmail.com",
      nama: nama,
      wa: wa,
      jumlah: jumlah,
      desain: img,
      gps: gps,
      pesan: pesan,
      link_admin: linkAdmin
    }
  );

}

// PILIH GAMBAR
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

// KIRIM WA + EMAIL
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

  if (!canSend()) {
    alert("Tunggu 5 detik sebelum kirim lagi");
    return;
  }

  const maps = `https://maps.google.com/?q=${lat},${lng}`;

  const linkAdmin =
`https://USERNAME.github.io/SERASI/siap.html?nama=${encodeURIComponent(nama)}&wa=${encodeURIComponent(wa)}&jumlah=${encodeURIComponent(jumlah)}&img=${encodeURIComponent(selectedImg)}`;

  const msg =
`PESANAN BARU

Nama: ${nama}
WA: ${wa}
Jumlah: ${jumlah}

Desain: ${selectedImg}

GPS: ${maps}

Pesan: ${pesan}

Status: TANYA / BELUM FIX

Link Admin:
${linkAdmin}`;

  // kirim email
  kirimEmail(nama, wa, jumlah, selectedImg, maps, pesan, linkAdmin);

  // kirim WA
  const url =
`https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(msg)}`;

  window.open(url, "_blank");
}
