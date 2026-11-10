const projects = [
    {
        id: "vpoiske",
        name: "ВПОИСКЕ",
        category: "Search & Rescue Platform",
        icon: "fa-solid fa-location-crosshairs",
        accent: "#73c6ff",
        short: "Платформа для координации поисково-спасательных операций и работы полевых групп.",
        status: "Backend · Realtime",
        role: "Backend-разработка и архитектура серверной части",
        description: "Цифровая платформа, которая помогает координировать поисково-спасательные операции: объединяет координаторов и полевые группы, работает с геоданными и передаёт актуальное состояние участников в реальном времени.",
        points: [
            "Асинхронный backend и REST API на FastAPI с SQLAlchemy.",
            "PostgreSQL и PostGIS для геоданных, поисковых зон и координат.",
            "WebSocket-обновления, кеширование геопозиций в Redis и механизмы синхронизации.",
            "Обработка GPS-треков и инфраструктура для развёртывания и мониторинга."
        ],
        stack: ["Python", "FastAPI", "SQLAlchemy 2", "PostgreSQL", "PostGIS", "Redis", "WebSocket", "Docker Compose", "Caddy", "Sentry", "Prometheus"],
        links: [{ label: "Обсудить проект", url: "https://t.me/Menvswild", icon: "fa-brands fa-telegram" }]
    },
    {
        id: "axis",
        name: "AXIS VPN",
        category: "Commercial Telegram Service",
        icon: "fa-solid fa-shield-halved",
        accent: "#75d8c6",
        short: "VPN-сервис с Telegram-ботом, биллингом, подписками и распределённой серверной инфраструктурой.",
        status: "Разработан · передан",
        role: "Разработка продукта, backend и инфраструктуры",
        description: "Автоматизированный сервис управления VPN-подписками. Я разрабатывал Telegram-бота и серверную часть, связывал платежи, учёт подписок и VPN-инфраструктуру. Проект впоследствии был передан новому владельцу.",
        points: [
            "Telegram-бот на aiogram с регистрацией пользователей, тарифами и управлением подписками.",
            "Платёжные интеграции и автоматизация выдачи/продления доступа; более 850 успешных платежей за время работы.",
            "Интеграция backend с VPN-узлами и автоматизация серверных операций.",
            "Развёртывание и сопровождение сервисов на Linux с Docker Compose и Nginx."
        ],
        stack: ["Python", "aiogram 3", "asyncio", "PostgreSQL", "FastAPI", "Docker Compose", "Linux", "Xray", "VLESS Reality", "Remnawave"],
        links: [
            { label: "Telegram-бот", url: "https://t.me/axis_vpn_bot", icon: "fa-brands fa-telegram" },
            { label: "Telegram-канал", url: "https://t.me/AXIS_VPN", icon: "fa-brands fa-telegram" }
        ]
    },
    {
        id: "wraith",
        name: "WraithControl",
        category: "Telegram Business Automation",
        icon: "fa-solid fa-ghost",
        accent: "#a98cff",
        short: "Инструмент управления Telegram Business, автоматизации диалогов и обработки событий.",
        status: "Собственный инструмент",
        role: "Backend-разработка и интеграции Telegram",
        description: "Telegram-инструмент для управления Business-диалогами и автоматизации повседневных действий. Внутри — обработчики событий, интерактивные меню, постоянное хранение настроек и отдельные фоновые процессы.",
        points: [
            "Работа с Telegram Business Connections и обработка событий сообщений.",
            "Интерактивные inline-меню, настройки чатов, фильтры и инструменты модерации.",
            "Фоновые watcher-процессы и обработка событий без перегрузки основного обработчика.",
            "SQLite для хранения состояния, systemd для запуска и контроля служб."
        ],
        stack: ["Python", "aiogram", "Telethon", "aiohttp", "SQLite", "asyncio", "systemd"],
        links: [
            { label: "Открыть Telegram-бота", url: "https://t.me/WraithCtrlBot", icon: "fa-brands fa-telegram" },
            { label: "Связаться по проекту", url: "https://t.me/Menvswild", icon: "fa-brands fa-telegram" }
        ]
    },
    {
        id: "northstar",
        name: "Northstar Agent 2.0",
        category: "Local AI Agent",
        icon: "fa-solid fa-compass",
        accent: "#7daeff",
        short: "Локальный AI-агент для работы с системой, браузером и приложениями.",
        status: "В разработке",
        role: "Архитектура и разработка локального агента",
        description: "Проект локального помощника, который умеет работать с приложениями и браузером, выполнять задачи через отдельные инструменты и сохранять контекст. Архитектура строится вокруг контролируемого выполнения действий, а не бесконтрольного доступа к системе.",
        points: [
            "Локальный backend на FastAPI и браузерная автоматизация через Playwright.",
            "Модульная архитектура инструментов для работы с файлами, приложениями и сервисами.",
            "Подтверждение рискованных административных действий перед выполнением.",
            "Журналирование, контроль изменений и механизмы отката."
        ],
        stack: ["Python", "FastAPI", "Playwright", "Linux", "Windows", "Browser Automation", "AI APIs"],
        links: [{ label: "Обсудить проект", url: "https://t.me/Menvswild", icon: "fa-brands fa-telegram" }]
    },
    {
        id: "job-agent",
        name: "Job-Agent",
        category: "AI · Browser Automation",
        icon: "fa-solid fa-briefcase",
        accent: "#f0b76d",
        short: "Агент для поиска вакансий, оценки релевантности и подготовки откликов.",
        status: "В разработке",
        role: "Разработка автоматизации и интеграций",
        description: "Инструмент для системного поиска работы: собирает вакансии, применяет фильтры, сопоставляет требования с профилем и готовит персонализированные черновики откликов. Отправка остаётся под ручным контролем пользователя.",
        points: [
            "Поиск вакансий по нескольким направлениям и фильтрация по условиям.",
            "Оценка соответствия вакансии профилю с помощью языковой модели.",
            "Playwright для работы с браузером и подготовки форм отклика.",
            "Хранение состояния, очереди и истории обработанных вакансий."
        ],
        stack: ["Python", "Playwright", "SQLite", "Gemma", "RouterAPI", "Browser Automation"],
        links: [{ label: "Обсудить проект", url: "https://t.me/Menvswild", icon: "fa-brands fa-telegram" }]
    },
    {
        id: "cinema",
        name: "CinemaBot",
        category: "Telegram · Media",
        icon: "fa-solid fa-film",
        accent: "#e78eb7",
        short: "Telegram-бот с каталогом фильмов, подборками и пользовательскими механиками.",
        status: "Развёрнутый проект",
        role: "Разработка Telegram-бота и backend-логики",
        description: "Бот для работы с каталогом фильмов и пользовательским взаимодействием. В проекте реализованы механики выбора и голосования, интеграции авторизации и защита от недобросовестных действий.",
        points: [
            "Каталог и поиск фильмов с Telegram-интерфейсом.",
            "Пользовательские голосования и интерактивные сценарии.",
            "Интеграция Google OAuth и дополнительные проверки против злоупотреблений.",
            "Запуск фонового процесса и сопровождение на сервере."
        ],
        stack: ["Python", "Telegram Bot API", "asyncio", "Google OAuth", "SQLite"],
        links: [{ label: "Запросить ссылку на демо", url: "https://t.me/Menvswild", icon: "fa-brands fa-telegram" }]
    },
    {
        id: "lead-bot",
        name: "Telegram Lead Bot",
        category: "Open-source · Telegram",
        icon: "fa-brands fa-telegram",
        accent: "#58bde8",
        short: "Бот для приёма заявок: собирает данные клиента и отправляет обращение менеджеру.",
        status: "Публичный репозиторий",
        role: "Автор проекта",
        description: "Небольшой переиспользуемый Telegram-бот для сбора входящих заявок. Пользователь проходит короткую анкету, а собранные данные отправляются в чат администратора.",
        points: [
            "Пошаговый сценарий: имя, телефон и суть запроса.",
            "Приём номера телефона через Telegram-кнопку или ручной ввод.",
            "Уведомление менеджера и подтверждение клиенту.",
            "Простая конфигурация через переменные окружения."
        ],
        stack: ["Python", "aiogram 3", "Telegram Bot API", "asyncio"],
        links: [{ label: "GitHub", url: "https://github.com/MenVsWild1/tg-lead-bot", icon: "fa-brands fa-github" }]
    },
    {
        id: "web-parser",
        name: "Web Parser → Excel",
        category: "Open-source · Data",
        icon: "fa-solid fa-file-excel",
        accent: "#80d4a2",
        short: "Парсер каталога, который собирает данные с сайта и сохраняет оформленный Excel-файл.",
        status: "Публичный репозиторий",
        role: "Автор проекта",
        description: "Демонстрационный парсер на Python: проходит страницы каталога, извлекает карточки товаров и формирует Excel-файл с удобным форматированием.",
        points: [
            "Загрузка страниц через requests и разбор HTML с BeautifulSoup.",
            "Извлечение названия, цены, наличия, рейтинга и ссылки.",
            "Формирование .xlsx с помощью openpyxl: ширина колонок, шапка и закрепление строки.",
            "Структура кода разделяет загрузку, парсинг и экспорт."
        ],
        stack: ["Python", "requests", "BeautifulSoup", "openpyxl", "Excel"],
        links: [{ label: "GitHub", url: "https://github.com/MenVsWild1/web-parser-to-excel", icon: "fa-brands fa-github" }]
    },
    {
        id: "dpi-lab",
        name: "Network / DPI Lab",
        category: "Networking · Lab",
        icon: "fa-solid fa-network-wired",
        accent: "#8ca9f4",
        short: "Практический стенд для исследования сетевых протоколов и проверки конфигураций.",
        status: "Технический проект",
        role: "Настройка, тестирование и документирование",
        description: "Лабораторная работа с серверной и клиентской сетевой конфигурацией. Основной фокус — воспроизводимое развёртывание, проверка соединений и документирование результатов тестирования.",
        points: [
            "Разделение конфигурации серверной и клиентской частей.",
            "Автоматизация установки и проверок состояния сервисов.",
            "Проверка реального клиентского подключения и замеры.",
            "Документирование архитектуры и результатов тестирования."
        ],
        stack: ["Linux", "Xray", "VLESS", "Reality", "XHTTP", "systemd", "Bash"],
        links: [{ label: "GitHub", url: "https://github.com/MenVsWild1/dpi-test-submit", icon: "fa-brands fa-github" }]
    }
];

