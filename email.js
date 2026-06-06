function sendEmail(data) {
  emailjs.send("service_id", "template_id", {
    nama: data.nama,
    wa: data.wa,
    jumlah: data.jumlah,
    desain: data.desain,
    pertanyaan: data.pertanyaan,
    lokasi: data.maps
  }).then(() => {
    console.log("Email terkirim");
  });
}
