function move(id,px,dir,pxs){
    var dfg;
    var obj = document.getElementById(id);
    if(obj.style.right != 0){
    var x = obj.style.right.replace("px","");   
    dfg = 1;    
    }else{
    var x = obj.style.left.replace("px","");
    dfg = 2;
    }
    var saako = true;
    x -= 1; x += 1;
    var y = obj.style.top.replace("px","");
    kerrat = 0;
    y -= 1; y += 1;
    ala();
    function ala(){
        if(kerrat < px){
        kerrat += 3;    
        if(dir == "up"){
            y -= 3;
        }
        if(dir == "down"){
            y += 3;
        }
        if(dir == "right"){
         if(dfg == 2){
            x += 3;
         }else{
            x -= 3;
         }}
        if(dir == "left"){
        if(dfg == 2){
            x -= 3;
        }else{
            x += 3;
        }
        }   
        obj.style.top = y + "px";
        if(dfg == 2){
        obj.style.left = x + "px";
       }else{
        obj.style.right = x + "px";
       }
        setTimeout(function(){ala();}, 1000 / pxs * 3);
    }
    }
 
}