# TOP Project 11 - TodoList

A simple serverless TodoList web app.

## Apports pédagogiques

Le développement de cette app a servi a approfondir ma connaissance des principes de l'OOP, qui ont été au centre de l'implémentation :

- Implémentation des classes et usages des attributs privés, des méthodes static, de la distinction entre les propriétés de classe et d'instance
- Mise en oeuvre du pattern MVC (Model-View-Controller) standard dans les applis frontend pour distinguer la logique (le model), le rendu (la vue) et l'interaction (le contrôleur)
- Implémentation avec l'usage de component (pour avoir des éléments modulaire pour le rendu)
- Avoir en tête les principes SOLID fondamentaux dans l'OOP
- Mise en oeuvre du pattern Singleton pour gérer globalement la liste des todos en l'absence de serveur.
- Pratique des closures nécessaires dans une appli modulaire notamment pour adapter le nombre de paramètres à passer à une fonction en fonction des contextes
- Décourverte des _Edge Injection_

Autres aspects :

- Mise en oeuvre d'une méthode de représentation en console d'une classe (observer les différences avec Python qui propose des méthodes génériques à surcharger pour ce type de besoin)
- Sensibilisation aux enjeux de performances notamment lié à l'actualisation du DOM via des ajouts/retraits de composants. Test avec les méthodes replaceChildren ou avec l'usage de DocumentFragment. Evaluation de la perfomance via les outils de développement du navigateur
- Mise en oeuvre d'un nouve HTMLélément <dialog> pour l'affichage d'une modal
