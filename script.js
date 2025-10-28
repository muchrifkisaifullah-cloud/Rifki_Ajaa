<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Efek Mengetik - Website JS Satuan</title>
<style>
  body {
    background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
    color: white;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    text-align: center;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  .typing {
    font-size: 24px;
    color: #00d4ff;
    border-right: 2px solid #00d4ff;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
  }

  footer {
    position: absolute;
    bottom: 20px;
    font-size: 14px;
    color: rgba(255,255,255,0.7);
  }
</style>
</head>
<body>

<h1>Selamat Datang di Website Saya</h1>
<div id="text" class="typing"></div>

<footer>© 2025 Dibuat dengan JavaScript</footer>

<script>
// ------- SCRIPT JS SATUAN: Efek Mengetik ------- //
const teks = "Saya seorang Web Developer dan Desainer Kreatif.";
const elemen = document.getElementById("text");
let i = 0;

function ketik() {
  if (i < teks.length) {
    elemen.textContent += teks.charAt(i);
    i++;
    setTimeout(ketik, 80);
  } else {
    elemen.style.borderRight = "none"; // hilangkan garis saat selesai
  }
}

window.onload = ketik;
</script>

</body>
</html>

