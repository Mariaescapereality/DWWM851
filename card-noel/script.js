export default class Maria2{
    constructor(){
    this.init();
    }

    div = document.createElement('div');
    div2 = document.createElement('div');
    div3 = document.createElement('div');

    init(){
       this.div.style.width = "100vw"
       this.div.style.height = "100vh"
       this.div.style.background = " top / contain url(./christmas23.gif)"
       this.div.style.position = "relative"

        document.body.append(this.div)

       this.div2.style.width = "100vw"
       this.div2.style.height = "100vh"
       this.div2.style.background = " top / contain no-repeat url(./train-9212_256.gif)"
       this.div2.style.position = "absolute"
       this.div2.style.top = "0"
       //this.div2.style.zIndex = "7"
        this.div.append(this.div2)

        this.div3.style.width = "100%"
       this.div3.style.height = "100%"
       this.div3.style.background = "center / contain no-repeat url(./text18.png)"
       this.div3.style.position = "absolute"
       this.div3.style.center = "0"
       //this.div2.style.zIndex = "7"
        this.div.append(this.div3)
    }

}