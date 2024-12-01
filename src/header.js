//import './styles.css';


export default class Header {
  constructor (header) {
    this.header = header;
    this.render();
  }

  getTemplate () {
    return `
        <div className="nav">FITNESS</div>
        <div className="nav">WEIGHTLIFTING</div>
        <div className="nav">REHABILITATION</div>
    `
  }

  render() {
    const element = document.createElement('div');
          element.innerHTML = this.getTemplate();
          this.element = element;
  }
}

