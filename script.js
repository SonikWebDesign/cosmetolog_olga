// ===============================
// GOOGLE SHEETS PRICE LIST
// ===============================
// Sheet columns: category | subcategory | name | description | price
// Client can safely edit only the `price` column.

const SHEET_SOURCE_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRYcJp-GygxTWb13WtO0zLe0z03hvSk2KLaRJCenMdMZL0I-M8ByU-DwGqQMP-A4iNvvBJCd8sgo8Qk/pub?output=csv";

const FALLBACK_SERVICES = [
  {
    "category": "Косметология",
    "subcategory": "Консультации",
    "name": "Обзорная консультация 60 минут",
    "description": "",
    "price": "35"
  },
  {
    "category": "Косметология",
    "subcategory": "Чистки",
    "name": "Чистка лица ультразвуковая",
    "description": "",
    "price": "40"
  },
  {
    "category": "Косметология",
    "subcategory": "Чистки",
    "name": "Чистка лица комбинированная",
    "description": "",
    "price": "45"
  },
  {
    "category": "Косметология",
    "subcategory": "Чистки",
    "name": "Чистка спины",
    "description": "",
    "price": "55-60"
  },
  {
    "category": "Косметология",
    "subcategory": "Аппаратные процедуры",
    "name": "Hydrafacial",
    "description": "",
    "price": "90"
  },
  {
    "category": "Косметология",
    "subcategory": "Аппаратные процедуры",
    "name": "Терапия переорбитальной зоны",
    "description": "",
    "price": "40"
  },
  {
    "category": "Косметология",
    "subcategory": "RF лифтинг",
    "name": "RF лифтинг лица",
    "description": "",
    "price": "40"
  },
  {
    "category": "Косметология",
    "subcategory": "RF лифтинг",
    "name": "RF лифтинг шея + декольте",
    "description": "",
    "price": "40"
  },
  {
    "category": "Косметология",
    "subcategory": "RF лифтинг",
    "name": "RF лифтинг глаза",
    "description": "",
    "price": "25"
  },
  {
    "category": "Косметология",
    "subcategory": "Микротоки",
    "name": "Микротоковая терапия лица",
    "description": "Миостимуляция лица (30 минут)",
    "price": "25"
  },
  {
    "category": "Косметология",
    "subcategory": "Микротоки",
    "name": "Микротоковая терапия шея и декольте",
    "description": "Дополнительно, 45 минут",
    "price": "35"
  },
  {
    "category": "Косметология",
    "subcategory": "Аппаратные процедуры",
    "name": "Карбокситерапия",
    "description": "Pelart Laboratory",
    "price": "60"
  },
  {
    "category": "Косметология",
    "subcategory": "Безинъекционная мезотерапия",
    "name": "Лицо полностью",
    "description": "Фонофорез",
    "price": "55"
  },
  {
    "category": "Косметология",
    "subcategory": "Безинъекционная мезотерапия",
    "name": "Глаза",
    "description": "Фонофорез",
    "price": "30"
  },
  {
    "category": "Косметология",
    "subcategory": "Кислородная терапия",
    "name": "Полная процедура с ампулой",
    "description": "30 минут",
    "price": "35"
  },
  {
    "category": "Косметология",
    "subcategory": "Кислородная терапия",
    "name": "Дополнительно к основной процедуре",
    "description": "15 минут",
    "price": "10"
  },
  {
    "category": "Косметология",
    "subcategory": "Массаж",
    "name": "БМС массаж",
    "description": "",
    "price": "45"
  },
  {
    "category": "Профессиональный уход",
    "subcategory": "Dr. Spiller + фонофорез + LED терапия",
    "name": "Max. гидратация и лифтинг",
    "description": "Немецкая косметика dr. Spiller + фонофорез + LED терапия",
    "price": "45"
  },
  {
    "category": "Профессиональный уход",
    "subcategory": "Dr. Spiller + фонофорез + LED терапия",
    "name": "Жирная кожа и акне",
    "description": "Немецкая косметика dr. Spiller + фонофорез + LED терапия",
    "price": "45"
  },
  {
    "category": "Профессиональный уход",
    "subcategory": "Dr. Spiller + фонофорез + LED терапия",
    "name": "Осветление и пигментированная кожа",
    "description": "Немецкая косметика dr. Spiller + фонофорез + LED терапия",
    "price": "50"
  },
  {
    "category": "Профессиональный уход",
    "subcategory": "Dr. Spiller + фонофорез + LED терапия",
    "name": "Розацеа, дерматит, чувствительная кожа",
    "description": "Немецкая косметика dr. Spiller + фонофорез + LED терапия",
    "price": "40"
  },
  {
    "category": "Профессиональный уход",
    "subcategory": "Dr. Spiller + фонофорез + LED терапия",
    "name": "Восстановление поврежденной кожи, питание",
    "description": "Немецкая косметика dr. Spiller + фонофорез + LED терапия",
    "price": "50"
  },
  {
    "category": "Профессиональный уход",
    "subcategory": "Dr. Spiller + фонофорез + LED терапия",
    "name": "Лифтинг",
    "description": "Немецкая косметика dr. Spiller + фонофорез + LED терапия",
    "price": "45"
  },
  {
    "category": "Аппаратные процедуры для тела",
    "subcategory": "Разовые процедуры",
    "name": "RF лифтинг",
    "description": "1 зона / 30 минут",
    "price": "30"
  },
  {
    "category": "Аппаратные процедуры для тела",
    "subcategory": "Разовые процедуры",
    "name": "Горячий вакуумный массаж",
    "description": "1 зона / 20 минут",
    "price": "25"
  },
  {
    "category": "Аппаратные процедуры для тела",
    "subcategory": "Разовые процедуры",
    "name": "Липолазер / лазерная липосакция",
    "description": "30 минут",
    "price": "15"
  },
  {
    "category": "Аппаратные процедуры для тела",
    "subcategory": "Разовые процедуры",
    "name": "Кавитация / ультразвуковая липосакция",
    "description": "1 зона / 30 минут",
    "price": "20"
  },
  {
    "category": "Аппаратные процедуры для тела",
    "subcategory": "Разовые процедуры",
    "name": "Миостимуляция мышц тела",
    "description": "30 минут",
    "price": "20"
  },
  {
    "category": "Аппаратные процедуры для тела",
    "subcategory": "Курс со скидкой -10%",
    "name": "RF лифтинг",
    "description": "7 процедур",
    "price": "190"
  },
  {
    "category": "Аппаратные процедуры для тела",
    "subcategory": "Курс со скидкой -10%",
    "name": "Горячий вакуумный массаж",
    "description": "10 процедур",
    "price": "200"
  },
  {
    "category": "Аппаратные процедуры для тела",
    "subcategory": "Курс со скидкой -10%",
    "name": "Липолазер / лазерная липосакция",
    "description": "10 процедур",
    "price": "135"
  },
  {
    "category": "Аппаратные процедуры для тела",
    "subcategory": "Курс со скидкой -10%",
    "name": "Кавитация / ультразвуковая липосакция",
    "description": "10 процедур",
    "price": "180"
  },
  {
    "category": "Аппаратные процедуры для тела",
    "subcategory": "Курс со скидкой -10%",
    "name": "Миостимуляция мышц тела",
    "description": "15 процедур",
    "price": "300"
  },
  {
    "category": "Фотоэпиляция",
    "subcategory": "Ноги",
    "name": "До колена",
    "description": "",
    "price": "35"
  },
  {
    "category": "Фотоэпиляция",
    "subcategory": "Ноги",
    "name": "Полностью",
    "description": "",
    "price": "60"
  },
  {
    "category": "Фотоэпиляция",
    "subcategory": "Бикини",
    "name": "Внешнее",
    "description": "",
    "price": "20"
  },
  {
    "category": "Фотоэпиляция",
    "subcategory": "Бикини",
    "name": "Глубокое",
    "description": "",
    "price": "45"
  },
  {
    "category": "Фотоэпиляция",
    "subcategory": "Подмышки",
    "name": "Подмышки",
    "description": "",
    "price": "20"
  },
  {
    "category": "Фотоэпиляция",
    "subcategory": "Руки",
    "name": "До локтя",
    "description": "",
    "price": "25"
  },
  {
    "category": "Фотоэпиляция",
    "subcategory": "Руки",
    "name": "Полностью",
    "description": "",
    "price": "50"
  },
  {
    "category": "Фотоэпиляция",
    "subcategory": "Лицо",
    "name": "Полностью",
    "description": "",
    "price": "25"
  },
  {
    "category": "Фотоэпиляция",
    "subcategory": "Лицо",
    "name": "Зона до 5 см",
    "description": "",
    "price": "10"
  },
  {
    "category": "Фотоэпиляция",
    "subcategory": "Спина",
    "name": "Спина",
    "description": "",
    "price": "75-85"
  },
  {
    "category": "Фотоэпиляция",
    "subcategory": "Зона на теле",
    "name": "Зона на теле ~ 20×20",
    "description": "",
    "price": "20"
  },
  {
    "category": "IPL терапия",
    "subcategory": "Фотоомоложение",
    "name": "Лицо",
    "description": "",
    "price": "30"
  },
  {
    "category": "IPL терапия",
    "subcategory": "Фотоомоложение",
    "name": "Участок на теле",
    "description": "20 см²",
    "price": "25"
  },
  {
    "category": "IPL терапия",
    "subcategory": "Лечение акне",
    "name": "Лицо",
    "description": "",
    "price": "30"
  },
  {
    "category": "IPL терапия",
    "subcategory": "Лечение акне",
    "name": "Участок на теле",
    "description": "20 см²",
    "price": "25"
  },
  {
    "category": "IPL терапия",
    "subcategory": "Лечение розацеа",
    "name": "Лицо",
    "description": "",
    "price": "30"
  },
  {
    "category": "IPL терапия",
    "subcategory": "Лечение розацеа",
    "name": "Участок на теле",
    "description": "20 см²",
    "price": "25"
  },
  {
    "category": "Неинъекционная коррекция объема филлеров",
    "subcategory": "Снятие гиалуроновых отеков",
    "name": "Губы",
    "description": "4 процедуры, стоимость указана за полный курс",
    "price": "240"
  },
  {
    "category": "Неинъекционная коррекция объема филлеров",
    "subcategory": "Снятие гиалуроновых отеков",
    "name": "Нижняя треть",
    "description": "3 процедуры, стоимость указана за полный курс",
    "price": "350"
  },
  {
    "category": "Неинъекционная коррекция объема филлеров",
    "subcategory": "Снятие гиалуроновых отеков",
    "name": "Отдельная область на лице",
    "description": "4 процедуры, стоимость указана за полный курс",
    "price": "320"
  },
  {
    "category": "Пилинги",
    "subcategory": "PRX-T33",
    "name": "Лицо",
    "description": "",
    "price": "55"
  },
  {
    "category": "Пилинги",
    "subcategory": "PRX-T33",
    "name": "Лицо + шея",
    "description": "",
    "price": "75"
  },
  {
    "category": "Пилинги",
    "subcategory": "BioRePeel",
    "name": "Лицо",
    "description": "",
    "price": "55"
  },
  {
    "category": "Пилинги",
    "subcategory": "BioRePeel",
    "name": "Лицо + шея + декольте",
    "description": "",
    "price": "75"
  },
  {
    "category": "Пилинги",
    "subcategory": "BioRePeel",
    "name": "Тело",
    "description": "1 зона",
    "price": "60"
  },
  {
    "category": "Пилинги",
    "subcategory": "BioRePeel",
    "name": "Колени, локти",
    "description": "",
    "price": "45"
  },
  {
    "category": "Пилинги",
    "subcategory": "Карбоновый пилинг",
    "name": "Лицо",
    "description": "",
    "price": "45"
  },
  {
    "category": "Пилинги",
    "subcategory": "Карбоновый пилинг",
    "name": "Лицо + шея",
    "description": "",
    "price": "70"
  },
  {
    "category": "Пилинги",
    "subcategory": "Карбоновый пилинг",
    "name": "Лицо + шея + декольте",
    "description": "",
    "price": "85"
  },
  {
    "category": "Пилинги",
    "subcategory": "Дермапен + BioRePeel",
    "name": "Лицо",
    "description": "Лечение пост акне",
    "price": "105"
  },
  {
    "category": "Процедуры класса LUX",
    "subcategory": "EMS + RF MESO",
    "name": "4D booster",
    "description": "Elastin, collagen, Hialuronic, Q10",
    "price": "90"
  },
  {
    "category": "Процедуры класса LUX",
    "subcategory": "EMS + RF MESO",
    "name": "Регенерация 35+, 45+, 50+",
    "description": "",
    "price": "90"
  },
  {
    "category": "Процедуры класса LUX",
    "subcategory": "EMS + RF MESO",
    "name": "Лечение розацеа, дерматита, чувствительной кожи",
    "description": "",
    "price": "80"
  },
  {
    "category": "Процедуры класса LUX",
    "subcategory": "EMS + RF MESO",
    "name": "Лечение акне",
    "description": "",
    "price": "85"
  },
  {
    "category": "Процедуры класса LUX",
    "subcategory": "EMS + RF MESO",
    "name": "Лечение купероза",
    "description": "",
    "price": "85"
  },
  {
    "category": "Процедуры класса LUX",
    "subcategory": "EMS + RF MESO",
    "name": "Отбеливание, лечение пигментации",
    "description": "",
    "price": "90"
  },
  {
    "category": "Процедуры класса LUX",
    "subcategory": "EMS + RF MESO",
    "name": "В период менопаузы",
    "description": "Состав с растительными эстрогенами",
    "price": "90"
  },
  {
    "category": "Процедуры класса LUX",
    "subcategory": "SQT",
    "name": "Revitalizing Beauty Therapy",
    "description": "Обновление и биоревитализация кожи",
    "price": "90"
  },
  {
    "category": "Процедуры класса LUX",
    "subcategory": "SQT",
    "name": "Resurface Repair Set",
    "description": "Лечение постакне, расширенные поры",
    "price": "85"
  },
  {
    "category": "Процедуры класса LUX",
    "subcategory": "SQT",
    "name": "Anti-Aging REJUVENATION",
    "description": "Омоложение, борьба с морщинами и тургор",
    "price": "120"
  },
  {
    "category": "Процедуры класса LUX",
    "subcategory": "SQT",
    "name": "NOURISHING HYDRATING SET",
    "description": "Полная регенерация и увлажнение",
    "price": "95"
  },
  {
    "category": "Процедуры класса LUX",
    "subcategory": "EXOSOMES",
    "name": "Лицо, шея, декольте",
    "description": "Вводятся в кожу неинвазивно при помощи микронидлинга",
    "price": "160"
  },
  {
    "category": "Микронидлинг",
    "subcategory": "Микронидлинг с ампулой",
    "name": "Лицо",
    "description": "",
    "price": "55"
  },
  {
    "category": "Микронидлинг",
    "subcategory": "Микронидлинг с ампулой",
    "name": "Шея + декольте",
    "description": "С ампулой",
    "price": "80"
  },
  {
    "category": "Микронидлинг",
    "subcategory": "Микронидлинг с ампулой",
    "name": "Тело",
    "description": "1 зона, с гиалуроновой кислотой",
    "price": "80"
  },
  {
    "category": "Микронидлинг",
    "subcategory": "Микронидлинг с ампулой",
    "name": "Кисти рук",
    "description": "С гиалуроновой кислотой",
    "price": "40"
  },
  {
    "category": "Микронидлинг",
    "subcategory": "Микронидлинг для губ",
    "name": "Для губ",
    "description": "Perfect rose lips",
    "price": "45"
  },
  {
    "category": "Микронидлинг",
    "subcategory": "Активные сыворотки",
    "name": "С ботулиноэффектом",
    "description": "",
    "price": "60"
  },
  {
    "category": "Микронидлинг",
    "subcategory": "Активные сыворотки",
    "name": "С EXOSOME",
    "description": "Лицо / лицо, шея, декольте",
    "price": "160"
  },
  {
    "category": "Микронидлинг",
    "subcategory": "Активные сыворотки",
    "name": "С фитоэстрогеном",
    "description": "Менопауза, гормональный сбой",
    "price": "60"
  },
  {
    "category": "Микронидлинг",
    "subcategory": "Активные сыворотки",
    "name": "С VOLUFILIN",
    "description": "Эффект липофилинга",
    "price": "110"
  },
  {
    "category": "Микронидлинг",
    "subcategory": "Активные сыворотки",
    "name": "С PDRN / поленуклиотиды",
    "description": "",
    "price": "65"
  },
  {
    "category": "Микронидлинг",
    "subcategory": "При алопеции",
    "name": "С сывороткой",
    "description": "",
    "price": "60"
  },
  {
    "category": "Микронидлинг",
    "subcategory": "При алопеции",
    "name": "С экзосомами",
    "description": "",
    "price": "160"
  },
  {
    "category": "Микронидлинг",
    "subcategory": "Дополнительно",
    "name": "Проведение процедуры Дермопэн с электропорацией",
    "description": "",
    "price": "+25"
  }
];

