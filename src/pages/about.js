import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <div>
      <h1>Une histoire de "motivation"</h1>
      <p>
        Dans un métier comme le mien, nous sommes sans cesse confronté au
        problème de l'apprentissage et de la maîtrise.<br />
        De l'appréhension d'un nouveau concept à la bonne utilisation d'un
        ancien, la saisie et le partage sont les fondements d'une transmission
        connaissance réussie.<br />
        Aimant partager et faire comprendre des choses, un blog semble tout à
        fait intéressant pour pouvoir écrire quelques trucs qui peuvent être lu
        par la suite.<br />
        Seul obstacle à l'horizon, la "procrastination".<br />
        Voyons ce que cela peut donner et bonne lecture !
      </p>
      <h1>Technologies</h1>
      <ul>
        <li>
          JavaScript
          <ul>
            <li>Angular</li>
            <li>AngularJS</li>
          </ul>
        </li>
      </ul>
    </div>
  </Layout>
);

export default AboutPage;