function updateClockAndDate() {
    const now = new Date();
    const timeEl = document.getElementById("current-time");
    const dateEl = document.getElementById("current-date");
    const year = String(now.getFullYear());

    if (timeEl) {
        timeEl.textContent = [now.getHours(), now.getMinutes(), now.getSeconds()]
            .map(value => String(value).padStart(2, "0")).join(":");
    }
    if (dateEl) {
        dateEl.textContent = now.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
    }
    ["current-year", "copyright-year"].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.textContent = year;
    });
}

function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.innerHTML = projects.map(project => {
        const tech = project.stack.slice(0, 3).join(" · ");
        return '<button class="project-card" type="button" data-project="' + project.id +
            '" style="--project-accent:' + project.accent + '" aria-label="Подробнее о проекте ' + project.name + '">' +
            '<span class="project-card-top">' +
                '<span class="project-icon"><i class="' + project.icon + '"></i></span>' +
                '<span class="project-type">' + project.category + '</span>' +
            '</span>' +
            '<span class="project-card-content">' +
                '<span class="project-card-title"><strong>' + project.name + '</strong></span>' +
                '<span class="project-short">' + project.short + '</span>' +
            '</span>' +
            '<span class="project-card-bottom">' +
                '<span class="project-status">' + project.status + '</span>' +
                '<span class="project-open">Подробнее <i class="fa-solid fa-arrow-up-right-from-square"></i></span>' +
            '</span>' +
            '<span class="sr-only">' + tech + '</span>' +
        '</button>';
    }).join("");

    if (typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(grid.querySelectorAll(".project-card"), {
            max: 3.5, speed: 500, glare: true, "max-glare": 0.12, scale: 1.015
        });
    }
}

