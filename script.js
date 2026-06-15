// ===============================
// GOOGLE SHEETS PRICE LIST SETUP
// ===============================
// 1) Направи Google Sheet с колони:
// tab | tabLabel | category | name | description | price | visible
// 2) File -> Share -> Publish to web -> CSV
// 3) Постави CSV линка тук:
const SHEET_CSV_URL = ''; // пример: 'https://docs.google.com/spreadsheets/d/e/.../pub?output=csv'

const FALLBACK_SERVICES = [
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Очищение",
    "name": "Ультразвуковая чистка лица",
    "description": "",
    "price": "€40",
    "visible": "yes"
  },
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Очищение",
    "name": "Комбинированная чистка лица",
    "description": "",
    "price": "€45",
    "visible": "yes"
  },
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Очищение",
    "name": "Чистка спины",
    "description": "",
    "price": "€55–60",
    "visible": "yes"
  },
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Увлажнение",
    "name": "HydraFacial",
    "description": "",
    "price": "€90",
    "visible": "yes"
  },
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Терапия",
    "name": "Терапия периорбитальной зоны",
    "description": "",
    "price": "€40",
    "visible": "yes"
  },
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Лифтинг",
    "name": "RF лифтинг лица",
    "description": "",
    "price": "€40",
    "visible": "yes"
  },
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Лифтинг",
    "name": "RF лифтинг шея + декольте",
    "description": "",
    "price": "€40",
    "visible": "yes"
  },
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Лифтинг",
    "name": "RF лифтинг глаза",
    "description": "",
    "price": "€25",
    "visible": "yes"
  },
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Стимуляция",
    "name": "Микротоковая терапия лица (30 мин)",
    "description": "",
    "price": "€25",
    "visible": "yes"
  },
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Стимуляция",
    "name": "Микротоковая + шея и декольте (45 мин)",
    "description": "",
    "price": "€35",
    "visible": "yes"
  },
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Мезотерапия",
    "name": "Карбокситерапия (Pelart Laboratory)",
    "description": "",
    "price": "€60",
    "visible": "yes"
  },
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Мезотерапия",
    "name": "Безынъекционная мезотерапия — лицо",
    "description": "",
    "price": "€55",
    "visible": "yes"
  },
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Кислород",
    "name": "Кислородная терапия (30 мин)",
    "description": "",
    "price": "€35",
    "visible": "yes"
  },
  {
    "tab": "cosmetology",
    "tabLabel": "Косметология",
    "category": "Массаж",
    "name": "БМС массаж",
    "description": "",
    "price": "€45",
    "visible": "yes"
  },
  {
    "tab": "microneedling",
    "tabLabel": "Микронидлинг",
    "category": "Базовый",
    "name": "Микронидлинг с ампулой — лицо",
    "description": "",
    "price": "€55",
    "visible": "yes"
  },
  {
    "tab": "microneedling",
    "tabLabel": "Микронидлинг",
    "category": "Базовый",
    "name": "С ампулой шея + декольте",
    "description": "",
    "price": "€80",
    "visible": "yes"
  },
  {
    "tab": "microneedling",
    "tabLabel": "Микронидлинг",
    "category": "Тело",
    "name": "Тело (1 зона) с гиалуроновой кислотой",
    "description": "",
    "price": "€80",
    "visible": "yes"
  },
  {
    "tab": "microneedling",
    "tabLabel": "Микронидлинг",
    "category": "Руки",
    "name": "Кисти рук с гиалур. кислотой",
    "description": "",
    "price": "€40",
    "visible": "yes"
  },
  {
    "tab": "microneedling",
    "tabLabel": "Микронидлинг",
    "category": "Губы",
    "name": "Микронидлинг для губ (Perfect Rose Lips)",
    "description": "",
    "price": "€45",
    "visible": "yes"
  },
  {
    "tab": "microneedling",
    "tabLabel": "Микронидлинг",
    "category": "Специальный",
    "name": "С ботулоэффектом",
    "description": "",
    "price": "€60",
    "visible": "yes"
  },
  {
    "tab": "microneedling",
    "tabLabel": "Микронидлинг",
    "category": "Экзосомы",
    "name": "С EXOSOME лицо/шея/декольте",
    "description": "",
    "price": "€160",
    "visible": "yes"
  },
  {
    "tab": "microneedling",
    "tabLabel": "Микронидлинг",
    "category": "Гормоны",
    "name": "С фитоэстрогенами (менопауза)",
    "description": "",
    "price": "€60",
    "visible": "yes"
  },
  {
    "tab": "microneedling",
    "tabLabel": "Микронидлинг",
    "category": "Объём",
    "name": "С VOLUFILIN (эффект липофилинга)",
    "description": "",
    "price": "€110",
    "visible": "yes"
  },
  {
    "tab": "microneedling",
    "tabLabel": "Микронидлинг",
    "category": "Регенерация",
    "name": "С PDRN / полинуклеотиды",
    "description": "",
    "price": "€65",
    "visible": "yes"
  },
  {
    "tab": "microneedling",
    "tabLabel": "Микронидлинг",
    "category": "Алопеция",
    "name": "Микронидлинг при алопеции — с сывороткой",
    "description": "",
    "price": "€60",
    "visible": "yes"
  },
  {
    "tab": "microneedling",
    "tabLabel": "Микронидлинг",
    "category": "Алопеция",
    "name": "Микронидлинг при алопеции — с экзосомами",
    "description": "",
    "price": "€160",
    "visible": "yes"
  },
  {
    "tab": "peelings",
    "tabLabel": "Пилинги",
    "category": "PRX-T33",
    "name": "PRX-T33 лицо",
    "description": "",
    "price": "€55",
    "visible": "yes"
  },
  {
    "tab": "peelings",
    "tabLabel": "Пилинги",
    "category": "PRX-T33",
    "name": "PRX-T33 лицо + шея",
    "description": "",
    "price": "€75",
    "visible": "yes"
  },
  {
    "tab": "peelings",
    "tabLabel": "Пилинги",
    "category": "BioRePeel",
    "name": "BioRePeel лицо",
    "description": "",
    "price": "€55",
    "visible": "yes"
  },
  {
    "tab": "peelings",
    "tabLabel": "Пилинги",
    "category": "BioRePeel",
    "name": "BioRePeel лицо + шея + декольте",
    "description": "",
    "price": "€75",
    "visible": "yes"
  },
  {
    "tab": "peelings",
    "tabLabel": "Пилинги",
    "category": "BioRePeel",
    "name": "BioRePeel тело (1 зона)",
    "description": "",
    "price": "€60",
    "visible": "yes"
  },
  {
    "tab": "peelings",
    "tabLabel": "Пилинги",
    "category": "BioRePeel",
    "name": "BioRePeel колени, локти",
    "description": "",
    "price": "€45",
    "visible": "yes"
  },
  {
    "tab": "peelings",
    "tabLabel": "Пилинги",
    "category": "Карбоновый",
    "name": "Карбоновый пилинг лицо",
    "description": "",
    "price": "€45",
    "visible": "yes"
  },
  {
    "tab": "peelings",
    "tabLabel": "Пилинги",
    "category": "Карбоновый",
    "name": "Карбоновый лицо + шея + декольте",
    "description": "",
    "price": "€85",
    "visible": "yes"
  },
  {
    "tab": "peelings",
    "tabLabel": "Пилинги",
    "category": "Комбо",
    "name": "Дермапен + BioRePeel (лечение постакне)",
    "description": "Лицо",
    "price": "€105",
    "visible": "yes"
  },
  {
    "tab": "epilation",
    "tabLabel": "Фотоэпиляция",
    "category": "Ноги",
    "name": "Фотоэпиляция ноги до колена",
    "description": "",
    "price": "€35",
    "visible": "yes"
  },
  {
    "tab": "epilation",
    "tabLabel": "Фотоэпиляция",
    "category": "Ноги",
    "name": "Фотоэпиляция ноги полностью",
    "description": "",
    "price": "€60",
    "visible": "yes"
  },
  {
    "tab": "epilation",
    "tabLabel": "Фотоэпиляция",
    "category": "Бикини",
    "name": "Бикини внешнее",
    "description": "",
    "price": "€20",
    "visible": "yes"
  },
  {
    "tab": "epilation",
    "tabLabel": "Фотоэпиляция",
    "category": "Бикини",
    "name": "Бикини глубокое",
    "description": "",
    "price": "€45",
    "visible": "yes"
  },
  {
    "tab": "epilation",
    "tabLabel": "Фотоэпиляция",
    "category": "Тело",
    "name": "Подмышки",
    "description": "",
    "price": "€20",
    "visible": "yes"
  },
  {
    "tab": "epilation",
    "tabLabel": "Фотоэпиляция",
    "category": "Руки",
    "name": "Руки до локтя",
    "description": "",
    "price": "€25",
    "visible": "yes"
  },
  {
    "tab": "epilation",
    "tabLabel": "Фотоэпиляция",
    "category": "Лицо",
    "name": "Лицо полностью",
    "description": "",
    "price": "€25",
    "visible": "yes"
  },
  {
    "tab": "epilation",
    "tabLabel": "Фотоэпиляция",
    "category": "IPL",
    "name": "Фотоомоложение лицо (IPL)",
    "description": "",
    "price": "€30",
    "visible": "yes"
  },
  {
    "tab": "epilation",
    "tabLabel": "Фотоэпиляция",
    "category": "IPL",
    "name": "IPL лечение акне — лицо",
    "description": "",
    "price": "€30",
    "visible": "yes"
  },
  {
    "tab": "epilation",
    "tabLabel": "Фотоэпиляция",
    "category": "IPL",
    "name": "IPL лечение розацеа — лицо",
    "description": "",
    "price": "€30",
    "visible": "yes"
  },
  {
    "tab": "body",
    "tabLabel": "Тело",
    "category": "RF",
    "name": "RF лифтинг (1 зона / 30 мин)",
    "description": "",
    "price": "€30",
    "visible": "yes"
  },
  {
    "tab": "body",
    "tabLabel": "Тело",
    "category": "Массаж",
    "name": "Горячий вакуумный массаж (1 зона / 20 мин)",
    "description": "",
    "price": "€25",
    "visible": "yes"
  },
  {
    "tab": "body",
    "tabLabel": "Тело",
    "category": "Липосакция",
    "name": "Липолазер / лазерная липосакция (30 мин)",
    "description": "",
    "price": "€15",
    "visible": "yes"
  },
  {
    "tab": "body",
    "tabLabel": "Тело",
    "category": "Кавитация",
    "name": "Кавитация / ультразвуковая (1 зона / 30 мин)",
    "description": "",
    "price": "€20",
    "visible": "yes"
  },
  {
    "tab": "body",
    "tabLabel": "Тело",
    "category": "Курс RF",
    "name": "RF лифтинг — 7 процедур",
    "description": "Скидка 10% при покупке курса",
    "price": "€190",
    "visible": "yes"
  },
  {
    "tab": "body",
    "tabLabel": "Тело",
    "category": "Курс Массаж",
    "name": "Горячий вакуумный массаж — 10 процедур",
    "description": "",
    "price": "€200",
    "visible": "yes"
  },
  {
    "tab": "lux",
    "tabLabel": "LUX процедуры",
    "category": "EMS+RF MESO",
    "name": "4D booster (Elastin, Collagen, HA, Q10)",
    "description": "Глубинная безыгольная мезотерапия + RF лифтинг",
    "price": "€90",
    "visible": "yes"
  },
  {
    "tab": "lux",
    "tabLabel": "LUX процедуры",
    "category": "EMS+RF MESO",
    "name": "Регенерация 35+, 45+, 50+",
    "description": "",
    "price": "€90",
    "visible": "yes"
  },
  {
    "tab": "lux",
    "tabLabel": "LUX процедуры",
    "category": "EMS+RF MESO",
    "name": "Лечение розацеа, дерматита, чувствительной кожи",
    "description": "",
    "price": "€80",
    "visible": "yes"
  },
  {
    "tab": "lux",
    "tabLabel": "LUX процедуры",
    "category": "EMS+RF MESO",
    "name": "Лечение акне",
    "description": "",
    "price": "€85",
    "visible": "yes"
  },
  {
    "tab": "lux",
    "tabLabel": "LUX процедуры",
    "category": "SQT Bio",
    "name": "Revitalizing Beauty Therapy",
    "description": "Обновление и биоревитализация кожи",
    "price": "€90",
    "visible": "yes"
  },
  {
    "tab": "lux",
    "tabLabel": "LUX процедуры",
    "category": "SQT Bio",
    "name": "Anti-Aging REJUVENATION",
    "description": "Омоложение, борьба с морщинами и тургором",
    "price": "€120",
    "visible": "yes"
  },
  {
    "tab": "lux",
    "tabLabel": "LUX процедуры",
    "category": "Экзосомы",
    "name": "EXOSOMES лицо, шея, декольте",
    "description": "Неинвазивно при помощи микронидлинга",
    "price": "€160",
    "visible": "yes"
  },
  {
    "tab": "lux",
    "tabLabel": "LUX процедуры",
    "category": "Филлеры",
    "name": "Коррекция объёма филлеров — губы (4 процедуры)",
    "description": "Снятие гиалуроновых отёков",
    "price": "€240",
    "visible": "yes"
  }
];

