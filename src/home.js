export default class Home {
  constructor (home) {
    this.home = home;
    this.render();
  }

  getTemplate () {
    return `
        <h1 class="home">ЗАПРОШУЮ ДО ТРЕНУВАЛЬНИХ ЗАНЯТЬ <br> з фітнесу, важкої атлетики, реабілітації</h1>
        <h4 class="home">СКЛАДАННЯ ПРОГРАМИ:</h4>
          <p class="home">- ТРЕНУВАНЬ НА: ДЕНЬ, ТИЖДЕНЬ, МІСЯЦЬ;</p>
          <p class="home">- ХАРЧУВАННЯ;</p>
    `
  }

  render() {
    const homeElement = document.createElement('div');
          homeElement.className = "startPage";
          homeElement.innerHTML = this.getTemplate();
          this.homeElement = homeElement;

    const img = document.createElement('img');
          img.className = "home-img"; 
          img.src = new URL('../img/AboutMyself.jpg/', import.meta.url);
          
          homeElement.append(img);

          const img2 = document.createElement('img');
          img2.className = "plan"; 
          img2.src = new URL('../img/Plan.png/', import.meta.url);
          
          homeElement.append(img2);

  }
}