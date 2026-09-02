const githubBaseUrl = "https://github.com/muhammedcanarica";

export const projects = {
  tr: [
    {
      title: "CamerBound",
      category: "Masaüstü Görüntü İşleme",
      description:
        "ENTRY ve EXIT kamera akışlarında plaka algılama, yerel OCR ve kayıt yönetimini birleştiren Windows masaüstü uygulaması. Kurulum paketiyle yayınlanan ilk kararlı sürüm; kamera kalibrasyonu, rol yönetimi ve yerel veri saklama akışlarını içeriyor.",
      techStack: ["Python", "PySide6", "OpenVINO", "PaddleOCR", "SQLite"],
      status: "v1.0.0 Yayında",
      featured: true,
      featuredLabel: "Öne Çıkan",
      priority: 2,
      links: [
        {
          label: "Windows için İndir",
          href: `${githubBaseUrl}/CamerBound/releases/latest/download/CamerBound_Setup.exe`,
        },
        { label: "Kodu İncele", href: `${githubBaseUrl}/CamerBound` },
      ],
    },
    {
      title: "NetScope Network Monitor",
      category: "Full-Stack Ağ İzleme",
      description:
        "ICMP ve SNMP izleme, gerçek zamanlı SignalR güncellemeleri, olay ve bildirim akışları, LLDP topolojisi ve yapılandırma geçmişini tek bir responsive uygulamada birleştiren üreticiden bağımsız ağ operasyon projesi.",
      techStack: [".NET 10", "ASP.NET Core", "React", "TypeScript", "SignalR"],
      status: "Aktif Proje",
      featured: true,
      featuredLabel: "Öne Çıkan",
      priority: 1,
      links: [
        { label: "Kodu İncele", href: `${githubBaseUrl}/NetworkMonitor` },
      ],
    },
    {
      title: "DungeonWeaver",
      category: "Procedural Generation Paketi",
      description:
        "Aynı seed ile tekrar üretilebilir oda, graph, koridor, kapı ve encounter planları oluşturan Unity 6 paketi. Yeniden kullanılabilir Core katmanı ile oynanabilir örnek prototip birbirinden ayrılmış durumda.",
      techStack: ["Unity 6", "C#", "UPM", "Tilemap", "EditMode Tests"],
      status: "Unity Paketi",
      links: [
        { label: "Kodu İncele", href: `${githubBaseUrl}/dungeon-weaver` },
      ],
    },
    {
      title: "PipeMuzzle",
      category: "2D Mobil Bulmaca",
      description:
        "Bit maskeleri ve BFS tabanlı bağlantı kontrolü kullanan, veri odaklı Unity bulmaca prototipi. Üç oynanabilir bölüm, otomatik kamera uyumu, hamle sayacı ve bölüm ilerleme akışına sahip.",
      techStack: ["Unity 6", "C#", "ScriptableObject", "BFS", "Unity UI"],
      status: "Oynanabilir Prototip",
      links: [
        { label: "Kodu İncele", href: `${githubBaseUrl}/PipeMuzzle` },
      ],
    },
    {
      title: "AirTune",
      category: "Etkileşimli Web Deneyi",
      description:
        "Webcam ile gerçek zamanlı el takibini tarayıcı tabanlı ses üretimiyle birleştiren deneysel müzik arayüzü. MediaPipe hareket verilerini Web Audio API kontrollerine dönüştürüyor.",
      techStack: ["React", "TypeScript", "MediaPipe", "Web Audio API", "Vite"],
      status: "Canlı Demo",
      links: [
        { label: "Demoyu Aç", href: "https://muhammedcanarica.github.io/airtune/" },
        { label: "Kodu İncele", href: `${githubBaseUrl}/airtune` },
      ],
    },
    {
      title: "Wimmia",
      category: "2D Gameplay Prototipi",
      description:
        "Akıcı hareket, savaş, düşman davranışları, kamera geçişleri, çevre mekanikleri ve boss karşılaşmaları üzerine geliştirilen modüler Unity gameplay prototipi.",
      techStack: ["Unity 6", "C#", "Cinemachine", "2D Physics", "Input System"],
      status: "Aktif Prototip",
      links: [
        { label: "Kodu İncele", href: `${githubBaseUrl}/Wimmia` },
      ],
    },
  ],
  en: [
    {
      title: "CamerBound",
      category: "Desktop Computer Vision",
      description:
        "A Windows desktop application combining plate detection, local OCR, and record management across ENTRY and EXIT camera feeds. Its first stable release includes camera calibration, role management, and local data storage workflows.",
      techStack: ["Python", "PySide6", "OpenVINO", "PaddleOCR", "SQLite"],
      status: "v1.0.0 Released",
      featured: true,
      featuredLabel: "Featured",
      priority: 2,
      links: [
        {
          label: "Download for Windows",
          href: `${githubBaseUrl}/CamerBound/releases/latest/download/CamerBound_Setup.exe`,
        },
        { label: "View Code", href: `${githubBaseUrl}/CamerBound` },
      ],
    },
    {
      title: "NetScope Network Monitor",
      category: "Full-Stack Network Monitoring",
      description:
        "A vendor-neutral network operations project combining ICMP and SNMP monitoring, realtime SignalR updates, incident and notification workflows, LLDP topology, and configuration history in one responsive application.",
      techStack: [".NET 10", "ASP.NET Core", "React", "TypeScript", "SignalR"],
      status: "Active Project",
      featured: true,
      featuredLabel: "Featured",
      priority: 1,
      links: [
        { label: "View Code", href: `${githubBaseUrl}/NetworkMonitor` },
      ],
    },
    {
      title: "DungeonWeaver",
      category: "Procedural Generation Package",
      description:
        "A Unity 6 package that generates reproducible rooms, graphs, corridors, doors, and encounter plans from the same seed. Its reusable Core layer is kept separate from the playable sample prototype.",
      techStack: ["Unity 6", "C#", "UPM", "Tilemap", "EditMode Tests"],
      status: "Unity Package",
      links: [
        { label: "View Code", href: `${githubBaseUrl}/dungeon-weaver` },
      ],
    },
    {
      title: "PipeMuzzle",
      category: "2D Mobile Puzzle",
      description:
        "A data-driven Unity puzzle prototype using bit masks and BFS-based connectivity checks. It includes three playable levels, automatic camera fitting, a move counter, and level progression.",
      techStack: ["Unity 6", "C#", "ScriptableObject", "BFS", "Unity UI"],
      status: "Playable Prototype",
      links: [
        { label: "View Code", href: `${githubBaseUrl}/PipeMuzzle` },
      ],
    },
    {
      title: "AirTune",
      category: "Interactive Web Experiment",
      description:
        "An experimental music interface combining realtime webcam hand tracking with browser-based sound generation. MediaPipe movement data is mapped to Web Audio API controls.",
      techStack: ["React", "TypeScript", "MediaPipe", "Web Audio API", "Vite"],
      status: "Live Demo",
      links: [
        { label: "Open Demo", href: "https://muhammedcanarica.github.io/airtune/" },
        { label: "View Code", href: `${githubBaseUrl}/airtune` },
      ],
    },
    {
      title: "Wimmia",
      category: "2D Gameplay Prototype",
      description:
        "A modular Unity gameplay prototype focused on responsive movement, combat, enemy behavior, camera transitions, environmental mechanics, and boss encounters.",
      techStack: ["Unity 6", "C#", "Cinemachine", "2D Physics", "Input System"],
      status: "Active Prototype",
      links: [
        { label: "View Code", href: `${githubBaseUrl}/Wimmia` },
      ],
    },
  ],
};
