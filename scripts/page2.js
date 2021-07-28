// http://www.json-generator.com/api/json/get/cqoKnSojKG?indent=2
// http://www.json-generator.com/api/json/get/cqZILemGIy?indent=2
fetch(localStorage.getItem("textvalue"))
    .then(res => res.json())
    .then(data => setfacade(data))


function setfacade({units, distance, stand}) 
{
    var j = 0;
    if (distance == "down up") 
    {
        var table = document.getElementById('myTable')
        var table2 = document.getElementById('myTable2')
        var i = units
        var len = Object.keys(stand).length
        while (i > 0)
            i = setfront(i, stand, len, table, 1)
        i = units;
        while (i > 0)
            i = setrear(i, stand, len, table2, 1)
    } else {
        var table = document.getElementById('myTable')
        var table2 = document.getElementById('myTable2')
        var i = 1
        var len = Object.keys(stand).length
        while (i < units)
            i = setfront(i, stand, len, table, 2);
        i = 1;
        while (i < units)
            i = setrear(i, stand, len, table2, 2);
    }
}

function setrear(i, stand, len, table2, flag)
{
    var height = 0
    var j = 0
    while(stand[j] && stand[j].num != i)
        j++;
    if ((j == len) || (stand[j].depth == "half" && stand[j].position == "front"))
    {
        var row = `<tr>
                        <th>${i}</th>
                        <th class="blanck"></th>
                </tr>`
        table2.innerHTML += row
        if (flag == 1)
            i--
        else
            i++
    } else {
        while(height != stand[j].height)
        {
            var row = `<tr>
                            <th>${i}</th>
                            <th class="name">${stand[j].name}</th>
                    </tr>`
            table2.innerHTML += row
            height++
            if (flag == 1)
                i--
            else
               i++
        }
    }
    return(i);
}

function setfront(i, stand, len, table, flag)
{
    var height = 0
    var j = 0
    while(stand[j] && stand[j].num != i)
        j++;
    if ((j == len) || (stand[j].depth == "half" && stand[j].position == "back"))
    {
        var row = `<tr>
                        <th>${i}</th>
                        <th class="blanck"></th>
                </tr>`
        table.innerHTML += row
        if (flag == 1)
            i--
        else
            i++
    } else {
        while(height != stand[j].height)
        {
            var row = `<tr>
                            <th>${i}</th>
                            <th class="name">${stand[j].name}</th>
                    </tr>`
            table.innerHTML += row
            height++
            if (flag == 1)
                i--
            else
                i++
        }
    }
    return(i)
}