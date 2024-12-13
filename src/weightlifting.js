export default class Weightlifting {
  constructor (weightlifting) {
    this.weightlifting = weightlifting;
    this.render();
  }

  getTemplate () {
    return `
      <div class="weightlifting">
        <h2>ВАЖКА АТЛЕТИКА</h2>
              <p>Вивчення та вдосконалення техніки виконання:</p>
                <ul>
                  <li>змагальних вправ - ривка та поштовху</li>
                  <li>спеціально підготовчих вправ</li>
                  <li>загально підготовчих вправ</li>
                  <li>підвищення рівня майстерності - від масових розрядів до майстра спорту України міжнародного класу</li>
                  <li>покращення психологічної підготовки для навчально-тренувального процесу підготовчого та змагального періоду</li>             
                </ul>

      </div>
    `
  }

  render() {
    const weightliftingElement = document.createElement('div');
          weightliftingElement.className = "weightliftingWrapper";
          weightliftingElement.innerHTML = this.getTemplate();
     this.weightliftingElement = weightliftingElement;

     const img = document.createElement('img');
           img.className = "weightlifting"; 
           img.src = new URL('../img/Clean and jeck.jpg/', import.meta.url);

           weightliftingElement.append(img);

    const img2 = document.createElement('img');
          img2.className = "weightlifting"; 
          img2.src = new URL('../img/weightlifting-Snatch.jpg/', import.meta.url);
          
          weightliftingElement.append(img2);

  }
}
