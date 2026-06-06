const params = new URLSearchParams(window.location.search);

const nama = params.get("nama") || "Pelanggan";
const wa = params.get("wa") || "";

document.getElementById("info").innerText =
`Halo ${nama}. Pilih metode pengiriman.`;

function kirim(type) {

  let pesan = "";

  if (type === "antar") {
    pesan = `Halo ${nama}.

Pesanan Anda sudah selesai.

Metode Pengiriman:
Diantar Langsung

Terima kasih telah memesan di Percetakan Serasi.`;
  }

  if (type === "ambil") {
    pesan = `Halo ${nama}.

Pesanan Anda sudah selesai.

Silakan ambil di Percetakan Serasi.

Terima kasih.`;
  }

  if (type === "ekspedisi") {
    pesan = `Halo ${nama}.

Pesanan Anda sudah selesai.

Metode Pengiriman:
Ekspedisi

Terima kasih.`;
  }

  window.open(
    `https://wa.me/${CONFIG.ADMIN_WHATSAPP}?text=${encodeURIComponent(pesan)}`,
    "_blank"
  );
}
