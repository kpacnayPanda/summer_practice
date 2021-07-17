fetch(
    'http://www.json-generator.com/api/json/get/casKcqGphK?indent=2'
    )
    .then(res => res.json())
    .then(data => setfacade(data));


function setfacade({units, distance}) 
{
    setLine(units, distance)
    // document.body.insertAdjacentHTML('beforeend', 
    // `
    //     <div class="nums">${setLine(units, distance)}</div>
    // `)
}

function setLine(units, distance) 
{
    if (distance == "down up") 
    {
        i = units;
        // document.body.insertAdjacentHTML('beforeend',
        // `
        //     <ul>
        // `);
        while (i != 0) 
        {
            document.body.insertAdjacentHTML('beforeend',
            `
                <ul>
                    <p>${i}</p>
                </ul>
            `);
            i--;
        }
        // document.body.insertAdjacentHTML('beforeend',
        // `
        //     </ul>
        // `);
    } else {

    }
}

// <div class="nums"><ul>${i}</ul></div>