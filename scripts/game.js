// Resource Card Enum
// 0 - Wood
// 1 - Brick
// 2 - Sheep
// 3 - Wheat
// 4 - Ore

// Development Card Enum
// 0 - Knight
// 1 - Victory Point
// 2 - Road Building
// 3 - Year of Plenty
// 4 - Monopoly

var catan = {
data: {
    p1: {
        color: "red",
		pieces: {
			settlements: 5,
			cities: 4,
			roads: 15
		},
		resources: [],
		knights: 0,
		dev: [],
		points: 0
	},
	p2: {
	    color: "blue",
	    pieces: {
			settlements: 5,
			cities: 4,
			roads: 15
		},
		resources: [],
		knights: 0,
		dev: [],
		points: 0
	},
	board: {
        dice: [1, 2],
		tiles: {}, //19
		intersections: {},
		ports: {},
		roads: {}
	},
	bank: {
		dev: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 1, 1, 1, 1,
			2, 2, 3, 3, 4, 4]
	}
},
ops: {
    placeSettlement: new function () {
    },

}
}
