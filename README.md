# Pendu

Pendu pour le challenge du discord [café des devs](https://discord.gg/cafedesdevs).

Un pendu tout simple. Ce projet mériterai énormément plus de temps pour ressembler à ce que j'imaginais mais le délai assez court et le bac font que beacoup de fonctionnalités n'ont pas été développées. Le code n'est ni beau ni optimisé mais il marche ¯\\_(ツ)_/¯

## Installation :
Téléchargez la dernière release, soit avec les installeur, soit directement avec l'exécutable. Les binaires sont seulement pour windows x64. Si vous n'êtes pas sur cette plateforme, [compilez le projet](#compiler).

## Jouer :
Rien de plus simple : on clique sur solo dans le menu, puis on tape les lettres, ou on met notre proposition dans la zone de texte prévue.
Si le café est rempli vous avez perdu !

## Détail

Pendu en solo avec une liste de mots prédéfinis sur le thème de la programmation en générale.
La liste des mots est faite maison, il n'est pas impossible qu'une ou deux fautes se soient glissées dans le lot.
Le mode multijoueur n'a pas eu le temps d'être implémenté.
L'animation du café bug si on met des lettres avant qu'elle ait le temps de finir mais le gameplay n'est pas affecté.
Si c'était pour faire des langage web, pourquoi ne pas avoir fait un site ? Effectivement cependant l'idée première était de coder la connexion au multijoueur avec le backend Rust. Tauri était un bon outil pour créer une application avec le backend backend en Rust. De même, le serveur aurait dû être codé en Rust.

## Compiler
Si vous voulez compiler le projet vous même, il faut:
- Installer rust ainsi que node js.
- Cloner le projet.
- A la racine du projet, exécuter : `npm install`
- Et finalement `npm run tauri dev` pour une session de dev, `npm run tauri build` pour build un exécutable et les installateurs. 