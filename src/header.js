


export default class Header {
  constructor (header) {
    this.header = header;
    this.render();
  }

  getTemplate () {
  
    return `
        <p class="nav">МІЖНАРОДНИЙ СПОРТИВНИЙ КЛУБ "IRON BEES"</p>
        <div class="nav">ПРО СЕБЕ</div>
        <div class="nav">ФІТНЕС</div>
        <div class="nav">ВАЖКА АТЛЕТИКА</div>
        <div class="nav">РЕАБІЛІТАЦІЯ</div>
    `
  }

  render() {
    const element = document.createElement('nav');
          element.className = "navigation";
          element.innerHTML = this.getTemplate();
          this.element = element;
  }
}

