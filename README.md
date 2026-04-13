# TOP Project 11 - TodoList

A simple serverless TodoList web app.

## Features

### Implémentées

Les features implémentées sont :

- Création de Todo :
  - Nom
  - Contenu de la Todo
  - Date
  - Priorité
  - Tags
- Marquer les todo comme faites ("_done_")
- Affichage des Todos par Tag
- Sauver la Todolist dans le LocalStorage

### A compléter

Les features qu'il serait possible d'ajouter :

- Ordonner l'ordre des todos (par date, priorité, etc.)
- Afficher les todos par date ou par priorité
- Gestion de calendrier
- Fonctions de recherches (par champ + recherche général dans le contenu+nom des todos)

## Apports pédagogiques

Le développement de cette app a servi a approfondir ma connaissance des principes de l'OOP, qui ont été au centre de l'implémentation :

- Implémentation des classes et usages des attributs privés, des méthodes static, de la distinction entre les propriétés de classe et d'instance
- Mise en oeuvre du pattern MVC (Model-View-Controller) standard dans les applis frontend pour distinguer la logique (le model), le rendu (la vue) et l'interaction (le contrôleur)
- Implémentation avec l'usage de component (pour avoir des éléments modulaire pour le rendu) : notamment pour le rendu de la Todolist (même composant qui est appelé quelque que soit l'affichage, juste les paramètres de rendu qui sont modifiés)
- Avoir en tête les principes SOLID fondamentaux dans l'OOP
- Mise en oeuvre du pattern Singleton pour gérer globalement la liste des todos en l'absence de serveur. Et réflexion autour de ce pattern : implémentation rigide ou non => sécurise les mauvais usages du code vs rend plus difficile les tests.
- Pratique des closures nécessaires dans une appli modulaire notamment pour adapter le nombre de paramètres à passer à une fonction en fonction des contextes
- Décourverte des _Edge Injection_ avec la mise en place d'un module init qui sert à récupérer les fonctions et données nécessaires à l'initialisation de l'app. Le module index.js se contente alors d'appeler initApp().
- Non implémenter mais étudié : le pattern _composition root_ pour créer un véritable container dans initApp() qui gère l'ensemble des _dependency injections_ proprement.

Autres aspects :

- Mise en oeuvre d'une méthode de représentation en console d'une classe (observer les différences avec Python qui propose des méthodes génériques à surcharger pour ce type de besoin)
- Sensibilisation aux enjeux de performances notamment lié à l'actualisation du DOM via des ajouts/retraits de composants. Test avec les méthodes replaceChildren ou avec l'usage de DocumentFragment. Evaluation de la perfomance via les outils de développement du navigateur
- Mise en oeuvre d'un nouve HTMLélément <dialog> pour l'affichage d'une modal
- Utilisation du localStorage pour gérer la sauvegarde dans une app sans database.
