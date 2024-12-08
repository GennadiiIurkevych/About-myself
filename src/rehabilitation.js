export default class Rehabilitation {
  constructor (rehabilitation) {
    this.rehabilitation = rehabilitation;
    this.render();
  }

  getTemplate () {
    return `
      <div class="rehabilitation">
        <h2>РЕАБІЛІТАЦІЯ</h2>
          <p>Пропоную підбір вправ для:</p> 
            <ul>
              <li>коригування вад постави</li>
              <li>реабілітації після травм</li>
              <li>виправлення зміщень хребта та хребців <br> - шийний <br> - грудний <br> - поперековий відділи</li>             
            </ul>
      </div>
    `
  }

  render() {
    const rehabilitationElement = document.createElement('div');
          rehabilitationElement.className = "rehabilitationWrapper";
          rehabilitationElement.innerHTML = this.getTemplate();
     this.rehabilitationElement = rehabilitationElement;

     const img = document.createElement('img');
           img.className = "rehabilitation"; 
           img.src = new URL('../img/vertebraeFull.png/', import.meta.url);

           rehabilitationElement.append(img);

const img2 = document.createElement('img');
     img2.className = "rehabilitation"; 
     img2.src = new URL('../img/cervical.png/', import.meta.url);

     rehabilitationElement.append(img2);

const img3 = document.createElement('img');
     img3.className = "rehabilitation"; 
     img3.src = new URL('../img/Lumbar.png/', import.meta.url);

     rehabilitationElement.append(img3);

const img4 = document.createElement('img');
     img4.className = "rehabilitation"; 
     img4.src = new URL('../img/vertebraeRentgen.png/', import.meta.url);

     rehabilitationElement.append(img4); 





  }
}