const githubBaseUrl = "https://github.com/muhammedcanarica";
const asset = (name) => `${import.meta.env.BASE_URL}assets/projects/${name}`;

const shared = {
  netscope: {
    id: "netscope",
    priority: 1,
    title: "NetScope",
    techStack: [".NET 10", "React", "SNMP", "SignalR"],
    links: [{ href: `${githubBaseUrl}/NetworkMonitor` }],
  },
  camerbound: {
    id: "camerbound",
    priority: 2,
    title: "CamerBound",
    techStack: ["Python", "PySide6", "OpenVINO", "PaddleOCR", "SQLite"],
    image: {
      src: asset("camerbound-plate-recognition.png"),
      width: 1536,
      height: 1024,
    },
    links: [
      { href: `${githubBaseUrl}/CamerBound/releases/latest/download/CamerBound_Setup.exe`, kind: "download" },
      { href: `${githubBaseUrl}/CamerBound` },
    ],
  },
  dungeonweaver: {
    id: "dungeonweaver",
    priority: 3,
    title: "DungeonWeaver",
    techStack: ["Unity 6", "C#", "UPM", "Tilemap"],
    image: {
      src: asset("dungeonweaver-locked-room.png"),
      width: 915,
      height: 436,
    },
    links: [{ href: `${githubBaseUrl}/dungeon-weaver` }],
  },
  pipemuzzle: {
    id: "pipemuzzle",
    priority: 4,
    title: "PipeMuzzle",
    techStack: ["Unity 6", "C#", "ScriptableObject", "BFS"],
    tiles: [
      asset("pipemuzzle-corner.png"),
      asset("pipemuzzle-threeway.png"),
      asset("pipemuzzle-straight.png"),
    ],
    links: [{ href: `${githubBaseUrl}/PipeMuzzle` }],
  },
  airtune: {
    id: "airtune",
    priority: 5,
    title: "AirTune",
    techStack: ["React", "TypeScript", "MediaPipe", "Web Audio API"],
    links: [
      { href: "https://muhammedcanarica.github.io/airtune/", kind: "demo" },
      { href: `${githubBaseUrl}/airtune` },
    ],
  },
  wimmia: {
    id: "wimmia",
    priority: 6,
    title: "Wimmia",
    techStack: ["Unity 6", "C#", "Cinemachine", "Input System"],
    links: [{ href: `${githubBaseUrl}/Wimmia` }],
  },
};

const localizeLinks = (links, labels) =>
  links.map((link) => ({
    ...link,
    label: link.kind === "download"
      ? labels.download
      : link.kind === "demo"
        ? labels.demo
        : labels.code,
  }));

const makeProject = (base, copy, labels) => ({
  ...base,
  ...copy,
  links: localizeLinks(base.links, labels),
});

const trLinks = { code: "Projeyi incele", demo: "Canlı demoyu aç", download: "Windows için indir" };
const enLinks = { code: "View project", demo: "Open live demo", download: "Download for Windows" };