// Navigation scroll effect
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Hero photo zoom on load
window.addEventListener('load', () => {
  const heroPhoto = document.getElementById('heroPhoto');
  if (heroPhoto) heroPhoto.classList.add('loaded');
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), index * 80);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => obs.observe(el));

function getSheetCsvUrl(sourceUrl) {
  const url = String(sourceUrl || '').trim();
  if (!url) return '';
  if (url.includes('output=csv') || url.includes('tqx=out:csv')) return url;

  const idMatch = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  const gidMatch = url.match(/[?#&]gid=(\d+)/);
  if (!idMatch) return url;

  const sheetId = idMatch[1];
  const gid = gidMatch ? gidMatch[1] : '0';
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&gid=${gid}`;
}

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && inQuotes && next === '"') { field += '"'; i++; continue; }
    if (char === '"') { inQuotes = !inQuotes; continue; }
    if (char === ',' && !inQuotes) { row.push(field); field = ''; continue; }
    if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && next === '\n') i++;
      row.push(field);
      if (row.some(cell => String(cell).trim() !== '')) rows.push(row);
      row = [];
      field = '';
      continue;
    }
    field += char;
  }

  row.push(field);
  if (row.some(cell => String(cell).trim() !== '')) rows.push(row);
  if (!rows.length) return [];

  const headers = rows.shift().map(h => String(h).trim().toLowerCase());
  return rows.map(values => Object.fromEntries(headers.map((h, i) => [h, values[i] || ''])));
}

function normalizeRow(row) {
  return {
    category: (row.category || row['категория'] || row['раздел'] || '').trim(),
    subcategory: (row.subcategory || row['sub category'] || row['подкатегория'] || row['подраздел'] || '').trim(),
    name: (row.name || row.service || row['услуга'] || row['название'] || '').trim(),
    description: (row.description || row['описание'] || '').trim(),
    price: (row.price || row['цена'] || row['price (€)'] || '').trim(),
    visible: (row.visible || row['показать'] || 'yes').trim().toLowerCase()
  };
}

function isVisible(item) {
  return !['no', '0', 'false', 'hide', 'hidden', 'нет'].includes(String(item.visible || '').toLowerCase());
}

function formatPrice(price) {
  const raw = String(price || '').trim();
  if (!raw) return '';
  if (/€|eur|евро/i.test(raw)) return raw.replace(/eur/ig, '€');
  if (raw.startsWith('+')) return '+€' + raw.slice(1).trim();
  return '€' + raw;
}

function escapeHTML(value) {
  return String(value || '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
  }[char]));
}

function slugify(value) {
  return String(value || 'services')
    .toLowerCase()
    .replace(/[^a-z0-9а-яё]+/gi, '-')
    .replace(/^-+|-+$/g, '') || 'services';
}

async function loadServices() {
  const status = document.getElementById('servicesStatus');
  const csvUrl = getSheetCsvUrl(SHEET_SOURCE_URL);

  try {
    if (!csvUrl) throw new Error('Missing Google Sheet URL');
    const response = await fetch(csvUrl + (csvUrl.includes('?') ? '&' : '?') + 'cache=' + Date.now());
    if (!response.ok) throw new Error('Google Sheet request failed');

    const csvText = await response.text();
    const rows = parseCSV(csvText)
      .map(normalizeRow)
      .filter(item => item.category && item.name && isVisible(item));

    if (!rows.length) throw new Error('No valid rows found in Google Sheet');
    if (status) status.classList.add('is-hidden');
    return rows;
  } catch (error) {
    console.warn('Using fallback services. Google Sheet could not be loaded:', error);
    if (status) status.textContent = 'Google Sheet не се зареди. Показан е резервният прайс от сайта.';
    return FALLBACK_SERVICES.map(normalizeRow).filter(item => item.category && item.name && isVisible(item));
  }
}

function groupByCategory(items) {
  const categories = [];
  const categoryMap = new Map();

  items.forEach(item => {
    const category = item.category || 'Услуги';
    if (!categoryMap.has(category)) {
      const group = { name: category, slug: slugify(category), items: [] };
      categoryMap.set(category, group);
      categories.push(group);
    }
    categoryMap.get(category).items.push(item);
  });

  return categories;
}

function groupBySubcategory(items) {
  const subgroups = [];
  const subMap = new Map();

  items.forEach(item => {
    const subcategory = item.subcategory || 'Основные услуги';
    if (!subMap.has(subcategory)) {
      const group = { name: subcategory, items: [] };
      subMap.set(subcategory, group);
      subgroups.push(group);
    }
    subMap.get(subcategory).items.push(item);
  });

  return subgroups;
}

function renderServices(items) {
  const tabsEl = document.getElementById('servicesTabs');
  const contentEl = document.getElementById('servicesContent');
  if (!tabsEl || !contentEl) return;

  const categories = groupByCategory(items);

  tabsEl.innerHTML = categories.map((category, index) => `
    <button class="tab-btn ${index === 0 ? 'active' : ''}" data-tab="${escapeHTML(category.slug)}">
      ${escapeHTML(category.name)}
    </button>
  `).join('');

  contentEl.innerHTML = categories.map((category, index) => `
    <div class="tab-panel generated ${index === 0 ? 'active' : ''}" id="tab-${escapeHTML(category.slug)}">
      ${groupBySubcategory(category.items).map(subgroup => `
        <div class="subcategory-block">
          <h3 class="subcategory-title">${escapeHTML(subgroup.name)}</h3>
          <div class="price-grid">
            ${subgroup.items.map(item => `
              <article class="price-card">
                <div class="pc-name">${escapeHTML(item.name)}</div>
                ${item.description ? `<div class="pc-desc">${escapeHTML(item.description)}</div>` : ''}
                <div class="pc-price">${escapeHTML(formatPrice(item.price))}</div>
              </article>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

  tabsEl.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-panel.generated').forEach(panel => panel.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(tab => tab.classList.remove('active'));
      const panel = document.getElementById('tab-' + button.dataset.tab);
      if (panel) panel.classList.add('active');
      button.classList.add('active');
    });
  });
}

loadServices().then(renderServices);
