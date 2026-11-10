const projects = {
    axis: {
        name: "AXIS VPN",
        category: "Коммерческий Telegram-сервис",
        role: "Разработка продукта, backend и инфраструктуры",
        description: "Сервис для продажи и управления VPN-подписками. Я разрабатывал Telegram-бота и backend: связывал оплату, учёт подписок, выдачу доступов и серверную часть. За время работы через сервис прошло более 850 успешных платежей. Позже проект был передан новому владельцу.",
        points: [
            "Telegram-бот на aiogram 3: регистрация, тарифы, профиль и управление подпиской.",
            "Автоматизация оплаты, выдачи доступа, продления и уведомлений.",
            "Интеграция backend с VPN-инфраструктурой и серверными узлами.",
            "Развёртывание и сопровождение Linux-сервисов, Docker Compose и Nginx."
        ],
        stack: ["Python", "aiogram 3", "asyncio", "PostgreSQL", "FastAPI", "Docker Compose", "Linux", "Xray", "VLESS Reality"],
        links: [
            ["Telegram-бот", "https://t.me/axis_vpn_bot"],
            ["Telegram-канал", "https://t.me/AXIS_VPN"]
        ]
    },
    vpoiske: {
        name: "ВПОИСКЕ",
        category: "Поисково-спасательная платформа",
        role: "Backend-разработка и архитектура серверной части",
        description: "Платформа для координации поисково-спасательных операций. Система связывает координаторов и полевые группы, помогает работать с поисковыми зонами и геопозицией участников, а изменения передаёт в реальном времени.",
        points: [
            "Асинхронный backend и REST API на FastAPI с SQLAlchemy 2.",
            "PostgreSQL и PostGIS для геоданных, поисковых зон и координат.",
            "WebSocket-каналы, кеширование геопозиций в Redis и синхронизация.",
            "Обработка GPS-треков и развёртывание через Docker Compose."
        ],
        stack: ["Python", "FastAPI", "SQLAlchemy 2", "PostgreSQL", "PostGIS", "Redis", "WebSocket", "Docker Compose", "Caddy", "Sentry", "Prometheus"],
        links: [["Связаться по проекту", "https://t.me/Menvswild"]]
    },
    wraith: {
        name: "WraithControl",
        category: "Telegram Business automation",
        role: "Backend-разработка и интеграции Telegram",
        description: "Собственный инструмент для управления Telegram Business и автоматизации диалогов. В проекте есть обработка событий сообщений, интерактивный интерфейс, настройки чатов и отдельные фоновые процессы.",
        points: [
            "Обработка Telegram Business Connections и событий сообщений.",
            "Inline-меню для управления настройками и режимами работы.",
            "Фоновые процессы для наблюдения за состоянием и активностью.",
            "SQLite для постоянного хранения настроек, systemd для запуска сервисов."
        ],
        stack: ["Python", "aiogram", "Telethon", "aiohttp", "SQLite", "asyncio", "systemd"],
        links: [
            ["Telegram-бот", "https://t.me/WraithCtrlBot"],
            ["Написать мне", "https://t.me/Menvswild"]
        ]
    },
    northstar: {
        name: "Northstar Agent 2.0",
        category: "Локальный AI-агент",
        role: "Архитектура и разработка",
        description: "Проект локального помощника для работы с приложениями, файлами и браузером. Основная идея — модульные инструменты, контролируемое выполнение действий и понятная история операций.",
        points: [
            "Локальный backend на FastAPI и автоматизация браузера через Playwright.",
            "Модульная система инструментов для работы с приложениями и файлами.",
            "Подтверждение рискованных действий перед выполнением.",
            "Журналирование изменений и механизмы отката."
        ],
        stack: ["Python", "FastAPI", "Playwright", "Linux", "Windows", "AI APIs"],
        links: [["Связаться по проекту", "https://t.me/Menvswild"]]
    },
    "job-agent": {
        name: "Job-Agent",
        category: "Автоматизация поиска работы",
        role: "Разработка автоматизации и интеграций",
        description: "Инструмент для поиска вакансий и подготовки персональных откликов. Собирает результаты по заданным критериям, помогает оценить соответствие требованиям и готовит черновики писем.",
        points: [
            "Поиск вакансий по нескольким направлениям и фильтрация условий.",
            "Оценка соответствия вакансии профилю.",
            "Playwright для работы с браузером и подготовки форм.",
            "История обработанных вакансий и очередь подготовленных откликов."
        ],
        stack: ["Python", "Playwright", "SQLite", "LLM API", "Browser Automation"],
        links: [["Связаться по проекту", "https://t.me/Menvswild"]]
    },
    cinema: {
        name: "CinemaBot",
        category: "Telegram · Media",
        role: "Разработка Telegram-бота и backend-логики",
        description: "Бот для работы с каталогом фильмов и пользовательскими сценариями. В проекте есть поиск, голосования и интеграции авторизации.",
        points: [
            "Каталог фильмов и взаимодействие с ним через Telegram.",
            "Голосования и интерактивные сценарии для пользователей.",
            "Интеграция Google OAuth.",
            "Дополнительные проверки против злоупотреблений."
        ],
        stack: ["Python", "Telegram Bot API", "asyncio", "Google OAuth", "SQLite"],
        links: [["Запросить ссылку", "https://t.me/Menvswild"]]
    },
    "lead-bot": {
        name: "Telegram Lead Bot",
        category: "Открытый GitHub-проект",
        role: "Автор проекта",
        description: "Небольшой бот для приёма заявок. Пользователь отвечает на несколько вопросов, после чего бот отправляет собранную информацию менеджеру.",
        points: [
            "Пошаговая анкета: имя, телефон и суть обращения.",
            "Приём телефона через Telegram-кнопку или ручной ввод.",
            "Передача заявки в чат администратора.",
            "Настройка через переменные окружения."
        ],
        stack: ["Python", "aiogram 3", "Telegram Bot API", "asyncio"],
        links: [["GitHub", "https://github.com/MenVsWild1/tg-lead-bot"]]
    },
    "web-parser": {
        name: "Web Parser → Excel",
        category: "Открытый GitHub-проект",
        role: "Автор проекта",
        description: "Демонстрационный парсер каталога: загружает страницы, извлекает данные и сохраняет их в оформленный Excel-файл.",
        points: [
            "Загрузка страниц через requests и разбор HTML с BeautifulSoup.",
            "Извлечение названия, цены, наличия, рейтинга и ссылки.",
            "Экспорт в XLSX через openpyxl с настройкой ширины колонок и закреплением заголовка."
        ],
        stack: ["Python", "requests", "BeautifulSoup", "openpyxl", "Excel"],
        links: [["GitHub", "https://github.com/MenVsWild1/web-parser-to-excel"]]
    },
    "dpi-lab": {
        name: "Network / DPI Lab",
        category: "Сетевой лабораторный проект",
        role: "Настройка, тестирование и документирование",
        description: "Лабораторный стенд для проверки сетевых конфигураций и клиентских подключений. Важная часть работы — воспроизводимое развёртывание и документирование результатов.",
        points: [
            "Разделение серверной и клиентской конфигурации.",
            "Автоматизация установки и проверок состояния сервисов.",
            "Проверка реальных клиентских подключений.",
            "Документирование архитектуры и результатов тестирования."
        ],
        stack: ["Linux", "Xray", "VLESS", "Reality", "XHTTP", "systemd", "Bash"],
        links: [["GitHub", "https://github.com/MenVsWild1/dpi-test-submit"]]
    }
};

