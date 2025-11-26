// =========================
// KONFIGURASI KONTAK
// =========================
// Ubah nomor & email utama di sini bila diperlukan.
const CONTACT_CONFIG = {
  email: "rezaseptiann7@gmail.com",
  whatsappReza: "6282111187730",
  whatsappFidella: "6287715066432",
};

// sisipkan email ke tampilan
const emailDisplay = document.getElementById("emailDisplay");
if (emailDisplay) {
  emailDisplay.textContent = CONTACT_CONFIG.email;
}

// =========================
// DATA KATALOG VISA
// =========================
// Semua konten teks terlihat user sudah menggunakan Bahasa Indonesia.
// Gambar menggunakan placeholder Unsplash (boleh diganti URL lain atau file lokal).
const visaCountries = [
  {
    negara: "Amerika Serikat (USA B1/B2)",
    deskripsi:
      "Visa kunjungan untuk urusan bisnis (B1) maupun wisata (B2). Termasuk pendampingan pembuatan akun & penjadwalan wawancara di kedutaan.",
    hargaMulai: "Rp 4.200.000",
    durasiProses: "Durasi fleksibel, mengikuti jadwal kedutaan",
    jenisVisa: "B1 (Bisnis), B2 (Turis)",
    imageUrl: "assets/Amerika.jpg", // foto Golden Gate (USA)
  },
  {
    negara: "Australia",
    deskripsi:
      "Pilihan ideal untuk liburan keluarga, studi singkat, maupun perjalanan bisnis ke Sydney, Melbourne, Perth, dan kota lainnya.",
    hargaMulai: "Rp 3.500.000",
    durasiProses: "10–21 hari kerja",
    jenisVisa: "Turis, Bisnis, Kunjungan Keluarga",
    imageUrl: "assets/Australia.jpg", // foto Opera House
  },
  {
    negara: "Cina (China)",
    deskripsi:
      "Sering digunakan untuk kunjungan pabrik, meeting bisnis, hingga wisata ke kota bersejarah seperti Beijing dan sekitarnya.",
    hargaMulai: "Rp 1.300.000",
    durasiProses: "7–10 hari kerja",
    jenisVisa: "Bisnis, Turis, Kunjungan",
    imageUrl: "assets/cina.jpg", // foto Forbidden City
  },
  {
    negara: "Inggris (UK)",
    deskripsi:
      "Untuk perjalanan ke London dan kota lain di Inggris, baik untuk liburan, kunjungan keluarga, maupun keperluan bisnis.",
    hargaMulai: "Rp 3.800.000",
    durasiProses: "15–30 hari kerja",
    jenisVisa: "Turis, Bisnis, Studi Singkat",
    imageUrl: "assets/Inggris.jpg", // foto Tower Bridge
  },
  {
    negara: "Schengen Eropa (Prancis, dll.)",
    deskripsi:
      "Satu visa untuk menjelajahi beberapa negara di area Schengen, termasuk Prancis, Jerman, Italia, Belanda, dan lainnya.",
    hargaMulai: "Rp 3.400.000",
    durasiProses: "10–21 hari kerja",
    jenisVisa: "Turis, Bisnis, Kunjungan Keluarga",
    imageUrl: "assets/paris.jpg", // foto Eiffel
  },
  {
    negara: "Kanada",
    deskripsi:
      "Cocok untuk liburan kota besar seperti Toronto, Vancouver, atau kunjungan keluarga dan perjalanan bisnis.",
    hargaMulai: "Rp 3.700.000", // contoh, silakan sesuaikan
    durasiProses: "15–30 hari kerja",
    jenisVisa: "Turis, Bisnis, Kunjungan Keluarga",
    imageUrl: "assets/rusia.jpg", // fotonya skyline Toronto
  },

  // --- negara lain yang belum punya foto sendiri (masih pakai placeholder online) ---

  {
    negara: "Jepang",
    deskripsi:
      "Cocok untuk liburan musim semi, musim gugur, hingga perjalanan bisnis ke Tokyo, Osaka, atau kota lainnya.",
    hargaMulai: "Rp 1.300.000",
    durasiProses: "7–15 hari kerja",
    jenisVisa: "Turis, Bisnis, Kunjungan Keluarga",
    imageUrl:
      "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=1200&q=80",
  },
  {
    negara: "Korea Selatan",
    deskripsi:
      "Favorit untuk penggemar K-Pop & drama, juga untuk perjalanan bisnis ke Seoul dan kota besar lainnya.",
    hargaMulai: "Rp 1.600.000",
    durasiProses: "7–14 hari kerja",
    jenisVisa: "Turis, Bisnis, Kunjungan Keluarga",
    imageUrl:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1200&q=80",
  },
  {
    negara: "Turki (e-Visa)",
    deskripsi:
      "Proses relatif cepat dan praktis, cocok untuk transit panjang maupun liburan singkat di Istanbul.",
    hargaMulai: "Rp 950.000",
    durasiProses: "1–3 hari kerja",
    jenisVisa: "e-Visa Turis",
    imageUrl: "assets/Turki.jpg"
  },
  {
    negara: "Arab Saudi (Umrah / Kunjungan)",
    deskripsi:
      "Untuk perjalanan ibadah Umrah, kunjungan keluarga, maupun keperluan bisnis tertentu ke Arab Saudi.",
    hargaMulai: "Rp 1.800.000",
    durasiProses: "7–14 hari kerja",
    jenisVisa: "Umrah, Kunjungan Keluarga, Bisnis",
    imageUrl:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
  },
];


