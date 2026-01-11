// ---------------------------------------------------------------------------
// KUROTANSAN OFFICIAL WEBSITE - Pure JavaScript Implementation
// ---------------------------------------------------------------------------

// SVG Icons (inline to avoid external dependencies)
const Icons = {
    terminal: `<svg class="icon-svg" viewBox="0 0 24 24"><polyline points="4,17 10,11 4,5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    externalLink: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
};

// Boot Screen Animation
function initBootScreen() {
    const bootScreen = document.getElementById('boot-screen');
    const bootText = document.getElementById('boot-text');
    const app = document.getElementById('app');

    const fullText = SYSTEM_CONFIG.bootMessage;
    let idx = 0;

    const interval = setInterval(() => {
        bootText.innerHTML = fullText.slice(0, idx) + '<span class="cursor">_</span>';
        idx++;

        if (idx > fullText.length) {
            clearInterval(interval);
            setTimeout(() => {
                bootScreen.classList.add('fade-out');
                setTimeout(() => {
                    bootScreen.classList.add('hidden');
                    app.style.opacity = '1';
                }, 300);
            }, 800);
        }
    }, 50);
}

// Render Latest Videos Section
function renderLatestVideos() {
    if (LATEST_VIDEOS.length === 0) {
        return `
            <section>
                <div class="section-header">
                    <h2 class="section-title">01. LATEST_LOGS</h2>
                    <p class="section-desc">
                        ${Icons.terminal}
                        以下は直近の公開ログです
                    </p>
                </div>
                <div class="sys-msg">${SYSTEM_CONFIG.noLogsMessage}</div>
            </section>
        `;
    }

    const videoCards = LATEST_VIDEOS.map(video => {
        const hasValidData = video.url && video.thumbnail;

        if (!hasValidData) {
            return `
                <a class="industrial-card">
                    <div class="card-thumb-container">
                        <div class="sys-msg sys-msg-error" style="height: 100%; display: flex; align-items: center; justify-content: center; border: none;">
                            ${SYSTEM_CONFIG.invalidResourceMessage}
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${video.title}</h3>
                    </div>
                </a>
            `;
        }

        return `
            <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="industrial-card">
                <div class="card-thumb-container">
                    <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                    <div class="log-id-badge">LOG_ID: ${video.id}</div>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${video.title}</h3>
                </div>
            </a>
        `;
    }).join('');

    return `
        <section>
            <div class="section-header">
                <h2 class="section-title">01. LATEST_LOGS</h2>
                <p class="section-desc">
                    ${Icons.terminal}
                    以下は直近の公開ログです
                </p>
            </div>
            <div class="industrial-grid">
                ${videoCards}
            </div>
        </section>
    `;
}

// Render Series Index Section
function renderSeriesIndex() {
    if (SERIES_INDEX.length === 0) {
        return `
            <section>
                <div class="section-header">
                    <h2 class="section-title">02. CLASSIFICATION_INDEX</h2>
                    <p class="section-desc" style="border-left: 2px solid #808080; padding-left: 8px;">
                        構造化された活動記録アーカイブ
                    </p>
                </div>
                <div class="sys-msg" style="margin: 0; border: none;">NO_DATA</div>
            </section>
        `;
    }

    const seriesRows = SERIES_INDEX.map(series => {
        const links = series.links.map(link =>
            `<a href="${link.url}" class="link-pill" target="_blank" rel="noopener noreferrer">${link.label}</a>`
        ).join('');

        return `
            <div class="series-row">
                <div class="series-title">${series.title}</div>
                <div class="series-desc">${series.description}</div>
                <div class="series-links">${links}</div>
            </div>
        `;
    }).join('');

    return `
        <section>
            <div class="section-header">
                <h2 class="section-title">02. CLASSIFICATION_INDEX</h2>
                <p class="section-desc" style="border-left: 2px solid #808080; padding-left: 8px;">
                    構造化された活動記録アーカイブ
                </p>
            </div>
            <div class="series-wrapper">
                ${seriesRows}
            </div>
        </section>
    `;
}

// Render External Links Section
function renderExternalLinks() {
    const linkButtons = EXTERNAL_LINKS.map(link => `
        <a href="${link.url}" class="external-link-btn" target="_blank" rel="noopener noreferrer">
            ${Icons.externalLink}
            <span class="link-label">${link.label}</span>
            <span class="link-arrow">&gt;&gt; CONNECT</span>
        </a>
    `).join('');

    return `
        <section>
            <div class="section-header">
                <h2 class="section-title">03. EXTERNAL_NODES</h2>
                <p class="section-desc">
                    現在有効な外部リンクを示します
                </p>
            </div>
            <div class="external-links-grid">
                ${linkButtons}
            </div>
        </section>
    `;
}

// Render Collaborators Section
function renderCollaborators() {
    const collabCards = COLLABORATORS.map(collab => {
        const youtubeLink = collab.youtube
            ? `<a href="${collab.youtube}" target="_blank" rel="noopener noreferrer" class="collab-link-btn">YouTube</a>`
            : '';
        const xLink = collab.x
            ? `<a href="${collab.x}" target="_blank" rel="noopener noreferrer" class="collab-link-btn">X</a>`
            : '';

        return `
            <div class="collaborator-card">
                <div class="collab-header">
                    <span class="collab-name">${collab.name}</span>
                    <span class="collab-role">${collab.role}</span>
                </div>
                <p class="collab-desc">${collab.description}</p>
                <div class="collab-footer">
                    <span>ID_TOKEN: ${collab.id}</span>
                    <div class="collab-links">
                        ${youtubeLink}
                        ${xLink}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <section>
            <div class="section-header">
                <h2 class="section-title">04. KNOWN_ASSOCIATES</h2>
                <p class="section-desc">
                    識別された関連人物および協力者リスト
                </p>
            </div>
            <div class="collaborators-grid">
                ${collabCards}
            </div>
        </section>
    `;
}

// Render all content
function renderApp() {
    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML =
        renderLatestVideos() +
        renderSeriesIndex() +
        renderExternalLinks() +
        renderCollaborators();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initBootScreen();
    renderApp();
});
