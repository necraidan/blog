import Link from 'gatsby-link';
import React from 'react';

const Prettify = () => (
  <div>
    <h1>
      Lancer <b>prettier</b> sur tous les JS/TS d'un répertoire
    </h1>
    <p>
      Récemment, j'ai repris le travail d'un projet transverse, principalement
      créer par des personnes n'ayant pas le temps , d'en prendre justement, de
      mettre au clair les diverses convention de code du projet.
    </p>
    <p>
      Ayant <b>prettier</b> d'installé sur mon vscode, je me suis demandé si il
      était possible de faire passer l'outil sur l'ensemble des fichiers TS du
      projet
    </p>

    <p>Bonne nouvelle !</p>
    <p>
      Non seulement c'est possible, mais on peut l'automatiser avec une tâche
      npm
    </p>
    <code>npm i -g prettier</code>
    <code>"prettify": "prettier --write src/**/*.ts",</code>
    <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7325bf88e191e71e966ec0b260d2d91b&auto=format&fit=crop&w=1350&q=80" />
    <Link to="/about">Go to this amazing about page !</Link>
  </div>
);

export default Prettify;
