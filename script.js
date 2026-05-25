body{
    margin:0;
    overflow:hidden;
    font-family:Arial;
    background:black;
}

#menu{
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background:#1e1e1e;
    color:white;
    z-index:10;
}

h1{
    font-size:70px;
    margin-bottom:30px;
}

.games{
    display:flex;
    flex-direction:column;
    gap:15px;
}

button{
    padding:20px 40px;
    font-size:25px;
    border:none;
    border-radius:12px;
    background:limegreen;
    color:white;
    cursor:pointer;
}

button:hover{
    background:green;
}

#crosshair{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    color:white;
    font-size:30px;
    display:none;
    pointer-events:none;
}

canvas{
    display:block;
}
