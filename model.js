const model = {
    chosenLoadoutIndex: '',
    AddNewLoadoutIndex: '',
    
    createLoadout: {
        loadoutDescription: '',
        attachment: [
            {type: 'muzzle', name: '',},
            {type: 'barrel', name: '',},
            {type: 'underbarrel', name: '',},
            {type: 'rearGrip', name: '',},
            {type: 'laser', name: '',},
            {type: 'optic', name: '',},
            {type: 'ammo', name: '',},
            {type: 'perk', name: '',},
            {type: 'stock', name: '',},
        ]
    },
    
    category: [
        {
            type: 'submachineguns',
            weapons: [
                {
                    name: 'MP5',
                    loadouts: [
                        {
                            loadoutDescription: 'Run and gun',
                            attachment: [
                                {type: 'muzzle', name: '',},
                                {type: 'barrel', name: 'FSS Mini',},
                                {type: 'underbarrel', name: 'Merc Foregrip',},
                                {type: 'rearGrip', name: '',},
                                {type: 'laser', name: '5mw Laser',},
                                {type: 'optic', name: '',},
                                {type: 'ammo', name: '45 Round Mags',},
                                {type: 'perk', name: 'Sleight of Hand',},
                                {type: 'stock', name: '',},
                            ]
                        },
                        {
                            loadoutDescription: 'Warzone',
                            attachment: [
                                {type: 'muzzle', name: '',},
                                {type: 'barrel', name: 'Monolithic Integral Suppressor.',},
                                {type: 'underbarrel', name: 'Merc Foregrip',},
                                {type: 'rearGrip', name: '',},
                                {type: 'laser', name: '5mw Laser',},
                                {type: 'optic', name: '',},
                                {type: 'ammo', name: '45 Round Mags',},
                                {type: 'perk', name: 'Sleight of Hand',},
                                {type: 'stock', name: '',},
                            ]
                        }
                    ],
                }
            ],
        },
        {
            type: 'marksmanrifles',
            weapons: [
                {
                    name: 'kar98k',
                    loadouts: [
                        {
                            loadoutDescription: 'Quickscope Multiplayer',
                            attachment: [
                                {type: 'muzzle', name: '',},
                                {type: 'barrel', name: '',},
                                {type: 'underbarrel', name: '',},
                                {type: 'rearGrip', name: 'Stippled Grip Tape',},
                                {type: 'laser', name: 'Tac Laser',},
                                {type: 'optic', name: 'Sniper Scope',},
                                {type: 'ammo', name: '',},
                                {type: 'perk', name: 'Sleight of Hand',},
                                {type: 'stock', name: 'FTAC Sport Comb',},

                            ],
                        },
                        {
                            loadoutDescription: 'Warzone',
                            attachment: [
                                {type: 'muzzle', name: 'Monolithic Suppressor',},
                                {type: 'barrel', name: 'Singuard Custom 27.6"',},
                                {type: 'underbarrel', name: '',},
                                {type: 'rearGrip', name: '',},
                                {type: 'laser', name: 'Tac Laser',},
                                {type: 'optic', name: 'Sniper Scope',},
                                {type: 'ammo', name: '',},
                                {type: 'perk', name: '',},
                                {type: 'stock', name: 'FTAC Sport Comb',},
                            ],
                        }
                    ],
                }
            ],
        },
        {
            type: 'sniperrifles',
            weapons: [],
        },
        {
            type: 'shotguns',
            weapons: [],
        },
        {
            type: 'assaultrifles',
            weapons: [],
        },
        {
            type: 'lightmachineguns',
            weapons: [],
        },
    ],
}