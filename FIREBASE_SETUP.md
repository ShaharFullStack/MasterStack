# הוראות הגדרת Firebase

## שלב 1: יצירת פרויקט Firebase
1. כנס ל: https://console.firebase.google.com/
2. לחץ על "Add project" 
3. בחר שם לפרויקט (לדוגמה: masterstack-digital)
4. כיש Google Analytics (אופציונלי)
5. המתן ליצירת הפרויקט

## שלב 2: הגדרת Authentication
1. בקונסול Firebase, לך ל-Authentication
2. לחץ על "Get started"
3. לחץ על "Sign-in method"
4. הפעל את Google Provider:
   - לחץ על Google
   - הפעל את המתג
   - הוסף את המייל שלך ושמירה

## שלב 3: הוספת Web App
1. בהגדרות הפרויקט (האייקון של הגלגל), לחץ על "Project settings"
2. גלול למטה ולחץ על </> (Web)
3. תן שם לאפליקציה
4. העתק את ה-config object

## שלב 4: הגדרת משתני הסביבה
1. צור קובץ .env בשורש הפרויקט
2. העתק את הערכים מ-Firebase Console:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## שלב 5: הגדרת Authorized Domains
1. ב-Authentication > Settings > Authorized domains
2. הוסף את הדומיינים שלך:
   - localhost (כבר קיים)
   - הדומיין של הפרודקשן שלך

## שלב 6: בדיקה
1. הפעל את השרת: `npm run dev`
2. נסה להתחבר עם Google
3. בדוק שהמשתמש מופיע ב-Authentication > Users

## הערות חשובות:
- אל תעלה את קובץ .env ל-Git
- השתמש ב-.env.example כתבנית
- לפרודקשן, הגדר את המשתנים בפלטפורמת הפרסום שלך
