# Can Arıca Portfolio

> A bilingual personal portfolio for presenting game development, gameplay systems, web applications, and embedded projects.  
> Oyun geliştirme, gameplay sistemleri, web uygulamaları ve gömülü sistem projelerini sunan iki dilli kişisel portfolyo.

[Live Demo](https://muhammedcanarica.github.io/portfolio/) · [English](#english) · [Türkçe](#türkçe)

---

## English

### Overview

This repository contains my personal portfolio website. It was built to present my projects, technical focus, skills, and contact information in a clear and lightweight interface.

The website focuses mainly on game development and gameplay programming while also including web and embedded system projects.

### Main Sections

- Hero introduction
- Focus areas
- Project showcase
- Technical skills
- About section
- Contact links
- Turkish and English language support

### Features

- Bilingual Turkish and English content
- Responsive layout
- Reusable React components
- Project-focused structure
- Language switcher
- Dynamic page title and metadata
- Lightweight Vite build
- GitHub Pages deployment support

### Technologies

- React 18
- Vite 5
- JavaScript
- HTML
- CSS
- GitHub Pages

### Project Structure

```text
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── FocusAreas.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── data/
│   └── content.js
└── App.jsx
```

The content is separated from the main UI components. Turkish and English text is stored in a dedicated data file, while React components are responsible for presentation.

### Live Demo

[Open the portfolio](https://muhammedcanarica.github.io/portfolio/)

### Local Setup

```bash
git clone https://github.com/muhammedcanarica/portfolio.git
cd portfolio
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Design Goals

- Keep projects at the center of the experience
- Avoid unnecessary visual clutter
- Make the site easy to update
- Present technical work without turning the page into a wall of badges
- Support both Turkish and English visitors
- Maintain a clean and professional visual identity

### Updating Content

Most written content is stored in:

```text
src/data/content.js
```

Update both the `tr` and `en` objects when adding new sections, projects, skills, or contact text.

### Project Status

The portfolio is actively maintained. New projects, gameplay videos, screenshots, and improved project pages will be added over time.

### Planned Improvements

- Dedicated project detail pages
- Better project screenshots and GIF previews
- Downloadable CV
- Improved accessibility
- SEO and social preview metadata
- Contact form or email action
- Performance and mobile polish

---

## Türkçe

### Genel Bakış

Bu repo kişisel portfolyo web sitemi içerir. Projelerimi, teknik çalışma alanlarımı, yeteneklerimi ve iletişim bilgilerimi sade ve anlaşılır bir arayüzle sunmak için geliştirilmiştir.

Web sitesi ağırlıklı olarak oyun geliştirme ve gameplay programming çalışmalarına odaklanırken web ve gömülü sistem projelerine de yer verir.

### Ana Bölümler

- Giriş bölümü
- Çalışma alanları
- Proje vitrini
- Teknik yetenekler
- Hakkımda bölümü
- İletişim bağlantıları
- Türkçe ve İngilizce dil desteği

### Özellikler

- Türkçe ve İngilizce içerik
- Responsive tasarım
- Tekrar kullanılabilir React componentleri
- Proje odaklı sayfa yapısı
- Dil değiştirme sistemi
- Dinamik sayfa başlığı ve meta açıklaması
- Hafif Vite build yapısı
- GitHub Pages yayınlama desteği

### Kullanılan Teknolojiler

- React 18
- Vite 5
- JavaScript
- HTML
- CSS
- GitHub Pages

### Proje Yapısı

```text
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── FocusAreas.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── data/
│   └── content.js
└── App.jsx
```

Metin içeriği ana arayüz componentlerinden ayrılmıştır. Türkçe ve İngilizce içerikler ayrı bir veri dosyasında tutulurken React componentleri yalnızca sunumdan sorumludur.

### Canlı Demo

[Portfolyoyu aç](https://muhammedcanarica.github.io/portfolio/)

### Yerel Kurulum

```bash
git clone https://github.com/muhammedcanarica/portfolio.git
cd portfolio
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Tasarım Hedefleri

- Projeleri deneyimin merkezinde tutmak
- Gereksiz görsel kalabalıktan kaçınmak
- Siteyi kolay güncellenebilir yapmak
- Teknik çalışmaları rozet duvarına çevirmeden sunmak
- Türkçe ve İngilizce ziyaretçileri desteklemek
- Temiz ve profesyonel bir görsel kimlik oluşturmak

### İçeriği Güncelleme

Yazılı içeriğin büyük bölümü şu dosyada tutulmaktadır:

```text
src/data/content.js
```

Yeni bölüm, proje, yetenek veya iletişim metni eklerken hem `tr` hem de `en` nesneleri güncellenmelidir.

### Proje Durumu

Portfolyo aktif olarak güncellenmektedir. Zaman içinde yeni projeler, gameplay videoları, ekran görüntüleri ve daha ayrıntılı proje sayfaları eklenecektir.

### Planlanan Geliştirmeler

- Ayrı proje detay sayfaları
- Daha iyi proje ekran görüntüleri ve GIF ön izlemeleri
- İndirilebilir CV
- Erişilebilirlik geliştirmeleri
- SEO ve sosyal medya ön izleme ayarları
- İletişim formu veya e-posta aksiyonu
- Performans ve mobil kullanım iyileştirmeleri
