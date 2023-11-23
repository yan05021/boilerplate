# boilerplate-test-technique

Votre objectif consiste à intégrer la maquette du formulaire joint en une application fonctionnelle en utilisant Node.js sous forme d'API RESTful, avec une interface utilisateur en React.

Voici le lien de la maquette simplifié (pensez à vous authentifier sinon nous n'aurez accès aux outils de survol et d'analyse de la maquette)
https://www.figma.com/file/vCjJUkBtddqHBAfvxYHSW4/Untitled?type=design&node-id=0-1&mode=design&t=lS3whgdpWlxjwQlo-0

## Marche à suivre
- Faire un fork du projet et push votre travail une fois fini.

## Specifications :
- Tous les champs du formulaire sont requis.
- l'application front doit être accessible sur l'url "/co2-data-update/form"
- Le champ email ne doit pas pouvoir contenir autre chose qu'un email sinon un message d'erreur s'affiche sous le champ.
- Le champ numéro de téléphone ne doit pas pouvoir contenir autre chose que des chiffre et le caractère "+" dans une limite de 10 caractères numérique et 1 caractère spécial
- L'utilisateur doit avoir la possibilité d'éditer un brouillon, l'utilisateur doit pouvoir accéder à la route /co2-data-update/form avec la query "draft=12345" ce qui aurra pour effet de récupérer les données au près de l'api et de pré-remplir les champs texte.
- À vous de créer la route API pour soumettre les données du formulaire à l'appuie du bouton "Commencer"
- Pour chaque requêtes qui arrive sur l'api il faut conserver une trace (date + intituler de la requête) dans un fichier de log qui sera créer lors de la première réception de requête, le fichier de log doit porter dans son nom la date du jour + le nom "-log.txt" en utilisant la librairie native de nodejs "fs" pour file systeme.
- Les liste des données enregistrées doivent être log dans la console côté backend.
- N'oubliez pas d'optimiser pour la version mobile !

Ce test sera suivi d'une session de retour avec l'équipe. Si vous avez des questions, n'hésitez pas à me les poser. Bonne chance !