const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");
let previousFocus = null;

function openProject(id, trigger) {
    const project = projects[id];
    if (!project || !modal || !modalContent) return;
    previousFocus = trigger || document.activeElement;

    const points = project.points.map(point => "<li>" + point + "</li>").join("");
    const stack = project.stack.map(item => "<span>" + item + "</span>").join("");
    const links = project.links.map(([label, url]) =>
        '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + label + ' ↗</a>'
    ).join("");

    modalContent.innerHTML =
        '<div class="modal-category">' + project.category + '</div>' +
        '<h2 class="modal-title" id="modal-title">' + project.name + '</h2>' +
        '<p class="modal-description">' + project.description + '</p>' +
        '<p class="modal-role">' + project.role + '</p>' +
        '<h3 class="modal-subheading">Что сделано</h3>' +
        '<ul class="modal-points">' + points + '</ul>' +
        '<h3 class="modal-subheading">Технологии</h3>' +
        '<div class="modal-stack">' + stack + '</div>' +
        '<div class="modal-links">' + links + '</div>';

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").focus();
}

function closeProject() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (previousFocus && previousFocus.focus) previousFocus.focus();
}

function initProjects() {
    document.querySelectorAll("[data-project]").forEach(button => {
        button.addEventListener("click", () => openProject(button.dataset.project, button));
    });
    modal?.querySelectorAll("[data-modal-close]").forEach(element => element.addEventListener("click", closeProject));
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal?.classList.contains("is-open")) closeProject();
    });
}

function updateClock() {
    const now = new Date();
    const time = document.getElementById("current-time");
    const date = document.getElementById("current-date");
    const year = document.getElementById("copyright-year");
    if (time) time.textContent = [now.getHours(), now.getMinutes()].map(value => String(value).padStart(2, "0")).join(":");
    if (date) date.textContent = now.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
    if (year) year.textContent = String(now.getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
    initProjects();
    updateClock();
    window.setInterval(updateClock, 30000);
});