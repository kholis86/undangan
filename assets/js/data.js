// data.js
const WEDDING_DATA = {
    // 1. Informasi Dasar & Meta Data
    meta: {
        title: "Undangan Pernikahan — Ines dan Andik",
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
            image: "img/and5.jpeg"
        },
        groom: {
            name: "Nama Mempelai Pria",
            parents: "Putra dari Bapak A & Ibu B",
            address:
                "Dsn. Paldaplang Rt 02 Rw 07 Ds. Kauman Kec. Widodaren Kab. Ngawi",
            image: "img/and8.jpeg"
        },
        jointName: "Ines dan Andik",
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
                date: "20",
                dayString: "Sabtu, Desember 2025",
                timeString: "09:00 - 11:00 WIB",
                location: "Masjid Al-Falah, Jakarta",
                mapLink:
                    "https://google.com/maps?q=-7.4044464,111.2023701&z=17&hl=id"
            },
            {
                type: "Resepsi",
                date: "20",
                dayString: "Sabtu, Desember 2025",
                dtimeString: "11:00 - 14:00 WIB",
                location: "Gedung Serba Guna, Jakarta",
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
