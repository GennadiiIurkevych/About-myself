class Home {
    constructor(home){
        this.home = home;
        this.render();
    }
    getTemplate() {
        return `
      
        <img src='../img/AboutMyself.jpg'>
        <h1>\u{417}\u{410}\u{41F}\u{420}\u{41E}\u{428}\u{423}\u{42E} \u{414}\u{41E} \u{422}\u{420}\u{415}\u{41D}\u{423}\u{412}\u{410}\u{41B}\u{42C}\u{41D}\u{418}\u{425} \u{417}\u{410}\u{41D}\u{42F}\u{422}\u{42C}</h1>
        <h3>\u{421}\u{41A}\u{41B}\u{410}\u{414}\u{410}\u{41D}\u{41D}\u{42F} \u{41F}\u{420}\u{41E}\u{413}\u{420}\u{410}\u{41C}\u{418}: 
          <p>- \u{422}\u{420}\u{415}\u{41D}\u{423}\u{412}\u{410}\u{41D}\u{42C}: \u{41D}\u{410} \u{414}\u{415}\u{41D}\u{42C}, \u{422}\u{418}\u{416}\u{414}\u{415}\u{41D}\u{42C}, \u{41C}\u{406}\u{421}\u{42F}\u{426}\u{42C};</p>
          <p>- \u{425}\u{410}\u{420}\u{427}\u{423}\u{412}\u{410}\u{41D}\u{41D}\u{42F}</p>
        </h3>
      
    `;
    }
    render() {
        const homeElement = document.createElement('div');
        homeElement.innerHTML = this.getTemplate();
        this.homeElement = homeElement;
    }
}
const home = new Home();
console.log(document.body);
document.body.append(home.homeElement);

//# sourceMappingURL=index.816e7b21.js.map
