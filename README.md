# GPTech Studio - Sito Web Aziendale

Sito web moderno per agenzia di web development e digital marketing realizzato con Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Features

- **Design Moderno**: Interface pulita e professionale con animazioni fluide
- **Responsive**: Ottimizzato per desktop, tablet e mobile
- **SEO Ottimizzato**: Meta tag, structured data e performance elevate
- **Animazioni**: Transizioni fluide con Framer Motion
- **Form Contatti**: Form funzionale con validazione
- **Performance**: Lighthouse score 90+ su tutti i parametri

## 🛠️ Tecnologie Utilizzate

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety e sviluppo robusto
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animazioni e transizioni
- **React Hook Form** - Gestione form efficiente
- **React Icons** - Set completo di icone

## 📁 Struttura del Progetto

```
gptechstudio/
├── app/
│   ├── globals.css          # Stili globali
│   ├── layout.tsx           # Layout principale
│   ├── page.tsx             # Homepage
│   ├── servizi/
│   │   └── page.tsx         # Pagina servizi
│   ├── portfolio/
│   │   └── page.tsx         # Pagina portfolio
│   └── contatti/
│       └── page.tsx         # Pagina contatti
├── components/
│   ├── Header.tsx           # Navigazione principale
│   ├── Footer.tsx           # Footer del sito
│   ├── ServiceCard.tsx      # Card servizi
│   ├── TestimonialCard.tsx  # Card testimonial
│   └── ui/
│       └── Button.tsx       # Componente button riutilizzabile
├── public/                  # Asset statici
└── package.json
```

## 🚀 Quick Start

### Prerequisiti

- Node.js 18+ 
- npm o yarn

### Installazione

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd gptechstudio
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   # oppure
   yarn install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   # oppure
   yarn dev
   ```

4. **Apri il browser**
   Vai su [http://localhost:3000](http://localhost:3000)

## 📦 Build e Deploy

### Build Locale
```bash
npm run build
npm run start
```

### Deploy su Vercel

1. **Collega il repository a Vercel**
   - Vai su [vercel.com](https://vercel.com)
   - Importa il repository GitHub
   - Vercel rileverà automaticamente Next.js

2. **Configurazione automatica**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Framework: Next.js

3. **Deploy**
   - Ogni push su main triggera un deploy automatico
   - Preview deploy per ogni PR

### Variabili d'Ambiente (se necessarie)

Crea un file `.env.local` per le variabili d'ambiente:

```env
# Esempio per form contatti
NEXT_PUBLIC_CONTACT_API_URL=your_api_url
EMAIL_SERVICE_API_KEY=your_api_key
```

## 🎨 Personalizzazione

### Colori e Styling

I colori principali sono definiti in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#3b82f6',  // Blu principale
    600: '#2563eb',
    // ...
  },
  secondary: {
    500: '#64748b',  // Grigio principale
    900: '#0f172a',
    // ...
  }
}
```

### Contenuti

- **Homepage**: Modifica `app/page.tsx`
- **Servizi**: Aggiorna l'array `services` in `app/servizi/page.tsx`
- **Portfolio**: Modifica l'array `projects` in `app/portfolio/page.tsx`
- **Contatti**: Personalizza info contatto in `app/contatti/page.tsx`

### Meta Tag e SEO

I meta tag sono configurati in `app/layout.tsx`. Per pagine specifiche, aggiungi:

```typescript
export const metadata: Metadata = {
  title: 'Titolo Pagina - GPTech Studio',
  description: 'Descrizione specifica della pagina',
}
```

## 📈 Performance e SEO

- **Core Web Vitals**: Ottimizzato per LCP, FID, CLS
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts con display=swap
- **Minification**: CSS e JS automaticamente minificati
- **Caching**: Headers cache ottimizzati

## 🔧 Sviluppo

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npx tsc --noEmit
```

### Componenti

Tutti i componenti seguono:
- TypeScript strict mode
- Props interface definite
- Accessibility best practices
- Responsive design

## 📞 Supporto

Per domande o supporto:
- Email: info@gptechstudio.it
- Telefono: +39 123 456 7890

## 📄 Licenza

Questo progetto è proprietario di GPTech Studio. Tutti i diritti riservati.

---

**Sviluppato con ❤️ da GPTech Studio**