// Nav scroll
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Hero photo zoom on load
window.addEventListener('load', () => {
  const heroPhoto = document.getElementById('heroPhoto');
  if (heroPhoto) heroPhoto.classList.add('loaded');
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => obs.observe(el));

function normalizeRow(row) {
  return {
    tab: (row.tab || row.Tab || row.categoryTab || '').trim() || 'services',
    tabLabel: (row.tabLabel || row['tab label'] || row.TabLabel || row['Раздел'] || '').trim(),
    category: (row.category || row.Category || row['Категория'] || '').trim(),
    name: (row.name || row.Name || row['Услуга'] || row.service || '').trim(),
    description: (row.description || row.Description || row['Описание'] || '').trim(),
    price: (row.price || row.Price || row['Цена'] || '').trim(),
    visible: (row.visible || row.Visible || row['Показать'] || 'yes').trim().toLowerCase()
  };
}

function parseCSV(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i], next = text[i + 1];
    if (char === '"' && inQuotes && next === '"') { field += '"'; i++; continue; }
    if (char === '"') { inQuotes = !inQuotes; continue; }
    if (char === ',' && !inQuotes) { row.push(field); field = ''; continue; }
    if ((char === '
' || char === '') && !inQuotes) {
      if (char === '' && next === '
') i++;
      row.push(field); field = '';
      if (row.some(cell => cell.trim() !== '')) rows.push(row);
      row = [];
      continue;
    }
    field += char;
  }
  row.push(field);
  if (row.some(cell => cell.trim() !== '')) rows.push(row);
  if (!rows.length) return [];
  const headers = rows.shift().map(h => h.trim());
  return rows.map(values => Object.fromEntries(headers.map((h, i) => [h, values[i] || ''])));
}

async function loadServices() {
  const status = document.getElementById('servicesStatus');
  if (!SHEET_CSV_URL) {
    status.textContent = 'Показан е вграден примерен прайс. Сложи Google Sheets CSV линк в script.js → SHEET_CSV_URL.';
    return FALLBACK_SERVICES;
  }

  try {
    const response = await fetch(SHEET_CSV_URL + (SHEET_CSV_URL.includes('?') ? '&' : '?') + 'cache=' + Date.now());
    if (!response.ok) throw new Error('Sheet request failed');
    const csvText = await response.text();
    const rows = parseCSV(csvText).map(normalizeRow)
      .filter(item => item.name && item.visible !== 'no' && item.visible !== '0' && item.visible !== 'false');
    if (!rows.length) throw new Error('No services found');
    status.classList.add('is-hidden');
    return rows;
  } catch (error) {
    console.warn('Google Sheet could not be loaded. Fallback prices are used.', error);
    status.textContent = 'Не удалось загрузить Google Sheet. Показан резервный прайс-лист.';
    return FALLBACK_SERVICES;
  }
}

function escapeHTML(value) {
  return String(value || '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
  }[char]));
}

