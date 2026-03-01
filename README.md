# Cryptowatch

<img src="./preview.png" width="800" />

Application web de suivi des cryptomonnaies permettant :

- consultation des cours en temps réel
- analyse des variations sur différentes périodes
- affichage des données via l’API publique CoinGecko
- communication entre un frontend React (Vite) et un backend Node/Express

## 🚀 Aperçu

Cryptowatch permet de visualiser les principales cryptomonnaies avec :

- prix actuel
- market Cap
- volume
- variations sur 1h / 24h / 7j / 1m / 6m / 1a / ATH
- classement Top 250
- mise à jour dynamique des données

## 🛠️ Stack technique

### Frontend

- React
- Vite
- Axios / Fetch API
- Sass

### Backend

- Node.js
- Express
- gestion des routes API
- appels vers l’API CoinGecko

### API externe

- CoinGecko Public API

## ⚙️ Fonctionnement

- le frontend envoie une requête au backend.
- le backend appelle l’API CoinGecko.
- les données sont traitées puis renvoyées au frontend.
- l’interface met à jour les informations en temps réel.

## 🎯 Objectifs pédagogiques

Ce projet m’a permis de :

- comprendre la gestion des appels API
- maîtriser l’asynchronisme en JavaScript (async/await, promises)
- mettre en place une architecture frontend/backend
- gérer les états et le rendu dynamique dans React

## 👨‍💻 Auteur

CHARVOT Marc
GitHub : https://github.com/PYXHD
