//import './styles.css';


export default class Header {
  constructor (header) {
    this.header = header;
    this.render();
  }

  getTemplate () {
  
  // <span><img className='logo' src='../img/Iron bees logo.jpg'></span>
    return `
        
        <p>МІЖНАРОДНИЙ СПОРТИВНИЙ КЛУБ "IRON BEES"</p>
        <div className="nav">ФІТНЕС</div>
        <div className="nav">ВАЖКА АТЛЕТИКА</div>
        <div className="nav">РЕАБІЛІТАЦІЯ</div>
    `
  }

  render() {
    const element = document.createElement('nav');
          element.innerHTML = this.getTemplate();
          this.element = element;
  }
}

