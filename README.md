# AI Agency - Landing Page

🤖 **Современная лендинг-страница для агентства искусственного интеллекта**

Это современная, респонсивная лендинг-страница, созданная с использованием HTML5, CSS3 и JavaScript. Проект демонстрирует лучшие практики веб-разработки и включает в себя все необходимые элементы для представления услуг в области искусственного интеллекта.
```markdown
# AI Agency — Landing Page

A modern, responsive landing page template for an AI-focused agency. The project uses plain HTML, CSS, and JavaScript and demonstrates best practices for a small static marketing site.

## Features

- Modern dark-themed design with accent color and subtle animations
- Responsive layout for desktop, tablet and mobile
- Accessible markup with ARIA attributes and keyboard support
- Smooth scrolling navigation and mobile menu
- Client-side form validation and notification toast
- Animated statistics and reveal-on-scroll effects

## Project structure

```
ai-agency/
├── index.html        # Main HTML page
├── style.css         # Styles
├── script.js         # Frontend interactivity
├── portfolio/        # Local copy of the demo site (assets)
└── README.md         # This documentation
```

## Quick start

1. Clone the repository:

```bash
git clone https://github.com/avokadoveiks/ai-agency.git
cd ai-agency
```

2. Serve locally (Python):

```bash
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or use a development server such as `live-server`:

```bash
npx live-server
```

## Editing the site

- Update `index.html` to change copy and links
- Update `style.css` to customize colors and typography
- Update `script.js` to add or change client-side behaviour

## Deployment

You can host this static site on GitHub Pages, Netlify, Vercel, or any static host.

### GitHub Pages (recommended)

If you want the site to be served from the `gh-pages` branch (already pushed):

1. Go to your repository on GitHub → Settings → Pages
2. Under "Build and deployment" choose the `gh-pages` branch and the root folder `/`
3. Save — the site will usually become available at:

```
https://<your-username>.github.io/ai-agency/
```

### Netlify / Vercel

Connect the repository and set the build settings to serve static files from the repo root.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to your fork and open a pull request

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Contact

For questions or support, open an issue in the repository.
```
  --text-secondary: #666;
  --background: #ffffff;
  --surface: #f8f9fa;
}
```

### Типография

Используется системный шрифт для лучшей производительности:

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

## ⚙️ JavaScript функциональность

### Основные модули:

1. **Навигация**
   - Мобильное меню
   - Плавная прокрутка
   - Активное состояние ссылок

2. **Формы**
   - Валидация в реальном времени
   - Обработка отправки
   - Уведомления

3. **Анимации**
   - Intersection Observer для ленивой загрузки
   - Анимация счетчиков
   - Scroll эффекты

4. **Утилиты**
   - Debounce и throttle функции
   - Accessibility функции

## 🔧 Настройка и кастомизация

### 1. Изменение контента

Отредактируйте `index.html`:
- Замените текст на актуальный для вашей компании
- Обновите контактную информацию
- Добавьте реальные изображения вместо placeholder'ов

### 2. Стилизация

Измените `style.css`:
- Обновите цветовую схему в переменных CSS
- Настройте типографику
- Добавьте свои анимации

### 3. Функциональность

Расширьте `script.js`:
- Подключите реальные API для форм
- Добавьте аналитику (Google Analytics, Яндекс.Метрика)
- Интегрируйте с CRM системами

## 📱 Адаптивность

Проект адаптирован для всех устройств:

- **Desktop** (1200px+): полный макет с sidebar
- **Tablet** (768px - 1199px): адаптированная сетка
- **Mobile** (до 767px): стековая компоновка, мобильное меню

## ♿ Доступность

Реализованы стандарты accessibility:

- Семантические HTML теги
- ARIA атрибуты
- Контрастность цветов
- Клавиатурная навигация
- Screen reader поддержка

## 🔍 SEO оптимизация

- Семантическая разметка HTML5
- Мета-теги для социальных сетей
- Structured data (можно добавить JSON-LD)
- Оптимизированные изображения
- Быстрая загрузка страницы

## 🌐 Браузерная поддержка

Поддерживаются все современные браузеры:

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📈 Производительность

Оптимизации для быстрой загрузки:

- Минимальные зависимости (только Vanilla JS)
- Оптимизированные CSS анимации
- Lazy loading для контента
- Compressed resources

## 🚀 Деплой

### GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main
# Включите GitHub Pages в настройках репозитория
```

### Netlify
```bash
# Загрузите файлы на Netlify
# Или подключите Git репозиторий для автоматического деплоя
```

### Vercel
```bash
# Установите Vercel CLI
npm i -g vercel

# Деплой
vercel
```

## 🤝 Участие в разработке

1. Форкните проект
2. Создайте ветку для новой функции (`git checkout -b feature/AmazingFeature`)
3. Сделайте коммит (`git commit -m 'Add some AmazingFeature'`)
4. Запушьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📝 Лицензия

Этот проект распространяется под MIT лицензией. См. файл `LICENSE` для деталей.

## 📞 Поддержка

Если у вас есть вопросы или предложения:

- Создайте Issue в репозитории
- Свяжитесь с командой разработки
- Посмотрите документацию в `.github/copilot-instructions.md`

## 🔄 Roadmap

Планируемые улучшения:

- [ ] Интеграция с CMS
- [ ] Многоязычная поддержка (i18n)
- [ ] PWA функциональность
- [ ] Advanced animations с GSAP
- [ ] Тесты (Jest + Testing Library)

---

**Создано с ❤️ для демонстрации современных веб-технологий**