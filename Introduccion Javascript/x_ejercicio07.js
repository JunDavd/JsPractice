/**
 * Crear un array bidimensional con 5 columnas y con 3 filas como las que aparecen abajo

--*--
-***-
*****
 */


const treeItems = [
    ['-','-','*','-','-'], //user 1
    ['-','*','*','*','-'], //user 1
    ['*','*','*','*','*'], //user 1
]

let printTree = ''

for (const treeitem of treeItems) { 
    for (const item of treeitem) {
        printTree = `${printTree}${item}`
    }
    printTree = `${printTree}\n`
}

console.log(printTree)