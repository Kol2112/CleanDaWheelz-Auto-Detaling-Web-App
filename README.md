> Niniejszy projekt został zrealizowany na potrzeby **pracy inżynierskiej**.

# 🧼 CleanDaWheels - Auto Detailing & Online Booking Platform

Aplikacja internetowa typu Full-Stack przygotowana dla studia auto detailingu **CleanDaWheels**. System umożliwia klientom przeglądanie oferty usług, porównywanie efektów pracy w interaktywnej galerii, dodawanie i przeglądanie opinii oraz rezerwację terminów, która automatycznie synchronizuje się z **Kalendarzem Google** i zapisuje w bazie **MongoDB**.

---

## 🛠️ Stos Technologiczny

### Frontend
- **React 18** (`react-router-dom` v6)
- **Bootstrap 5 & React-Bootstrap** (responsywny układ UI)
- **Sass / SCSS** (dedykowane arkusze stylów dla komponentów)
- **React Compare Image & React Modal** (interaktywny suwak "Przed / Po" w galerii)
- **React Stars & React Icons** (system ocen i ikony social media)

### Backend
- **Node.js** + **Express.js** (RESTful API)
- **MongoDB** + **Mongoose** (przechowywanie rezerwacji i recenzji)
- **Google Calendar API v3 (OAuth2)** (automatyczne tworzenie wydarzeń w Kalendarzu Google)
- **CORS & Body-Parser**

---

## 🚀 Kluczowe Funkcjonalności

- 🎓 **Projekt Inżynierski:** System zaprojektowany jako odpowiedź na rzeczywiste zapotrzebowanie branży auto detailingu na automatyzację procesu rezerwacji.
- 📅 **System Rezerwacji Online:** Wybór wolnego terminu w kalendarzu tygodniowym (dzień i godzina) z dynamiczną weryfikacją dostępności.
- 📆 **Integracja z Google Calendar:** Automatyczne wpisywanie wizyty do kalendarza Google firmy oraz wysyłanie zaproszenia e-mailowego do klienta.
- 🖼️ **Interaktywna Galeria "Przed / Po":** Możliwość powiększania zdjęć w modalu oraz płynnego przesuwania suwaka w celu porównania stanu auta przed i po usłudze.
- ⭐ **System Recenzji i Ocen:** Przeglądanie opinii klientów z karuzeli oraz formularz dodawania własnej oceny z gwiazdkami przechowywanej w MongoDB.
- 📱 **Fully Responsive Design (RWD):** Dostosowany do urządzeń mobilnych z adaptacyjnym menu (Sticky Navbar zmieniający styl przy przewijaniu).

---

## 📁 Architektura Projektu

```text
CleanDaWheels/
├── backend/                   # Kod serwera Express.js
│   ├── server.js              # Główny serwer API, modele Mongoose & integracja z Google Calendar
│   ├── mongo.env              # Zmienne środowiskowe (ignorowane w Git)
│   └── package.json
├── src/                       # Kod źródłowy aplikacji React
│   ├── components/            # Komponenty UI (Navbar, Footer, Gallery, OfferCard, itp.)
│   ├── img/                   # Grafiki, logo i piktogramy
│   ├── pages/                 # Widoki stron (HomePage, Offer, ContactPage)
│   ├── App.js                 # Główny komponent z routingiem
│   ├── index.js               # Punkt wejścia React
│   └── index.scss             # Style globalne i czcionki
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Instrukcja Uruchomienia

### 1. Wymagania wstępne
- **Node.js** (wersja `>= 16.x`)
- Instancja **MongoDB** (lokalnie lub baza w chmurze MongoDB Atlas)
- Utworzony projekt w **Google Cloud Console** z włączonym **Google Calendar API** oraz wygenerowanymi poświadczeniami OAuth2.

---

### 2. Konfiguracja Zmiennych Środowiskowych

Utwórz plik `mongo.env` w katalogu serwera i wprowadź odpowiednie dane:

```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/cleandawheels
GOOGLE_CLIENT_ID=twój_google_client_id
GOOGLE_CLIENT_SECRET=twój_google_client_secret
GOOGLE_REFRESH_TOKEN=twój_google_refresh_token
GOOGLE_CALENDAR_ID=twój_id_kalendarza@group.calendar.google.com
```

---

### 3. Instalacja i Uruchomienie

#### Backend:
```bash
# Wejdź do katalogu backendu i zainstaluj zależności
npm install

# Uruchom serwer API (domyślnie na porcie 5000)
node server.js
```

#### Frontend:
```bash
# Zainstaluj zależności aplikacji React
npm install

# Uruchom aplikację w trybie deweloperskim (http://localhost:3000)
npm start
```

---

## 🔒 Bezpieczeństwo

Plik `.env` / `mongo.env` oraz katalogi `node_modules` są włączone do pliku `.gitignore`. Nie należy udostępniać produkcyjnych kluczy Google API ani URI bazy danych w publicznych commitach.

---

## 📄 Licencja

Projekt zrealizowany w celach akademickich i dyplomowych. Wszelkie prawa zastrzeżone.
