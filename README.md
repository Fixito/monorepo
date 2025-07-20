# Monorepo MERN - Exemple

Un monorepo complet utilisant la stack MERN (MongoDB, Express.js, React, Node.js) avec TypeScript et partage de types entre les applications.

## 📁 Architecture du Projet

```
monorepo-mern/
├── 📦 apps/
│   ├── 🌐 client/          # Application React (Frontend)
│   └── 🖥️ server/          # API Express (Backend)
├── 📚 packages/
│   └── 🔧 types/           # Types TypeScript partagés
├── package.json            # Configuration racine
├── pnpm-workspace.yaml     # Configuration workspace PNPM
└── tsconfig.base.json      # Configuration TypeScript de base
```

## 🛠️ Technologies Utilisées

### Frontend (Client)

- **React 19** avec TypeScript
- **Vite** pour le build et le développement
- **Tailwind CSS** pour le styling
- **Axios** pour les appels API
- **ESLint** pour le linting

### Backend (Server)

- **Express.js** avec TypeScript
- **CORS** pour les requêtes cross-origin
- **Node.js** runtime

### Outils de Développement

- **PNPM** comme gestionnaire de packages
- **TypeScript** pour le typage statique
- **Workspace** pour la gestion du monorepo

## 🚀 Démarrage Rapide

### Prérequis

- Node.js (version 18 ou supérieure)
- PNPM (recommandé) ou npm

### Installation

1. **Cloner le repository**

   ```bash
   git clone <url-du-repo>
   cd monorepo-mern
   ```

2. **Installer les dépendances**

   ```bash
   pnpm install
   ```

3. **Construire les types partagés**

   ```bash
   pnpm run build:types
   ```

4. **Lancer l'application en mode développement**

   ```bash
   # Terminal 1 - Serveur backend
   pnpm dev:server

   # Terminal 2 - Client frontend
   pnpm dev:client
   ```

   Ou utiliser le script global :

   ```bash
   pnpm dev
   ```

### Accès aux Applications

- **Frontend** : http://localhost:5173
- **Backend API** : http://localhost:3000

## 📖 Scripts Disponibles

### Scripts Globaux (racine)

```bash
pnpm build         # Construire tous les packages
pnpm dev           # Lancer tous les projets en développement
pnpm build:types   # Construire uniquement les types partagés
pnpm dev:server    # Démarrer le serveur de développement
pnpm dev:client    # Démarrer le client en mode développement
```

### Scripts Client

```bash
pnpm --filter @monoscript/client run dev      # Démarrer le serveur de développement
pnpm --filter @monoscript/client run build    # Construire pour la production
pnpm --filter @monoscript/client run preview  # Prévisualiser le build
pnpm --filter @monoscript/client run lint     # Linter le code
```

### Scripts Server

```bash
pnpm --filter @monoscript/server run dev      # Démarrer le serveur en mode développement
pnpm --filter @monoscript/server run build    # Construire pour la production
```

### Scripts Types

```bash
pnpm --filter @monoscript/shared run build    # Construire les types
pnpm --filter @monoscript/shared run dev      # Mode watch pour les types
```

## 🔧 API Endpoints

### Voitures

- `GET /api/v1/cars` - Récupérer toutes les voitures
