const p = new URLSearchParams(window.location.search);

const nama = p.get("nama");
const wa = p.get("wa");

document.getElementById("info").innerText =
`Halo ${nama}, pilih metode pengiriman`;

function kirim(type) {

  let pesan = "";

  if (type === "antar") {
    pesan =
`Halo ${nama}

Pesanan Anda sudah selesai

Metode:
Diantar Langsung

Percetakan Serasi`;
  }

  if (type === "ambil") {
    pesan =
`Halo ${nama}

Pesanan siap diambil

Percetakan Serasi`;
  }

  if (type === "ekspedisi") {
    pesan =
`Halo ${nama}

Pesanan dikirim via ekspedisi

Percetakan Serasi`;
  }

  window.open(
    `https://wa.me/${wa}?text=${encodeURIComponent(pesan)}`,
    "_blank"
  );
}