// =========================
// RENDER VISA CARDS
// =========================

const visaGrid = document.getElementById("visaGrid");
const negaraSelect = document.getElementById("negaraTujuan");

function renderVisaCards() {
  if (!visaGrid) return;
  visaGrid.innerHTML = "";

  visaCountries.forEach((item) => {
    const card = document.createElement("article");
    card.className = "nv-visa-card";

    card.innerHTML = `
      <div class="nv-visa-img-wrap">
        <img src="${item.imageUrl}" alt="Ilustrasi negara ${item.negara}" loading="lazy" />
        <span class="nv-visa-tag">${item.negara}</span>
      </div>
      <div class="nv-visa-body">
        <h3 class="nv-visa-name">${item.negara}</h3>
        <p class="nv-visa-desc">${item.deskripsi}</p>
        <div class="nv-visa-meta">
          <div>
            <span class="nv-visa-meta-label">Durasi proses</span><br/>
            <span>${item.durasiProses}</span>
          </div>
          <div>
            <span class="nv-visa-meta-label">Jenis visa</span><br/>
            <span>${item.jenisVisa}</span>
          </div>
        </div>
      </div>
      <div class="nv-visa-footer">
        <div class="nv-visa-price">
          <span>Mulai dari</span>
          <span>${item.hargaMulai}</span>
        </div>
        <button class="nv-btn-outline nv-btn-consult">
          Detail &amp; Konsultasi
        </button>
      </div>
    `;

    visaGrid.appendChild(card);
  });

  // tombol Detail & Konsultasi → scroll ke Hubungi Kami
  document.querySelectorAll(".nv-btn-consult").forEach((btn) => {
    btn.addEventListener("click", () => {
      const contactSection = document.getElementById("hubungi");
      if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderNegaraOptions() {
  if (!negaraSelect) return;
  visaCountries.forEach((item) => {
    const opt = document.createElement("option");
    opt.value = item.negara;
    opt.textContent = item.negara;
    negaraSelect.appendChild(opt);
  });
}

renderVisaCards();
renderNegaraOptions();

// =========================
// HERO FORM HANDLING
// =========================

const heroForm = document.getElementById("heroForm");

if (heroForm) {
  heroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Di implementasi backend, data bisa dikirim ke server.
    // Untuk sekarang, cukup scroll ke bagian katalog.
    const target = document.getElementById("katalog-visa");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
}

// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.style.display === "flex";
    mobileMenu.style.display = isOpen ? "none" : "flex";
    menuToggle.classList.toggle("active", !isOpen);
  });

  // Tutup menu ketika salah satu link diklik
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none";
      menuToggle.classList.remove("active");
    });
  });
}

// =========================
/* FAQ AKORDION */
// =========================

const faqItems = document.querySelectorAll(".nv-faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".nv-faq-question");
  btn.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    faqItems.forEach((i) => i.classList.remove("active"));
    if (!isActive) item.classList.add("active");
  });
});

// =========================
// FOOTER TAHUN DINAMIS
// =========================

const footerYear = document.getElementById("footerYear");
if (footerYear) {
  const year = new Date().getFullYear();
  footerYear.textContent = `© ${year} NoaTravel. Seluruh hak cipta dilindungi.`;
}

// =========================
// SMOOTH SCROLL (fallback)
// =========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
