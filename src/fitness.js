export default class Fitness {
  constructor (fitness) {
    this.fitness = fitness;
    this.render();
  }

  getTemplate () {
    return `
      <div className="fitness" style="display: flex; background-color: aqua;">
        <h2>ФІТНЕС</h2>
              <p>Корекція фігури:</p>
                <ul>
                  <li>набір м'язевої маси</li>
                  <li>формування атлетичної фігури</li>
                  <li>зниження ваги тіла</li>
                  <li>покращення функціонального стану організму</li>              
                </ul>
              <img style="width: 200px; height: 300px;" src="../img/WomanBody2.png">
              <img style="width: 200px; height: 300px;" src="../img/ManBodyFront.png">
      </div>
    `
  }

  render() {
    const fitnessElement = document.createElement('div');
          fitnessElement.innerHTML = this.getTemplate();
          this.fitnessElement = fitnessElement;
  }
}
