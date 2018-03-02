function menuItems(){
    let menu = {
        starters:[{
                name: '3 Chicken Wings',
                description: 'Curb your craving with a PERi-PERi taster.',
                price: 3.60
            },
            {
                name: 'Houmous with PERi-PERi Drizzle',
                description: 'Pour smoky PERi-PERi oil over creamy houmous and dig in with strips of warm pitta.',
                price: 3.60
            },
            {
                name: 'Wing Roulette',
                description: '10 wings in a random variety of all PERi-PERi spices. You never know what youre gonna get!',
                price: 10.95
            }
        ],
        mains:[{
                name: '1/2 Chicken',
                description: 'Chick, chick, chick',
                price: 7.30
            },
            {
                name: '10 Chicken Wings',
                description: 'Chick, chick, chick',
                price: 10.95
            },
           {
                name: 'Chicken Butterfly',
                description: 'Two succulent chicken breasts joined by crispy skin.',
                price: 7.90
            }
        ],
        deserts:[{
                name: 'Vanilla',
                description: 'yum, yum, yum',
                price: 2.95
            },
            {
                name: 'Strawberry',
                description: 'yum, yum, yum',
                price: 2.95
            },
            {
                name: 'Mango',
                description: 'yum, yum, yum',
                price: 2.95
            }
        ],
    };

        return{
            all(){
                return menu;
            },
            starters(){
                return {starters : menu.starters};
            },
            mains(){
                return {mains : menu.mains};
            },
            deserts(){
                return {deserts : menu.deserts};
            },
            currentItem(currentMenu, indexMenu){
                return menu[currentMenu][indexMenu];
            }
        }
}

module.exports = menuItems;