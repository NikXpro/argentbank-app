# ArgentBank

Application web bancaire permettant aux clients de gérer leurs comptes, leur profil et, à terme, leurs transactions. Ce projet est réalisé dans le cadre de la formation OpenClassrooms – Développeur React.

---

## Sommaire

- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Architecture du projet](#architecture-du-projet)
- [Installation](#installation)
- [Livrables](#livrables)
- [Auteurs](#auteurs)

---

## Présentation

ArgentBank est une application web responsive développée avec React et Redux. Elle permet aux utilisateurs de :

- Se connecter à leur compte bancaire
- Consulter et modifier leur profil
- Visualiser leurs comptes et, dans une future version, leurs transactions

Le projet est découpé en deux phases :

1. **Phase 1 : Authentification et gestion du profil utilisateur**
2. **Phase 2 : Spécification des endpoints d'API pour la gestion des transactions**

---

## Fonctionnalités

### Phase 1 – Authentification et profil

- Page d'accueil accessible à tous
- Page de connexion sécurisée
- Authentification de l'utilisateur (login/logout)
- Accès restreint aux informations du profil après connexion
- Modification des informations du profil utilisateur
- Gestion du state global avec Redux

### Phase 2 – Transactions (spécification uniquement)

- Proposition de modèles d'API pour la gestion des transactions (Swagger YAML fourni)
- Endpoints pour :
  - Visualiser toutes les transactions du mois en cours, groupées par compte
  - Visualiser le détail d'une transaction
  - Ajouter, modifier ou supprimer une transaction

---

## Architecture du projet

```
argentbank-app/
│
├── public/
│   └── img/
├── src/
│   ├── assets/
│   │   ├── components/
│   │   └── Pages/
│   │       ├── Home/
│   │       ├── Signin/
│   │       └── User/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Signin/
│   │   └── User/
│   ├── services/
│   └── store/
├── .env
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── README.md
├── swagger.yaml
└── ...
```

---

## Installation

> ⚠️ Le gestionnaire de paquets utilisé est **pnpm**.

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/NikXpro/argentbank-app
   cd argentbank-app
   ```

2. **Installer les dépendances :**

   ```bash
   pnpm install
   ```

3. **Lancer l'application en développement :**
   ```bash
   pnpm run dev
   ```

---

## Livrables

- **Phase 1 :**
  - Code source complet sur GitHub
  - Fichier TXT contenant le lien du dépôt
- **Phase 2 :**
  - Fichier `swagger.yaml` décrivant les endpoints d'API pour la gestion des transactions

---

## Auteurs

- Projet réalisé par : NikXpro
- Formation : OpenClassrooms – Développeur React

---

N'hésitez pas à consulter la documentation Swagger (`swagger.yaml`) pour plus de détails sur les endpoints d'API proposés.
