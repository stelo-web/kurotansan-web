// ---------------------------------------------------------------------------
// DATA EDITING ZONE START
// ---------------------------------------------------------------------------

const SYSTEM_CONFIG = {
    bootMessage: "System online. Public endpoint ready.",
    noLogsMessage: "表示可能なログは存在しません。",
    invalidResourceMessage: "無効なリソースを検知。当該エントリは無視されました。",
};

// YouTube Video ID helper to generate thumbnail automatically
const getThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
const getUrl = (videoId) => `https://www.youtube.com/watch?v=${videoId}`;

const LATEST_VIDEOS = [
    // Edit here. Max 10 items expected by UI logic.
    {
        id: "v1",
        title: "【記念配信】チャンネル登録者数20万人突破しました！",
        thumbnail: getThumb("L4o1_jsqxLk"),
        url: getUrl("L4o1_jsqxLk"),
    },
    {
        id: "v2",
        title: "チーターが集めた物資を強制的にぐちゃぐちゃにしてみた【RUST 実況】",
        thumbnail: getThumb("L-lgcLdUwmo"),
        url: getUrl("L-lgcLdUwmo"),
    },
    {
        id: "v3",
        title: "チーターにホラー体験させてみた【RUST 実況】",
        thumbnail: getThumb("g_mZR8-kbXc"),
        url: getUrl("g_mZR8-kbXc"),
    },
];

const SERIES_INDEX = [
    {
        title: "POPULAR VIDEOS",
        description: "人気の動画",
        links: [
            { label: "No.1", url: "https://www.youtube.com/watch?v=D277UbdpDzg" },
            { label: "No.2", url: "https://www.youtube.com/watch?v=l7JaQECftr0" },
            { label: "No.3", url: "https://www.youtube.com/watch?v=aA2HFcBaRRo" },
        ],
    },
    {
        title: "MADTOWN CHRONICLES",
        description: "狂気の街『MADTOWN』での混沌としたサバイバル記録",
        links: [
            { label: "Episode 01", url: "https://www.youtube.com/watch?v=DC7FkE4_Nmw" },
            { label: "Episode 02", url: "https://www.youtube.com/watch?v=Uz8yqACN0GU" },
            { label: "Episode 03", url: "https://www.youtube.com/watch?v=l_1i3yqWjyU" },
        ],
    },
];

const EXTERNAL_LINKS = [
    { label: "YouTube Channel", url: "https://www.youtube.com/c/kurotansan", id: "yt" },
    { label: "X (Twitter)", url: "https://x.com/kurotansan_", id: "x" },
];

const COLLABORATORS = [
    {
        name: "わらぶい",
        id: "WARABUI",
        description: "RUST等のサバイバルゲームにおける主要な協力者。戦闘力とコミカルな実況が特徴。",
        role: "ALLIED_OPERATIVE",
        youtube: "https://www.youtube.com/channel/UCfS-PXddM1kY3PA-UptVnlQ",
        x: "https://x.com/_WARABUI_",
    },
    {
        name: "AlphaAzur",
        id: "ALPHA_AZUR",
        description: "RUST等でのコラボレーション実績多数。高度なプレイスキルを持つ実況者。",
        role: "STRATEGIC_PARTNER",
        youtube: "https://www.youtube.com/@AlphaAzur",
        x: null,
    },
    {
        name: "せしりあ",
        id: "CECILIA_OKAYU",
        description: "RUSTコラボ等で共演。独特の空気感を持つ実況者。",
        role: "ASSOCIATE",
        youtube: "https://www.youtube.com/@せしりあCh",
        x: null,
    },
    {
        name: "ふらんしすこ",
        id: "FRANCISCA",
        description: "VCR等での活動を共にする武器商人・実況者。",
        role: "EQUIPMENT_PROVIDER",
        youtube: null,
        x: null,
    },
];

// ---------------------------------------------------------------------------
// DATA EDITING ZONE END
// ---------------------------------------------------------------------------
