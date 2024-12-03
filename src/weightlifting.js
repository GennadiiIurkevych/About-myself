export default class Weightlifting {
  constructor (weightlifting) {
    this.weightlifting = weightlifting;
    this.render();
  }

  getTemplate () {
    return `
      <div className="weightlifting" style="display: flex; background-color:  rgb(112, 243, 121);">
        <h2>ВАЖКА АТЛЕТИКА</h2>
              <p>Вивчення та вдосконалення техніки виконання:</p>
                <ul>
                  <li>змагальних вправ - ривка та поштовху</li>
                  <li>спеціально підготовчих вправ</li>
                  <li>загально підготовчих вправ</li>
                  <li>підвищення рівня майстерності - від масових розрядів до майстра спорту України міжнародного класу</li>
                  <li>покращення психологічної підготовки для навчально-тренувального процесу підготовчого та змагального періоду</li>             
                </ul>
              <img style="width: 500px; height: 200px;" src="../img/Clean and jeck.jpg">
              <img style="width: 500px; height: 200px;" src="../img/weightlifting-Snatch.jpg">
      </div>
    `
  }

  render() {
    const weightliftingElement = document.createElement('div');
          weightliftingElement.innerHTML = this.getTemplate();
     this.weightliftingElement = weightliftingElement;
  }
}
