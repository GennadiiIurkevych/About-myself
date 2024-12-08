



export default class Fitness {
  constructor (fitness) {
    this.fitness = fitness;
    this.render();
  }

  getTemplate () {
    return `
      <div class="fitness">
        <h2>ФІТНЕС</h2>
              <p>Корекція фігури:</p>
                <ul>
                  <li>набір м'язевої маси</li>
                  <li>формування атлетичної фігури</li>
                  <li>зниження ваги тіла</li>
                  <li>покращення функціонального стану організму</li>              
                </ul>
      </div>
    `
  }

  render() {
    const fitnessElement = document.createElement('div');
          fitnessElement.className = "fitnessWrapper";
          fitnessElement.innerHTML = this.getTemplate();
          this.fitnessElement = fitnessElement;

    const img = document.createElement('img');
          img.className = "fitness"; 
          img.src = new URL('../img/WomanBody2.png/', import.meta.url);

          fitnessElement.append(img);

    const img2 = document.createElement('img');
          img2.className = "fitness"; 
          img2.src = new URL('../img/ManBodyFront.png/', import.meta.url);

          fitnessElement.append(img2);

    const img3 = document.createElement('img');
          img3.className = "fitness"; 
          img3.src = new URL('../img/WomanBody.png/', import.meta.url);

          fitnessElement.append(img3);

    const img4 = document.createElement('img');
          img4.className = "fitness"; 
          img4.src = new URL('../img/ManBodyFront3.png/', import.meta.url);

          fitnessElement.append(img4);

  }
}

