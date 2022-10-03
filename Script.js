
//1-Function to Create Grid
function PixelCanvasCreate() {
    let ScreenCanvas=document.getElementsByClassName('Screen')

    for (let i = 0; i < 11; i++) {
        let myRow = document.createElement('div')
        myRow.id = 'row' + i

        ScreenCanvas.appendChild(myRow)

        
    }
    
}

BTNGRIDNEW = document.getElementsByClassName('buttonclear')
BTNGRIDNEW.onclick = PixelCanvasCreate()