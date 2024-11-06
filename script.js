let Table = document.getElementById("table")
const contents = [
    {itemtitle:"Primeiro bloco", itemdescription:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. ",link:"https://www.google.com.br/"},
    {itemtitle:"Segundo bloco", itemdescription:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. "},
    {itemtitle:"Terceiro bloco", itemdescription:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. "},
    {itemtitle:"Quarto bloco", itemdescription:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. "},
    {itemtitle:"Quinto bloco", itemdescription:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. "},
    {itemtitle:"Sexto bloco", itemdescription:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. "}
]
function populatecells() {
    contents.forEach(item => {
        //create the elements
        let newdiv = document.createElement('a')
        let newdivtitle = document.createElement('h2')
        let newdivpara = document.createElement('p')
        //populate 
        let title = document.createTextNode(item.itemtitle)
        let descrip = document.createTextNode(item.itemdescription)
        //append
        newdivpara.appendChild(descrip)
        newdivtitle.appendChild(title)
        newdiv.appendChild(newdivtitle)
        newdiv.appendChild(newdivpara)
        newdiv.href = item.link
        Table.appendChild(newdiv)
    });
}
populatecells()


function augfont(type) {
    let el = document.getElementById("main")
    let fontsize = window.getComputedStyle(el,null).getPropertyValue("font-size")
    fontsize = parseFloat(fontsize)
    if (type == "up") {
        el.style.fontSize = (fontsize + 1) + "px"
        
        
        
    } else {
        el.style.fontSize = (fontsize - 1) + "px"
    }
    console.log(fontsize);
    
    
}
