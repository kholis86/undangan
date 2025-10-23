// loadData.js
document.addEventListener("DOMContentLoaded", () => {
    // Pastikan data telah dimuat
    if (typeof WEDDING_DATA === "undefined") {
        console.error(
            "WEDDING_DATA is not defined. Make sure data.js is loaded correctly."
        )
        return
    }

    const DATA = WEDDING_DATA

    // --- UTILITY FUNCTIONS ---

    // Fungsi untuk mengisi sumber musik
    function fillMusicSource(data) {
        const audioElement = document.getElementById("bgMusic")
        if (!audioElement || !data.music || !data.music.source) return

        // Buat elemen <source> baru
        const sourceElement = document.createElement("source")
        sourceElement.src = data.music.source
        sourceElement.type = data.music.type

        // Bersihkan konten lama (jika ada) dan tambahkan source baru
        // Kita harus memastikan tidak ada source yang tersisa dari html sebelumnya
        while (audioElement.firstChild) {
            audioElement.removeChild(audioElement.firstChild)
        }
        audioElement.appendChild(sourceElement)

        // Muat ulang elemen audio untuk mengenali source baru
        audioElement.load()
    }

    // 1. Fungsi untuk mendapatkan nama tamu dari URL
    function getGuestNameFromUrl() {
        const urlParams = new URLSearchParams(window.location.search)
        let name = urlParams.get("to") || urlParams.get("kepada")

        if (name) {
            name = name.replace(/\+/g, " ")
        }

        return name || DATA.cover.guestDefaultName
    }

    // 2. Fungsi untuk menampilkan waktu
    function updateCountdown() {
        const targetDate = new Date(DATA.events.targetDate).getTime()
        const now = new Date().getTime()
        const distance = targetDate - now

        if (distance < 0) {
            document.getElementById("days").textContent = "00"
            document.getElementById("hours").textContent = "00"
            document.getElementById("minutes").textContent = "00"
            document.getElementById("seconds").textContent = "00"
            return
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        // Format angka dengan leading zero
        document.getElementById("days").textContent = days
            .toString()
            .padStart(2, "0")
        document.getElementById("hours").textContent = hours
            .toString()
            .padStart(2, "0")
        document.getElementById("minutes").textContent = minutes
            .toString()
            .padStart(2, "0")
        document.getElementById("seconds").textContent = seconds
            .toString()
            .padStart(2, "0")
    }

    // --- DYNAMIC CONTENT FILLERS ---

    // 1. Mengisi Meta, Cover, dan Hero Section
    function fillStaticContent() {
        // Meta Data
        document.getElementById("metaTitle").textContent = DATA.meta.title
        document.getElementById("metaDescription").content =
            DATA.meta.description
        document.getElementById("ogTitle").content = DATA.meta.title
        document.getElementById("ogDescription").content = DATA.meta.description
        document.getElementById("ogImage").content = DATA.meta.ogImage

        // Cover Page
        const coverDiv = document.getElementById("cover")
        document.getElementById("coverNames").textContent =
            DATA.couple.jointName
        document.getElementById("guestName").textContent = getGuestNameFromUrl()
        if (coverDiv && DATA.cover.background) {
            coverDiv.style.backgroundImage = `url('${DATA.cover.background}')`
        }

        // Hero Section
        document.getElementById("heroNames").textContent = DATA.couple.jointName
        document.getElementById("quoteText").textContent = DATA.quote.text
        document.getElementById("quoteSource").textContent = DATA.quote.source
        document.getElementById("heroImageContainer").innerHTML = `
            <img src="${DATA.couple.heroImage}" alt="Foto pasangan" />
        `

        // Gift Address
        document.getElementById("giftAddressText").innerHTML = `
            Alamat Rumah :
            <span> ${DATA.gift.address} </span>
        `
    }

    // 2. Mengisi Card Mempelai
    function createPersonCard(person, containerId) {
        const container = document.getElementById(containerId)
        if (!container) return

        // Ambil inisial untuk alt text
        const initial = person.name.split(" ")[0]

        container.innerHTML = `
            <div class="oval">
                <img src="${person.image}" alt="Mempelai ${initial}" />
            </div>
            <h3>${person.name}</h3>
            <p>${person.parents}</p>
            <p>${person.address}</p>
            `
    }

    // 3. Mengisi Detail Acara (Akad & Resepsi)
    function fillEventCards() {
        const container = document.getElementById("eventCardsContainer")
        if (!container) return

        let htmlContent = ""
        DATA.events.list.forEach((event) => {
            htmlContent += `
                <div class="event-card">
                    <h3>${event.type}</h3>
                    <hr />
                    <p class="date">${event.date}</p>
                    <p class="day">${event.dayString}</p>
                    <p class="day">${event.timeString}</p>
                    <p class="location">${event.location}</p>
                    <a href="${event.mapLink}" target="_blank" class="map-btn">📍 Lihat Peta</a>
                </div>
            `
        })
        container.innerHTML = htmlContent
    }

    // 4. Mengisi Detail Bank Transfer
    function fillBankCards() {
        const container = document.getElementById("bankCardsContainer")
        if (!container) return

        let htmlContent = ""
        DATA.gift.bankDetails.forEach((bank) => {
            htmlContent += `
                <div class="bank-card">
                    <img src="${bank.logo}" alt="Logo ${bank.bankName}" />
                    <p class="title">${bank.accountNumber}</p>
                    <p class="title">
                        A/n. <span>${bank.accountName}</span>
                    </p>
                    <button class="copy-btn" data-text="${bank.accountNumber}">Salin</button>
                </div>
            `
        })
        container.innerHTML = htmlContent

        // Menambahkan fungsionalitas tombol Salin
        document.querySelectorAll(".copy-btn").forEach((button) => {
            button.addEventListener("click", (e) => {
                const textToCopy = e.target.getAttribute("data-text")
                navigator.clipboard
                    .writeText(textToCopy)
                    .then(() => {
                        e.target.textContent = "Tersalin!"
                        setTimeout(() => {
                            e.target.textContent = "Salin"
                        }, 2000)
                    })
                    .catch((err) => {
                        console.error("Gagal menyalin: ", err)
                    })
            })
        })
    }

    // 5. Mengisi Galeri dan Thumbnail
    function fillGallery() {
        const mainGallery = document.getElementById("galleryMain")
        const thumbContainer = document.getElementById("thumbs")
        if (!mainGallery || !thumbContainer || DATA.gallery.length === 0) return

        // Set gambar utama pertama
        const initialImage = DATA.gallery[0]
        mainGallery.innerHTML = `<img id="mainGalleryImage" src="${initialImage}" alt="Memories" />`

        // Buat thumbnail
        thumbContainer.innerHTML = ""
        DATA.gallery.forEach((src, index) => {
            const activeClass = index === 0 ? " active" : ""
            const thumbDiv = document.createElement("div")
            thumbDiv.className = `thumb${activeClass}`
            thumbDiv.setAttribute("data-src", src)
            thumbDiv.innerHTML = `<img src="${src}" />`
            thumbContainer.appendChild(thumbDiv)
        })

        // Tambahkan fungsionalitas klik pada thumbnail
        document.querySelectorAll(".thumb").forEach((thumb) => {
            thumb.addEventListener("click", () => {
                const newSrc = thumb.getAttribute("data-src")
                document.getElementById("mainGalleryImage").src = newSrc

                // Update active class
                document
                    .querySelectorAll(".thumb")
                    .forEach((t) => t.classList.remove("active"))
                thumb.classList.add("active")
            })
        })
    }

    // --- MUSIC & COVER HANDLER (Dari kode asli Anda) ---
    const bgMusic = document.getElementById("bgMusic")
    const musicBtn = document.getElementById("musicBtn")
    const openInvite = document.getElementById("openInvite")
    const cover = document.getElementById("cover")

    let isPlaying = false

    // Fungsi untuk memutar/menghentikan musik
    function toggleMusic() {
        if (isPlaying) {
            bgMusic.pause()
            musicBtn.textContent = "▶️"
            musicBtn.classList.remove("playing")
            isPlaying = false
        } else {
            bgMusic
                .play()
                .then(() => {
                    musicBtn.textContent = "⏸️"
                    musicBtn.classList.add("playing")
                    isPlaying = true
                })
                .catch((error) => {
                    console.log(
                        "Autoplay blocked. User needs to interact first.",
                        error
                    )
                    // Biarkan tombol tetap di 'Play' jika gagal autoplay
                })
        }
    }

    // Handler Buka Undangan
    openInvite.addEventListener("click", () => {
        cover.style.transform = "translateY(-100%)"
        cover.style.opacity = "0"
        cover.style.visibility = "hidden"
        document.body.style.overflow = "auto"

        // Mulai musik setelah interaksi
        bgMusic
            .play()
            .then(() => {
                musicBtn.textContent = "⏸️"
                musicBtn.classList.add("playing")
                isPlaying = true
            })
            .catch((e) => {
                // Musik gagal play (user belum interaksi audio)
            })
    })

    // Handler tombol musik
    musicBtn.addEventListener("click", toggleMusic)

    // --- MAIN INITIALIZATION ---
    fillMusicSource(DATA)
    fillStaticContent()
    createPersonCard(DATA.couple.bride, "brideCard")
    createPersonCard(DATA.couple.groom, "groomCard")
    fillEventCards()
    fillBankCards()
    fillGallery()

    // Inisialisasi Hitung Mundur
    updateCountdown()
    setInterval(updateCountdown, 1000)

    // Sembunyikan scrollbar awal
    document.body.style.overflow = "hidden"
})
