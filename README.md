# ToDo Application avec Redux

## Description

Dans ce projet, nous avons créé une application de gestion de tâches (ToDo) en utilisant React et Redux pour gérer l'état global de l'application. L'application permet à l'utilisateur de créer, modifier et filtrer des tâches.

## Composants principaux

L'application contient les composants suivants :

- **AddTask** : Permet à l'utilisateur d'ajouter une nouvelle tâche.
- **ListTask** : Affiche la liste des tâches avec des options de filtrage.
- **Task** : Représente une tâche individuelle avec la possibilité de la marquer comme "faite" ou "non faite", ou de la modifier.

## Fonctionnalités

L'utilisateur peut :

- **Ajouter une nouvelle tâche** : Un champ de saisie permet à l'utilisateur d'ajouter des tâches avec une description.
- **Filtrer les tâches** : L'utilisateur peut filtrer les tâches par statut (fait/non fait).
- **Modifier une tâche** : L'utilisateur peut modifier la description d'une tâche existante.
- **Marquer une tâche comme faite ou non faite** : L'utilisateur peut indiquer si une tâche est terminée ou non.

## Structure du projet

Le projet suit une architecture de composants React avec Redux pour la gestion de l'état global. Voici une structure de base du projet :


/src /components AddTask.jsx ListTask.jsx Task.jsx /redux actions.js reducers.js store.js /App.jsx /index.js

## Installation

1. Clonez le repository :
   bash
   git clone https://github.com/GBOKO-git/redux-checkpoint.git

Allez dans le dossier du projet :

 cd redux-checkpoint


Installez les dépendances :

 npm install


Démarrez l'application :

 npm start
 L'application sera accessible à l'adresse http://localhost:3000.


 ## Exemple d'utilisation
Ajouter une tâche : Entrez une description de la tâche dans le champ de saisie et cliquez sur "Ajouter".


Filtrer les tâches : Utilisez les filtres pour voir les tâches "faites" ou "non faites".


Modifier une tâche : Cliquez sur une tâche pour modifier sa description.


Marquer comme faite/non faite : Cliquez sur le bouton correspondant pour changer le statut de la tâche.


 ## Contribuer
Forkez le repository.


Créez une branche pour votre nouvelle fonctionnalité (git checkout -b nouvelle-fonctionnalite).


Committez vos changements (git commit -am 'Ajout de la fonctionnalité').


Pushez votre branche (git push origin nouvelle-fonctionnalite).


Ouvrez une Pull Request.


Licence
Distribué sous la licence MIT. Voir le fichier LICENSE pour plus d'informations.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
