// content/ (markdown + webp) -> публикуемые файлы артефакта: data/*.json
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const CONTENT = path.join(__dirname, 'content');
const OUT = path.join(__dirname, 'data');
const I18N = path.join(__dirname, 'i18n');
const LANGS = ['ru', 'en', 'uk', 'ar', 'es'];
const CHUNK_LIMIT = 9 * 1024 * 1024;
const strip = (n) => n.replace(/^\d+-/, '').replace(/\.md$/, '');

const pages = [];        // { slug, title, file, dir, url, crumbs, top }
const dirTitles = {};    // ключ папки без index.md -> { ru, rel }
const byUrl = new Map(); // url вида a/b/c.html -> page
const used = new Set();
function uniq(s) { let x = s.replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'page'; let k = x, i = 2; while (used.has(k)) k = `${x}-${i++}`; used.add(k); return k; }

function read(dir, urlParts, crumbs, top) {
  const items = fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.name !== 'images')
    .sort((a, b) => a.name.localeCompare(b.name, 'ru', { numeric: true }));
  const nodes = [];
  for (const e of items) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      const s = strip(e.name);
      const idx = path.join(full, 'index.md');
      const p = fs.existsSync(idx) ? addPage(idx, full, [...urlParts, s, 'index'], crumbs, top ?? s) : null;
      const title = p ? p.title : s;
      const key = p ? p.slug : 'd-' + [...urlParts, s].join('-');
      if (!p) dirTitles[key] = { ru: s, rel: path.relative(CONTENT, full) };
      nodes.push({ t: title, s: p?.slug, k: key, c: read(full, [...urlParts, s], [...crumbs, key], top ?? s) });
    } else if (e.name.endsWith('.md') && e.name !== 'index.md') {
      const p = addPage(full, dir, [...urlParts, strip(e.name)], crumbs, top ?? strip(e.name));
      nodes.push({ t: p.title, s: p.slug });
    }
  }
  return nodes;
}
function addPage(file, dir, urlParts, crumbs, top) {
  const { data, content } = matter(fs.readFileSync(file, 'utf8'));
  const last = urlParts.at(-1) === 'index' ? urlParts.at(-2) : urlParts.at(-1);
  const p = { slug: uniq(last), title: data.title || last, md: content, dir, url: urlParts.join('/') + '.html', crumbs, top, rel: path.relative(CONTENT, file) };
  pages.push(p); byUrl.set(p.url, p);
  return p;
}
const tree = read(CONTENT, [], [], null);

// ---------- рендер ----------
const mime = { webp: 'image/webp', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif', svg: 'image/svg+xml' };
function imageData(dir, src) {
  let f = path.join(dir, decodeURIComponent(src));
  if (!fs.existsSync(f)) f = f.replace(/\.(png|jpe?g|gif)$/i, '.webp');
  if (!fs.existsSync(f)) return null;
  const ext = path.extname(f).slice(1).toLowerCase();
  return `data:${mime[ext] || 'application/octet-stream'};base64,` + fs.readFileSync(f).toString('base64');
}
// картинки хранятся один раз для всех языков: в статье только data-img="id"
const imgIds = new Map(); // путь файла -> id
let missingImg = 0, deadLinks = 0;
function imageFile(dir, src) {
  let f = path.join(dir, decodeURIComponent(src));
  if (!fs.existsSync(f)) f = f.replace(/\.(png|jpe?g|gif)$/i, '.webp');
  return fs.existsSync(f) ? f : null;
}
function render(p, md) {
  let html = marked.parse(md);
  html = html.replace(/<img([^>]*?)src="([^"]+)"/g, (m, pre, src) => {
    if (/^(data:|https?:)/.test(src)) return m;
    const f = imageFile(p.dir, src);
    if (!f) { missingImg++; return `<img${pre}data-missing="${src}"`; }
    if (!imgIds.has(f)) imgIds.set(f, imgIds.size.toString(36));
    return `<img loading="lazy"${pre}data-img="${imgIds.get(f)}"`;
  });
  html = html.replace(/<a href="([^"]+)"/g, (m, href) => {
    if (/^https?:/.test(href)) return `<a target="_blank" rel="noopener" href="${href}"`;
    if (/^(mailto:|tel:)/.test(href)) return m;
    if (href.startsWith('#')) return `<a data-anchor="${href.slice(1)}" href="#${p.slug}"`;
    const [rel] = href.split('#');
    const target = byUrl.get(path.posix.normalize(path.posix.join(path.posix.dirname(p.url), rel)));
    if (!target) { deadLinks++; return `<a class="dead" data-href="${href}"`; }
    return `<a href="#${target.slug}"`;
  });
  return html;
}
const titleOf = (k) => (pages.find((p) => p.slug === k) || {}).title || (dirTitles[k] || {}).ru || k;

