
export default class Home {
  constructor (home) {
    this.home = home;
    this.render();
  }

  getTemplate () {
    return `
      
        <img src='../img/AboutMyself.jpg'>
        <h1>ЗАПРОШУЮ ДО ТРЕНУВАЛЬНИХ ЗАНЯТЬ</h1>
        <h3>СКЛАДАННЯ ПРОГРАМИ: 
          <p>- ТРЕНУВАНЬ: НА ДЕНЬ, ТИЖДЕНЬ, МІСЯЦЬ;</p>
          <p>- ХАРЧУВАННЯ</p>
        </h3>
      
    `
  }

  render() {
    const homeElement = document.createElement('div');
          homeElement.innerHTML = this.getTemplate();
          this.homeElement = homeElement;
  }
}