function renderServices(items) {
  const tabsEl = document.getElementById('servicesTabs');
  const contentEl = document.getElementById('servicesContent');
  const groups = [];
  const seen = new Set();

  items.forEach(item => {
    const tab = item.tab || 'services';
    if (!seen.has(tab)) {
      seen.add(tab);
      groups.push({ tab, label: item.tabLabel || tab, items: [] });
    }
    groups.find(group => group.tab === tab).items.push(item);
  });

  tabsEl.innerHTML = groups.map((group, index) => `
    <button class="tab-btn ${index === 0 ? 'active' : ''}" data-tab="${escapeHTML(group.tab)}">
      ${escapeHTML(group.label)}
    </button>
  `).join('');

  contentEl.innerHTML = groups.map((group, index) => `
    <div class="tab-panel generated ${index === 0 ? 'active' : ''}" id="tab-${escapeHTML(group.tab)}">
      <div class="price-grid">
        ${group.items.map(item => `
          <div class="price-card">
            ${item.category ? `<div class="pc-cat">${escapeHTML(item.category)}</div>` : ''}
            <div class="pc-name">${escapeHTML(item.name)}</div>
            ${item.description ? `<div class="pc-desc">${escapeHTML(item.description)}</div>` : ''}
            <div class="pc-price">${escapeHTML(item.price)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  tabsEl.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => showTab(button.dataset.tab, button));
  });
}

function showTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('tab-' + id);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
}

loadServices().then(renderServices);
