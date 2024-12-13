
export default class About {
  constructor (about) {
    this.about = about;
    this.render();
  }

  getTemplate () {
    return `
        <h1 class="about">ГЕННАДІЙ ЮРКЕВИЧ</h1>
        <h3 class="about">майстер спорту України міжнародного класу з важкої атлетики
          <p>- чемпіон та призер, рекордсмен національних змагань</p>
          <p>- чемпіон та призер, рекордсмен чемпіонатів Світу та Європи серед майстрів (понад 35 років)</p>
          <p>- стаж навчально-тренувальних занять біля 40 років<br> ДЮСШ "ЕНЕРГЕТИК"<br>СК "ЕЛЕКС", СК "ОЛІМП"</p> 
        </h3>
    `
  }

  render() {
    const aboutElement = document.createElement('div');
          aboutElement.className = "about";
          aboutElement.innerHTML = this.getTemplate();
          this.aboutElement = aboutElement;

    const img = document.createElement('img');
          img.className = "about"; 
          img.src = new URL('../img/Gennadii.png/', import.meta.url);
          
          aboutElement.append(img);

  }
}
