// data.js
const WEDDING_DATA = {
    //music
    music: {
        source: "msc/sotya-restianade.mp3", // Pastikan path ini benar!
        type: "audio/mpeg"
    },
    // 1. Informasi Dasar & Meta Data
    meta: {
        title: "Undangan Pernikahan — Ines & Andri",
        description:
            "Doa dan restu Anda sangat berarti. Lihat detail acara, galeri, dan konfirmasi hadir di undangan digital ini.",
        ogImage:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1400&q=80"
    },

    // 2. Data Cover dan Tamu
    cover: {
        background: "img/and1.jpeg", // Path untuk background cover
        guestDefaultName: "Bapak/Ibu/Saudara/i" // Nama tamu default
    },

    // 3. Data Mempelai
    couple: {
        bride: {
            name: "Ines Ardita Novianti",
            parents: "Putri dari Bapak Eko Pariyono & Ibu Sumiyati",
            address:
                "Dsn. Paldaplang Rt 02 Rw 07 Ds. Kauman Kec. Widodaren Kab. Ngawi",
            image: "img/ines.png"
        },
        groom: {
            name: "Andri Sussanto (Andik)",
            parents: "Putra dari Bapak Sutrisno & Ibu Suparti",
            address: "Sidorejo, Sidolaju 08/04, Widodaren, Ngawi",
            image: "img/andik.png"
        },
        jointName: "Ines & Andri",
        heroImage: "img/and2.jpeg" // Gambar di bagian hero (page 1)
    },

    // 4. Ayat dan Quotes
    quote: {
        text: "“Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).”",
        source: "(QS. Az Zariyat: 49)"
    },

    // 5. Acara dan Hitung Mundur
    events: {
        targetDate: "2025-12-04T00:00:00", // Waktu & Tanggal Target (ISO Format)
        list: [
            {
                type: "Akad Nikah",
                date: "04",
                dayString: "Sabtu, Desember 2025",
                timeString: "07:00 WIB",
                location:
                    "Dsn. Paldaplang Rt 02 Rw 07 Ds. Kauman Kec. Widodaren Kab. Ngawi",
                mapLink:
                    "https://google.com/maps?q=-7.4044464,111.2023701&z=17&hl=id"
            },
            {
                type: "Resepsi",
                date: "04",
                dayString: "Sabtu, Desember 2025",
                timeString: "10:00 WIB",
                location:
                    "Dsn. Paldaplang Rt 02 Rw 07 Ds. Kauman Kec. Widodaren Kab. Ngawi",
                mapLink:
                    "https://google.com/maps?q=-7.4044464,111.2023701&z=17&hl=id"
            }
        ]
    },

    // 6. Galeri
    gallery: [
        "img/and3.jpeg",
        "img/and4.jpeg",
        "img/and7.jpeg",
        "img/and1.jpeg"
    ],

    // 7. Hadiah/Gift
    gift: {
        address:
            "Dsn. Paldaplang Rt 02 Rw 07 Ds. Kauman Kec. Widodaren Kab. Ngawi",
        bankDetails: [
            {
                bankName: "BRI",
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Logo_Bank_Rakyat_Indonesia.svg",
                accountNumber: "375901054298536",
                accountName: "Ines Ardita Novianti"
            }
            // {
            //     bankName: "Mandiri",
            //     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/640px-Bank_Mandiri_logo_2016.svg.png",
            //     accountNumber: "1310012345678",
            //     accountName: "Andi Saputra"
            // }
        ]
    }
}
