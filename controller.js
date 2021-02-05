//controller

 
 //     //function newLoadout() {
    // let x= {
    //     loadoutDescription: 'Hardscope',
    //     muzzle: 'Monolithic Suppressor',

    // }

//     loadoutModel.kar98K.push(x)
// }


function chooseLoadoutIndex(indexCat, indexWeap, index) {
    if (model.chosenLoadoutIndex ===  index) {
        model.chosenLoadoutIndex = '';
    }
    else {
        model.chosenLoadoutIndex = index;
    }
    
    weaponPageView(indexCat, indexWeap);
    
}

function deleteLoadout(indexCat, indexWeap) {
    model.category[indexCat].weapons[indexWeap].loadouts.splice(model.chosenLoadoutIndex, 1);
    model.chosenLoadoutIndex = '';
    weaponPageView(indexCat, indexWeap);
}

function createNewLoadout(indexCat, indexWeap,) {
    model.category[indexCat].weapons[indexWeap].loadouts.push(model.createLoadout);
    
    weaponPageView(indexCat, indexWeap);
}


