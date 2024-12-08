import Header from './header.js';
const header = new Header();

import About from './about.js';
const about = new About();

import Home from './home.js';
const home = new Home();

import Fitness from './fitness.js';
const fitness = new Fitness();

import Weightlifting from './weightlifting.js';
const weightlifting = new Weightlifting();

import Rehabilitation from './rehabilitation.js';
const rehabilitation = new Rehabilitation();
export default class App {
  constructor () {
  this.render();
  };

  render() {
    root.append(header.element);
    root.append(about.aboutElement);
    root.append(home.homeElement);
    root.append(fitness.fitnessElement);
    root.append(weightlifting.weightliftingElement);
    root.append(rehabilitation.rehabilitationElement);
  }

}

      