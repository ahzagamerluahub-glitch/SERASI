function selectDesign(img) {
  selectedImage = img;
  alert("Desain dipilih: " + img);
}

// ambil GPS
function getLocation() {
  if (!navigator.geolocation) {
    alert("GPS tidak didukung");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      userLat = pos.coords.latitude;
      userLng = pos.coords.longitude;

      document.getElementById("gpsStatus").innerText =
        "GPS aktif ✓";
    },
    () => {
      alert("GPS harus diizinkan");
    }
  );
}

// hitung harga sederhana
function calcPrice(jumlah) {
  if (jumlah >= 100) {
    return 7500;
  } else {
    return 8000;
  }
}

// kirim ke WhatsApp
function sendWA() {
  const nama = document.getElementById("nama").value;
  const wa = document.getElementById("wa").value;
  const jumlah = document.getElementById("jumlah").value;
  const pertanyaan = document.getElementById("pertanyaan").value;
  const alamat = document.getElementById("alamat").value;

  if (!nama || !wa || !jumlah) {
    alert("Nama WA dan Jumlah wajib diisi");
    return;
  }

  if (!userLat || !userLng) {
    alert("GPS wajib diaktifkan");
    return;
  }

  const harga = calcPrice(jumlah);
  const total = harga * jumlah;

  const maps = `https://maps.google.com/?q=${userLat},${userLng}`;

  const msg =
`Halo Percetakan Serasi.

Nama: ${nama}
WA: ${wa}

Jumlah: ${jumlah}
Harga per buku: ${harga}
Total: ${total}

Desain: ${selectedImage}

Pertanyaan:
${pertanyaan}

Alamat:
${alamat}

GPS:
${maps}`;

  const url =
`https://wa.me/${CONFIG.ADMIN_WHATSAPP}?text=${encodeURIComponent(msg)}`;

  window.open(url, "_blank");
}