export const projects = {
  tr: [
    makeProject(shared.netscope, {
      category: "Ağ izleme sistemi",
      status: "Aktif proje",
      description: "ICMP ve SNMP izleme, gerçek zamanlı SignalR güncellemeleri, olay yönetimi, LLDP topolojisi ve yapılandırma geçmişini tek bir uygulamada birleştiren üreticiden bağımsız ağ operasyon projesi.",
      flow: ["ICMP / SNMP", ".NET API", "SignalR", "React arayüz"],
      flowLabel: "Canlı veri akışı",
    }, trLinks),
    makeProject(shared.camerbound, {
      category: "Masaüstü görüntü işleme",
      status: "v1.0.0 yayında",
      description: "ENTRY ve EXIT kamera akışlarında plaka algılama, yerel OCR ve kayıt yönetimini birleştiren Windows uygulaması. Kamera kalibrasyonu, rol yönetimi ve yerel veri saklama akışlarını içeriyor.",
      imageAlt: "CamerBound plaka tanıma projesi için kamera ve plaka görseli",
    }, trLinks),
    makeProject(shared.dungeonweaver, {
      category: "Procedural generation paketi",
      status: "Unity paketi",
      description: "Aynı seed ile tekrar üretilebilir oda, graph, koridor, kapı ve encounter planları oluşturan Unity 6 paketi. Yeniden kullanılabilir Core katmanı oynanabilir örnekten ayrı tutuluyor.",
      imageAlt: "DungeonWeaver tarafından üretilmiş kilitli odalı zindan düzeni",
    }, trLinks),
    makeProject(shared.pipemuzzle, {
      category: "2D mobil bulmaca",
      status: "Oynanabilir prototip",
      description: "Bit maskeleri ve BFS tabanlı bağlantı kontrolü kullanan veri odaklı Unity bulmacası. On iki bölüm, otomatik kamera uyumu, hamle sayacı ve bölüm ilerleme akışına sahip.",
      imageAlt: "PipeMuzzle oyununda kullanılan yeşil boru parçaları",
    }, trLinks),
    makeProject(shared.airtune, {
      category: "Etkileşimli web deneyi",
      status: "Canlı demo",
      description: "Webcam ile gerçek zamanlı el takibini tarayıcı tabanlı ses üretimiyle birleştiriyor. MediaPipe hareket verilerini Web Audio API kontrollerine dönüştürüyor.",
      signal: ["el hareketi", "ses perdesi", "ses seviyesi"],
    }, trLinks),
    makeProject(shared.wimmia, {
      category: "2D gameplay prototipi",
      status: "Aktif prototip",
      description: "Akıcı hareket, savaş, düşman davranışları, kamera geçişleri, çevre mekanikleri ve boss karşılaşmaları üzerine geliştirilen modüler Unity gameplay prototipi.",
    }, trLinks),
  ],
  en: [
    makeProject(shared.netscope, {
      category: "Network monitoring system",
      status: "Active project",
      description: "A vendor-neutral network operations project combining ICMP and SNMP monitoring, realtime SignalR updates, incident management, LLDP topology and configuration history in one application.",
      flow: ["ICMP / SNMP", ".NET API", "SignalR", "React interface"],
      flowLabel: "Live data flow",
    }, enLinks),
    makeProject(shared.camerbound, {
      category: "Desktop computer vision",
      status: "v1.0.0 released",
      description: "A Windows application combining plate detection, local OCR and record management across ENTRY and EXIT camera feeds, with camera calibration, role management and local data storage.",
      imageAlt: "Camera and license plate artwork for the CamerBound recognition project",
    }, enLinks),
    makeProject(shared.dungeonweaver, {
      category: "Procedural generation package",
      status: "Unity package",
      description: "A Unity 6 package that generates reproducible rooms, graphs, corridors, doors and encounter plans from the same seed. Its reusable Core layer stays separate from the playable sample.",
      imageAlt: "A locked-room dungeon layout generated by DungeonWeaver",
    }, enLinks),
    makeProject(shared.pipemuzzle, {
      category: "2D mobile puzzle",
      status: "Playable prototype",
      description: "A data-driven Unity puzzle using bit masks and BFS-based connectivity checks, with twelve levels, automatic camera fitting, a move counter and level progression.",
      imageAlt: "Green pipe pieces used in the PipeMuzzle game",
    }, enLinks),
    makeProject(shared.airtune, {
      category: "Interactive web experiment",
      status: "Live demo",
      description: "Combines realtime webcam hand tracking with browser-based sound generation, mapping MediaPipe movement data to Web Audio API controls.",
      signal: ["hand movement", "pitch", "volume"],
    }, enLinks),
    makeProject(shared.wimmia, {
      category: "2D gameplay prototype",
      status: "Active prototype",
      description: "A modular Unity gameplay prototype focused on responsive movement, combat, enemy behavior, camera transitions, environmental mechanics and boss encounters.",
    }, enLinks),
  ],
};
