// View
mainPageView();
function mainPageView() {
    let html = '';
    html += `
        <h1>Call of Duty Modern Warfare Loadouts</h1>
    `;
    for (let i = 0; i < model.category.length; i++) {
        html += `<button onclick="gunPageView(${i})">${model.category[i].type}</button>`;
    }
    document.getElementById('app').innerHTML = html;
}

function gunPageView(index) {
    let html = '';
    html += `
        <h2>${model.category[index].type}</h2>
    `;
    for (let i = 0; i < model.category[index].weapons.length; i++) {
        html += `
            <button onclick="weaponPageView(${index}, ${i})">${model.category[index].weapons[i].name}</button>
        `;
    }
    document.getElementById('app').innerHTML = html;
}


function weaponPageView(indexCat, indexWeap) {
    let weapon = model.category[indexCat].weapons[indexWeap];
    let html = '';
    html += `
        <h3>${weapon.name}</h3>
    `;
    for (let i = 0; i < weapon.loadouts.length; i++) {
        html += `
            <div>
                <button onclick="showLoadoutView(${indexCat}, ${indexWeap}, ${i})">
                ${weapon.loadouts[i].loadoutDescription}</button>
                `;
                if (model.chosenLoadoutIndex ===i) {
                    html += `
                <input type="checkbox" checked onchange="chooseLoadoutIndex(${indexCat}, ${indexWeap}, ${i})">`;
                }
                else {
                    html += `
                    <input type="checkbox" onchange="chooseLoadoutIndex(${indexCat}, ${indexWeap}, ${i})">
                    `;
                }
                html += `                
            </div>
                `;
    }
    if (model.chosenLoadoutIndex === '') {
        html += `
        <button disabled onclick="deleteLoadout(${indexCat}, ${indexWeap})">Delete loadout</button>
        <button disabled >Change loadout</button>
        `;
    }
    else {
        html += `
            <button onclick="deleteLoadout(${indexCat}, ${indexWeap})">Delete loadout</button>
            <button>Change loadout</button>
            `;
        }
        html += `
        <button onclick="createNewLoadoutView(${indexCat}, ${indexWeap})">Add new loadout</button>
        `;
    document.getElementById('app').innerHTML = html;
}

function showLoadoutView(indexCat, indexWeap, index) {
    let weapon = model.category[indexCat].weapons[indexWeap];
    let html = '';
    html += `
        <h1>${weapon.loadouts[index].loadoutDescription}</h1>
    `;
    
    for (let i = 0; i < weapon.loadouts[index].attachment.length; i++) {
        if (weapon.loadouts[index].attachment[i].name !== '') {
            html += `
                <div>
                    <h3>${weapon.loadouts[index].attachment[i].type}:</h3>
                    <h2>${weapon.loadouts[index].attachment[i].name}</h2>
                </div>
            `;
        }
    }
    document.getElementById('app').innerHTML = html;
}

function createNewLoadoutView(indexCat, indexWeap,) {
    let weapon = model.category[indexCat].weapons[indexWeap];
    let html = '';
    html += `
    <h3>${weapon.name}</h3>
    <label for="createDescriptionInput">Description</label>
    <input id="createDescriptionInput" type="text" onchange="model.createLoadout.loadoutDescription = this.value">
    `;

    for ( let i = 0; i < model.createLoadout.attachment.length; i++) {
        html += `
        <label for="createInput${i}">${model.createLoadout.attachment[i].type}</label>
        <input id="createInput${i}" type="text" onchange="model.createLoadout.attachment[${i}].name = this.value"></input>
    `;
    }
    html += `
    <button onclick=" createNewLoadout(${indexCat}, ${indexWeap})">Save loadout</button> 
    
    `;

    document.getElementById('app').innerHTML = html;
}