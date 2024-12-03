export default class Rehabilitation {
  constructor (rehabilitation) {
    this.rehabilitation = rehabilitation;
    this.render();
  }

  getTemplate () {
    return `
      <div className="weightlifting" style="display: flex; background-color:  rgb(207, 129, 246);">
        <h2>РЕАБІЛІТАЦІЯ</h2>
          <p>Пропоную підбір вправ для:</p> 
            <ul>
              <li>коригування вад постави</li>
              <li>реабілітації після травм</li>
              <li>виправлення зміщень хребта та хребців</li>             
            </ul>
      </div>
    `
  }

  render() {
    const rehabilitationElement = document.createElement('div');
          rehabilitationElement.innerHTML = this.getTemplate();
     this.rehabilitationElement = rehabilitationElement;
  }
}