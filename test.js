let obj = {
    id: 1,
    label: 'A',
    ChildNodes: [
        {
            id: 2,
            label: 'B',
            ChildNodes: [
                {
                    id: 5,
                    label: 'E',
                    ChildNodes: []
                }, {
                    id: 6,
                    label: 'F',
                    ChildNodes: []
                }, {
                    id: 7,
                    label: 'G',
                    ChildNodes: []
                }
            ]
        },
        {
            id: 3,
            label: 'C',
            ChildNodes: []
        },
        {
            id: 4,
            label: 'D',
            ChildNodes: [
                {
                    id: 8,
                    label: 'F',
                    ChildNodes: []
                }, {
                    id: 9,
                    label: 'I',
                    ChildNodes: []
                }
            ]
        }
    ]
};

function f(obj, number) {
    let keys = Object.keys(obj);
    keys.forEach(key => {
        let isArr = Array.isArray(obj[key]);
        if (isArr) {
            obj[key].forEach(key2 => {
                if (key2.id === number) {
                    console.log(key2);
                }
                console.log(key2.id === number);
                f(key2)
            })
        } else {
            return false
        }
    })
}
