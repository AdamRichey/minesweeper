function new1(){
    $('#x').empty();
    board = []
    y=0
    for(var y=0; y<8; y++){
        for(var x=0; x<8; x++){
            $('#x').append('<button onclick=hit(' + x + ',' +  y + ')></button>')
            board.push({
                x:x,
                y:y,
            })
        }
        $('#x').append('<br>')     
    }
    mines()
}

function new2(){
    $('#x').empty();
    board = []
    y=0
    for(var y=0; y<16; y++){
        for(var x=0; x<16; x++){
            $('#x').append('<button onclick=hit(' + x + ',' +  y + ')></button>')
            board.push({
                x:x,
                y:y,
            })
        }
        $('#x').append('<br>')     
    }
    mines()
}

function new3(){
    $('#x').empty();
    board = []
    y=0
    for(var y=0; y<16; y++){
        for(var x=0; x<31; x++){
            $('#x').append('<button onclick=hit(' + x + ',' +  y + ')></button>')
            board.push({
                x:x,
                y:y,
            })
        }
        $('#x').append('<br>')     
    }
    mines()
}

function mines(){
    if(board.length===64){
        mines = 10
    }
    else if(board.length===256){
        mines = 40
    }
    else{
        mines = 99
    }
    placemines()
}

function placemines(){
    for(var i=0; i<mines;i++){
        console.log('MINE')
    }
    console.log(board)
}

function hit(x,y){
    console.log(x)
    console.log(y)
}





//beginner 8x8 and 10 mines
//intermediate 16x16 and 40 mines
//expert 31x16 and 99 mines