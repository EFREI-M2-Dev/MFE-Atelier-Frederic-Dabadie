# Projet MFE Atelier Frederic Dabadie
## Description
Ce projet comprend deux parties principales :
- **mfe-header** : Un Micro Frontend pour le header de l'application.
- **shell** : L'application principale qui consomme le MFE mfe-header.

### Prérequis
Assurez-vous d’avoir les outils suivants installés :
- Node.js (version recommandée : 16.x ou supérieure)
- npm (généralement installé avec Node.js)

## Installation
1. Clonez le repo sur votre machine :
```bash
git clone https://github.com/EFREI-M2-Dev/MFE-Atelier-Frederic-Dabadie
```

2. Installez les dépendances pour chaque projet
Pour **mfe-header** :
```bash
cd mfe-header
npm install
```
Pour **shell** :
```bash
cd shell
npm install
```

## Lancer les projets
1. Lancer **mfe-header** (le Micro Frontend pour le header) : 
```bash
cd mfe-header
npm start
```
Cela démarre le serveur de développement sur le port 3001 (par défaut) et vous pouvez accéder à http://localhost:3001.


1. Lancer shell (l'application principale) :
```bash
cd shell
npm start
```
Cela démarre également un serveur de développement sur le port 2000 (par défaut), et vous pouvez accéder à l'application via http://localhost:2000.



### Résumé des ports :
- **mfe-header** : http://localhost:3000
- **shell** : http://localhost:2000