const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");
let lastFocusedElement = null;

function openProject(projectId, trigger) {
    const project = projects.find(item => item.id === projectId);
    if (!project || !modal || !modalContent) return;

    lastFocusedElement = trigger || document.activeElement;
    const links = project.links.map(link =>
        '<a class="modal-link" href="' + link.url + '" target="_blank" rel="noopener noreferrer">' +
            '<i class="' + link.icon + '"></i>' + link.label +
            '<i class="fa-solid fa-arrow-up-right-from-square"></i></a>'
    ).join("");
    const points = project.points.map(point => "<li>" + point + "</li>").join("");
    const stack = project.stack.map(item => "<span>" + item + "</span>").join("");

    modalContent.innerHTML =
        '<div class="modal-heading" style="--project-accent:' + project.accent + '">' +
            '<div class="modal-icon"><i class="' + project.icon + '"></i></div>' +
            '<div><div class="modal-category">' + project.category + '</div><h2 id="modal-title">' + project.name + '</h2></div>' +
        '</div>' +
        '<p class="modal-description">' + project.description + '</p>' +
        '<div class="modal-role">' + project.role + ' <span aria-hidden="true">·</span> ' + project.status + '</div>' +
        '<h3 class="modal-subheading">Что реализовано</h3>' +
        '<ul class="modal-points" style="--project-accent:' + project.accent + '">' + points + '</ul>' +
        '<h3 class="modal-subheading">Технологический стек</h3>' +
        '<div class="modal-stack">' + stack + '</div>' +
        '<div class="modal-links">' + links + '</div>';

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    const closeButton = modal.querySelector(".modal-close");
    if (closeButton) closeButton.focus();
}

