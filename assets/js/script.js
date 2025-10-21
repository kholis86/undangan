document.addEventListener("DOMContentLoaded", function () {
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbwfJdV9P6H6S1eVEkkA8aXW7PI4vHiboo5o0FxEcoI_UJ9lOgbmB44pTc4G4GJzFzxnrA/exec"
    const wishForm = document.getElementById("wishForm")
    const wishList = document.getElementById("wishList")

    // 🔹 Fungsi untuk memuat ucapan dari Google Apps Script
    async function loadWishes() {
        try {
            const response = await fetch(scriptURL)
            const json = await response.json()
            let wishes = Array.isArray(json.data) ? json.data.reverse() : []

            // 🔹 Hanya ambil 5 ucapan terbaru
            wishes = wishes.slice(0, 5)

            wishList.innerHTML = ""

            wishes.forEach((wish) => {
                if (!wish.name && !wish.message) return

                const div = document.createElement("div")
                div.classList.add("wish-item")

                const waktu = wish.timestamp
                    ? new Date(wish.timestamp).toLocaleString("id-ID", {
                          dateStyle: "short",
                          timeStyle: "short"
                      })
                    : ""

                div.innerHTML = `
              <p><strong>${wish.name || "Anonim"}</strong></p>
              <p>${wish.message || ""}</p>
            `
                wishList.appendChild(div)
            })
        } catch (error) {
            console.error("Gagal memuat data:", error)
            wishList.innerHTML = "<p>Gagal memuat ucapan.</p>"
        }
    }

    // 🔹 Fungsi untuk mengirim ucapan baru
    // Ambil referensi ke tombol submit di awal
    const submitButton = wishForm.querySelector('button[type="submit"]')
    // 🔹 Fungsi untuk mengirim ucapan baru
    wishForm.addEventListener("submit", function (e) {
        e.preventDefault()

        const name = document.getElementById("wishName").value.trim()
        const message = document.getElementById("wishMessage").value.trim()

        if (!name || !message) {
            alert("Nama dan pesan tidak boleh kosong!")
            return
        }

        // 🌟 Menonaktifkan tombol submit
        submitButton.disabled = true
        // Opsional: Ganti teks tombol atau tampilkan indikator loading
        // submitButton.textContent = "Mengirim..."

        const formData = new FormData()
        formData.append("name", name)
        formData.append("message", message)

        fetch(scriptURL, {
            method: "POST",
            body: formData
        })
            .then(() => {
                wishForm.reset()
                // 🔹 Langsung refresh daftar ucapan
                loadWishes()
            })
            .catch((err) => {
                console.error("Gagal mengirim ucapan:", err)
                alert("Gagal mengirim ucapan, coba lagi.")
            })
            .finally(() => {
                // 🌟 Mengaktifkan kembali tombol submit, terlepas dari sukses atau gagal
                submitButton.disabled = false
                // submitButton.textContent = "Kirim Ucapan" // Kembalikan teks tombol
            })
    })

    // 🔹 Pertama kali saat halaman dimuat
    loadWishes()

    // 🔹 Refresh otomatis setiap 20 detik
    setInterval(loadWishes, 20000)
})

const cover = document.getElementById("cover")
const bgMusic = document.getElementById("bgMusic")
const musicBtn = document.getElementById("musicBtn")

document.getElementById("openInvite").addEventListener("click", () => {
    cover.classList.add("hidden")
    document.body.style.overflow = "auto"

    bgMusic.play() // mainkan musik otomatis
    musicBtn.style.display = "block" // tampilkan tombol play/pause
})
musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play()
        musicBtn.textContent = "⏸️"
    } else {
        bgMusic.pause()
        musicBtn.textContent = "▶️"
    }
})

const thumbs = document.querySelectorAll(".thumb")
const galleryMain = document.getElementById("galleryMain").querySelector("img")
thumbs.forEach((t) =>
    t.addEventListener("click", () => {
        thumbs.forEach((el) => el.classList.remove("active"))
        t.classList.add("active")
        galleryMain.src = t.dataset.src
    })
)
const target = new Date("2025-12-20T09:00:00+07:00").getTime()
setInterval(() => {
    const now = new Date().getTime()
    const diff = target - now
    const d = Math.floor(diff / (1000 * 60 * 60 * 24))
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const s = Math.floor((diff % (1000 * 60)) / 1000)
    document.getElementById("days").textContent = String(d).padStart(2, "0")
    document.getElementById("hours").textContent = String(h).padStart(2, "0")
    document.getElementById("minutes").textContent = String(m).padStart(2, "0")
    document.getElementById("seconds").textContent = String(s).padStart(2, "0")
}, 1000)
