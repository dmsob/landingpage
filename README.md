# IT Consultant Landing Page

Персональная страница (лендинг) для IT консультанта. Создана с использованием React, TypeScript и Tailwind CSS.

## Технологии

- **React 18** - библиотека для создания пользовательских интерфейсов
- **TypeScript** - типизированный JavaScript
- **Tailwind CSS** - утилитарный CSS фреймворк
- **Vite** - быстрый инструмент сборки

## Установка

1. Установите зависимости:
```bash
npm install
```

2. Запустите dev сервер:
```bash
npm run dev
```

3. Соберите production версию:
```bash
npm run build
```

## Структура проекта

```
src/
├── components/      # React компоненты
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Blog.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/           # Данные для компонентов
│   └── index.ts
├── types/          # TypeScript типы
│   └── index.ts
├── App.tsx         # Главный компонент
├── main.tsx        # Точка входа
└── index.css       # Глобальные стили
```

## Настройка данных

Все данные (проекты, услуги, посты блога, отзывы) находятся в файле `src/data/index.ts`. Вы можете легко изменить их там.

## Особенности

- ✅ Адаптивный дизайн
- ✅ Плавная прокрутка по секциям
- ✅ Подсветка активной секции в навигации
- ✅ Типизация TypeScript
- ✅ Компонентная архитектура
- ✅ Использование Tailwind CSS

