# MasterStack Digital Boost 🚀

פרויקט אתר תדמיתי מתקדם לחברת פיתוח אתרים ושירותים דיגיטליים.

## 📋 תיאור הפרויקט

MasterStack Digital Boost הוא אתר תדמיתי מודרני הבנוי עם טכנולוגיות מתקדמות ומספק חוויית משתמש מעולה. האתר כולל דפי שירותים, חדשות, מחשבון מחירים ויצירת קשר עם עיצוב רספונסיבי וגישות מתקדמות.

## 🛠️ טכנולוגיות

- **React 18** - ספריית UI מתקדמת
- **TypeScript** - פיתוח בטוח ומהיר יותר
- **Vite** - כלי פיתוח מהיר ואופטימלי
- **Tailwind CSS** - עיצוב מהיר ונקי
- **ShadCN/UI** - רכיבי UI מתקדמים ונגישים
- **React Router** - ניווט בין דפים
- **React Query** - ניהול מצב ושאילתות
- **Lucide React** - אייקונים מודרניים

## 🏗️ מבנה הפרויקט

```
├── public/                 # קבצים סטטיים
│   ├── assets/            # תמונות וסרטונים
│   └── table.csv          # נתונים לדוגמה
├── src/
│   ├── components/        # רכיבי React
│   │   ├── ui/           # רכיבי ShadCN UI
│   │   ├── Header.tsx    # כותרת האתר
│   │   ├── Footer.tsx    # כותרת תחתונה
│   │   └── ...
│   ├── hooks/            # Hooks מותאמים אישית
│   ├── lib/              # פונקציות עזר
│   ├── pages/            # דפי האתר
│   │   ├── Index.tsx     # דף הבית
│   │   ├── ServicesPage.tsx    # דף שירותים
│   │   ├── NewsPage.tsx        # דף חדשות
│   │   ├── PriceCalculatorPage.tsx  # מחשבון מחירים
│   │   └── ContactPage.tsx     # דף יצירת קשר
│   └── styles/           # קבצי עיצוב
└── ...
```

## 🚀 התקנה והרצה

### דרישות מקדימות

- Node.js (גרסה 18 או חדשה יותר)
- npm או yarn או bun

### התקנה

1. שכפל את הפרויקט:
```bash
git clone <repository-url>
cd masterstack-digital-boost-main
```

2. התקן את התלויות:
```bash
npm install
# או
yarn install
# או
bun install
```

### הרצה בסביבת פיתוח

```bash
npm run dev
# או
yarn dev
# או
bun dev
```

האתר יהיה זמין בכתובת: `http://localhost:5173`

### בניית הפרויקט לייצור

```bash
npm run build
# או
yarn build
# או
bun run build
```

### תצוגה מקדימה של גרסת הייצור

```bash
npm run preview
# או
yarn preview
# או
bun run preview
```

## 🎨 תכונות עיקריות

### 🏠 דף הבית
- עיצוב מודרני עם רקע וידאו
- הצגת שירותים עיקריים
- המלצות לקוחות
- סטטיסטיקות חברה

### 💼 דף שירותים
- רשימה מפורטת של כל השירותים
- תיאור מקיף לכל שירות
- מחירים ותוכניות

### 📰 דף חדשות
- עדכונים על הענף והחברה
- מאמרים טכניים
- טיפים ועצות

### 🧮 מחשבון מחירים
- כלי אינטראקטיבי לחישוב עלויות פרויקט
- טפסים דינמיים
- תוצאות מיידיות

### 📞 דף יצירת קשר
- טופס יצירת קשר מתקדם
- פרטי התקשרות
- מפה אינטראקטיבית

### ♿ נגישות
- תפריט נגישות מתקדם
- תמיכה במקלדת
- תמיכה בקוראי מסך
- ניגודיות גבוהה

### 📱 רספונסיביות
- עיצוב מותאם לכל המכשירים
- חוויית משתמש אופטימלית במובייל
- ביצועים מעולים

## 🔧 הגדרות ותצורה

### משתני סביבה

צור קובץ `.env.local` בשורש הפרויקט:

```env
VITE_API_URL=http://localhost:3000/api
VITE_CONTACT_EMAIL=contact@masterstack.com
VITE_WHATSAPP_NUMBER=+972501234567
```

### התאמה אישית

#### צבעים
ערוך את קובץ `tailwind.config.ts` לשינוי ערכת הצבעים:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          // הצבעים שלך כאן
        }
      }
    }
  }
}
```

#### תוכן
עדכן את התוכן בקבצי הדפים השונים תחת `src/pages/`

## 📦 סקריפטים זמינים

- `npm run dev` - הרצה בסביבת פיתוח
- `npm run build` - בניה לייצור
- `npm run build:dev` - בניה לפיתוח
- `npm run preview` - תצוגה מקדימה
- `npm run lint` - בדיקת קוד

## 🤝 תרומה לפרויקט

1. צור Fork של הפרויקט
2. צור branch חדש (`git checkout -b feature/amazing-feature`)
3. בצע commit לשינויים (`git commit -m 'Add some amazing feature'`)
4. דחף ל-branch (`git push origin feature/amazing-feature`)
5. פתח Pull Request

## 📄 רישיון

פרויקט זה מוגן תחת רישיון MIT. ראה קובץ `LICENSE` לפרטים נוספים.

## 📞 יצירת קשר

- **אתר**: [master-stack.com](https://master-stack.com)
- **אימייל**: admin@master-stack.com
- **טלפון**: +972-50-123-4567
- **WhatsApp**: [שלח הודעה](https://wa.me/972501234567)

## 🙏 תודות

תודה לכל המפתחים והקהילה שתרמו לטכנולוגיות המשמשות בפרויקט זה.

---

פותח בישראל 🇮🇱 עם ❤️ על ידי צוות MasterStack