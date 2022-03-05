class Sushi {
    constructor(fishName) {
        this.fishName = fishName;
    }
} 


class Menu {
    constructor() {
        this.listOfSushi = [];
    }


    start() {
        let selection = this.mainMenu();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addSushi();
                    break;
                case '2':
                    this.viewSushiList();
                    break;
                case '3':
                    this.removeSushi();
                    break;
                default:
                    selection = 0;  
            }
            selection = this.mainMenu();
        } 
            alert('Exit');
    }  
     
    mainMenu() {
       return prompt(`
        0. Exit
        1. Add Sushi
        2. View Sushi List
        3. Remove Sushi
        `);
    }

    addSushi() {
        let name = prompt('Enter sushi name:');
       this.listOfSushi.push(new Sushi(name));
    }
    
    viewSushiList() {
        let view = '';
        for(let i = 0; i < this.listOfSushi.length; i++) {
            view += this.listOfSushi[i].fishName + '\n';
        }
        alert(view);
    }
            
    
    removeSushi() {
            const removeName = this.listOfSushi.pop();
            alert('Removed ' + removeName.fishName);
    }
    
}
    
let menu = new Menu();
menu.start();
