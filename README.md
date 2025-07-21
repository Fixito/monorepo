# Monorepo MERN - Exemple

Un monorepo complet utilisant la stack MERN (MongoDB, Express.js, React, Node.js) avec TypeScript et partage de types entre les applications.

## 📁 Architecture du Projet

```
monorepo-mern/
├── 📦 apps/
│   ├── 🌐 client/          # Application React (Frontend)
│   └── 🖥️ server/          # API Express (Backend)
├── 📚 packages/
│   ├── 🔧 types/           # Types TypeScript partagés
│   └── 📋 eslint-config/   # Configuration ESLint partagée
├── 🪝 .husky/              # Hooks Git (pre-commit, commit-msg)
├── 📝 .prettierrc          # Configuration Prettier
├── 📝 .prettierignore      # Fichiers ignorés par Prettier
├── 📝 commitlint.config.js # Configuration Commitlint
├── package.json            # Configuration racine + lint-staged
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
- **ESLint** pour l'analyse statique du code
- **Prettier** pour le formatage automatique
- **Husky** pour les hooks Git
- **Commitlint** pour la validation des messages de commit
- **lint-staged** pour l'exécution des outils sur les fichiers modifiés

## 🔒 Qualité de Code

### Hooks Git Automatiques

Le projet utilise **Husky** pour automatiser la qualité du code :

- **Pre-commit** : Exécute automatiquement ESLint et Prettier sur les fichiers modifiés
- **Commit-msg** : Valide le format des messages de commit selon les conventions

### Format des Messages de Commit

Les messages de commit doivent suivre le format **Conventional Commits** :

```
<type>(<scope>): <description>

[corps optionnel]

[pied de page optionnel]
```

**Types autorisés :**

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage du code
- `refactor`: Refactoring
- `perf`: Amélioration des performances
- `test`: Tests
- `chore`: Tâches de maintenance
- `ci`: Configuration CI/CD
- `build`: Système de build

**Exemples :**

```bash
feat(auth): add user authentication
fix(api): resolve CORS issue in production
docs: update installation guide
```

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
pnpm lint          # Analyser le code avec ESLint
pnpm lint:fix      # Corriger automatiquement les erreurs ESLint
pnpm format        # Formater le code avec Prettier
pnpm format:check  # Vérifier le formatage sans modifier
```

### Scripts Client

```bash
pnpm --filter client run dev      # Démarrer le serveur de développement
pnpm --filter client run build    # Construire pour la production
pnpm --filter client run preview  # Prévisualiser le build
pnpm --filter client run lint     # Linter le code client
```

### Scripts Server

```bash
pnpm --filter server run dev      # Démarrer le serveur en mode développement
pnpm --filter server run build    # Construire pour la production
pnpm --filter server run lint     # Linter le code serveur
```

### Scripts Types

```bash
pnpm --filter @monoscript/types run build    # Construire les types
```
