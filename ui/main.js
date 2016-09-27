console.log('Loaded!');
var button=document.getElementById('counter');
button.onclick =function () {
    var request = new HMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readystate===HMLHttpRequest.DONE) {
            if (request.status===200){
                var counter =request.responsetext;
                var span =document.getElementById('count');
                span.innerHTML =counter.tostring();
            }
        }
    };
    request.open('GET','http://ravindra999p.imad.hasura-app.io/counter',true);
    request.send(null);
};
var nameinput=document.getElementById('name')
var name= nameInput.value;
var submit=document.getElementById('submit_button');
submit.onclick= function() {
    var names=['name1','name2'];
    var list='';
    for(var i=0;i<names.length;i++) {
        list+= '<li>'+ names[i]+ '</li>';
}
var ul = document.getElementById('name list');
ul.innerHTML= list;
};

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval=setInterval(moveRight,50);
    
}