function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
}

function initModal() {
    const grid = document.getElementById("projects-grid");
    if (grid) {
        grid.addEventListener("click", event => {
            const card = event.target.closest("[data-project]");
            if (card) openProject(card.dataset.project, card);
        });
    }
    if (modal) {
        modal.querySelectorAll("[data-modal-close]").forEach(element => {
            element.addEventListener("click", closeProjectModal);
        });
        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && modal.classList.contains("is-open")) closeProjectModal();
        });
    }
}

function initParticles() {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    const pointer = { x: -1000, y: -1000 };

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = Math.min(90, Math.max(35, Math.floor((width * height) / 18000)));
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - .5) * .32,
            vy: (Math.random() - .5) * .32,
            r: Math.random() * 1.35 + .45
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            const dx = p.x - pointer.x;
            const dy = p.y - pointer.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 105 && distance > 0) {
                p.x += (dx / distance) * .25;
                p.y += (dy / distance) * .25;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(191, 222, 255, 0.62)";
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const lx = p.x - q.x;
                const ly = p.y - q.y;
                const d = Math.sqrt(lx * lx + ly * ly);
                if (d < 112) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = "rgba(139, 190, 238, " + ((1 - d / 112) * .13) + ")";
                    ctx.lineWidth = .6;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", event => {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
    }, { passive: true });
    window.addEventListener("pointerleave", () => {
        pointer.x = -1000;
        pointer.y = -1000;
    }, { passive: true });
    resize();
    draw();
}

document.addEventListener("DOMContentLoaded", () => {
    updateClockAndDate();
    window.setInterval(updateClockAndDate, 1000);
    renderProjects();
    initModal();
    if (typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(document.querySelectorAll(".meta-card, .hero, .info-card"), {
            max: 2.5, speed: 500, glare: true, "max-glare": 0.08
        });
    }
    initParticles();
});