// ---------- теги ----------
// [slug, название, регулярка по заголовку, регулярка по пути разделов, регулярка по тексту]
const TAGS = [
  ['start', 'Начало работы', /^с чего начать|^перед началом|^о платформе|основные понятия|^вход в систему/i, /С чего начать|Перед началом/i],
  ['news', 'Обновления', /что нового|pilot 7\.\d|история изменений/i, /История изменений/i],
  ['reports', 'Отчёты', /отч[её]т/i, /Отч[её]ты/i],
  ['sensors', 'Датчики', /датчик/i, /Датчики/i],
  ['fuel', 'Топливо', /топлив|заправ|слив|азс|нефтеба/i, /Топливо/i, /топлив/i],
  ['geozones', 'Геозоны', /геозон/i, /Геозоны/i],
  ['map', 'Карта', /(^|\s)карт[аеыу]?(\s|$)|слои|геокодинг|kml/i, /(^|\/ )Карта/i],
  ['interface', 'Интерфейс', /интерфейс|меню|панель|рабочая область|персонализац|настройк|ai-помощник|статусы|баланс/i, /Интерфейс личного кабинета|Настройки договора/i],
  ['objects', 'Объекты', /объект/i, /Объекты/i],
  ['users', 'Пользователи и права', /пользовател|прав[ао]|роли|доступ|ip-фильтр|блокиров/i, /Персонал и группы|Пользователи$|Права/i],
  ['notify', 'Уведомления', /уведомлен|событи/i, /Уведомлени|Ситуационн/i],
  ['history', 'История и треки', /истори|трек|рейс|плеер/i, /История$/i],
  ['mobile', 'Мобильные приложения', /мобильн|driver|guarda|трекер|android|ios/i, /Мобильные приложения/i],
  ['telegram', 'Telegram', /telegram/i, /Telegram/i],
  ['api', 'API', /\bapi\b|запрос/i, /API/i],
  ['bi', 'BI и интеграции', /\bbi\b|power bi|интеграц|ретрансляц|extensions|wln/i, /BI Analytics|Extensions|Ретрансляц/i],
  ['hardware', 'Оборудование', /оборудован|терминал|трекер|прошив|can|rs-485/i, /Оборудование/i],
  ['drivers', 'Водители', /водител/i, /Водители/i],
  ['agro', 'Агро', /агро|пол[ея]\b|обработк|урожа/i, /Агро/i],
  ['video', 'Видео и медиа', /видео|камер|медиа|фото/i, /Видео/i],
  ['temp', 'Температура', /температур|климат|холодильн/i, /Температур|Климат/i],
  ['logistics', 'Логистика', /логистик|маршрут|рейс|заявк|ptm/i, /Логистик|PTM|Task Manager|Рейсы|Расписание/i],
  ['maintenance', 'Техобслуживание', /(^|\s)то(\s|$)|техобслуж|сервисн|обслуживан/i, /Техобслуж|(^|\/ )ТО( \/|$)|(^|\/ )Сервис/i],
  ['admin', 'Администрирование', /администр|договор|партн[её]р|тариф|баланс/i, /Панель администратора/i],
  ['rfid', 'RFID', /rfid/i, /RFID/i],
  ['modules', 'Модули', /^модули$|logbook|экодрайвинг|платн.. дорог|весы|прицеп|шин/i, /(^|\/ )Модули/],
];
for (const p of pages) {
  const crumbs = p.crumbs.map(titleOf).join(' / ');
  const scored = [];
  TAGS.forEach(([slug, , reT, reC, reX], i) => {
    let sc = 0;
    if (reT.test(p.title)) sc += 3;
    if (reC && reC.test(crumbs)) sc += 2;
    if (reX && (p.md.match(new RegExp(reX.source, 'gi')) || []).length >= 4) sc += 1;
    if (sc) scored.push([sc, i]);
  });
  p.tags = scored.sort((a, b) => b[0] - a[0]).slice(0, 3).map((x) => x[1]);
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
const plain = (md) => marked.parse(md).replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const TEXT_LIMIT = 1.5 * 1024 * 1024;
const report = {};
for (const lang of LANGS) {
  const dir = path.join(OUT, lang); fs.mkdirSync(dir, { recursive: true });
  const chunks = []; let cur = null, curSize = 0;
  const t = {}, k = {}, fb = [], search = [];
  for (const p of pages) {
    let md = p.md, title = p.title;
    if (lang !== 'ru') {
      const f = path.join(I18N, lang, p.rel);
      if (fs.existsSync(f)) { const m = matter(fs.readFileSync(f, 'utf8')); md = m.content; title = m.data.title || title; } else fb.push(p.slug);
    }
    const html = render(p, md);
    if (!cur || curSize + html.length > TEXT_LIMIT) { cur = {}; chunks.push(cur); curSize = 0; }
    cur[p.slug] = html; curSize += html.length;
    t[p.slug] = title; k[p.slug] = chunks.length - 1;
    search.push([p.slug, plain(md)]);
  }
  for (const [key, d] of Object.entries(dirTitles)) {
    const f = path.join(I18N, lang, d.rel, '_title.txt');
    t[key] = lang !== 'ru' && fs.existsSync(f) ? fs.readFileSync(f, 'utf8').trim() : d.ru;
  }
  chunks.forEach((c, i) => fs.writeFileSync(path.join(dir, `a${i}.json`), JSON.stringify(c)));
  fs.writeFileSync(path.join(dir, 'nav.json'), JSON.stringify({ t, k, fb }));
  fs.writeFileSync(path.join(dir, 'search.json'), JSON.stringify(search));
  report[lang] = { chunks: chunks.length, untranslated: fb.length };
}
// картинки: пачки по ~9 МБ
const imgChunks = []; const imgk = {}; let ic = null, isz = 0;
for (const [f, id] of imgIds) {
  const ext = path.extname(f).slice(1).toLowerCase();
  const d = `data:${mime[ext] || 'application/octet-stream'};base64,` + fs.readFileSync(f).toString('base64');
  if (!ic || isz + d.length > CHUNK_LIMIT) { ic = {}; imgChunks.push(ic); isz = 0; }
  ic[id] = d; isz += d.length; imgk[id] = imgChunks.length - 1;
}
imgChunks.forEach((c, i) => fs.writeFileSync(path.join(OUT, `i${i}.json`), JSON.stringify(c)));
const meta = {};
for (const p of pages) meta[p.slug] = { c: p.crumbs, g: p.tags };
fs.writeFileSync(path.join(OUT, 'nav.json'), JSON.stringify({ tree, meta, order: pages.map((p) => p.slug), tags: TAGS.map(([s]) => s), imgk }));
const tc = TAGS.map(([s, n], i) => n + ':' + pages.filter((p) => p.tags.includes(i)).length).join(' ');
console.log(tc, 'untagged:', pages.filter((p) => !p.tags.length).length);
console.log({ pages: pages.length, images: imgIds.size, imgChunks: imgChunks.length, missingImg: missingImg / LANGS.length, deadLinks: deadLinks / LANGS.length, report });
