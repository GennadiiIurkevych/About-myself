
export default class Home {
  constructor (home) {
    this.home = home;
    this.render();
  }

  getTemplate () {
    return `
        <img src='../img/AboutMyself.jpg'>
        <h1>ЗАПРОШУЮ ДО ТРЕНУВАЛЬНИХ ЗАНЯТЬ</h1>
        <h2>ФІТНЕС</h2>
        <h2>ВАЖКА АТЛЕТИКА</h2>
        <h2>РЕАБІЛІТАЦІЯ</h2>
    `
  }

  render() {
    const homeElement = document.createElement('div');
          homeElement.innerHTML = this.getTemplate();
          this.homeElement = homeElement;
  }
}


