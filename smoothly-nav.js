-function(){
var liList = document.querySelectorAll('#topNavBar>nav>ul>li')
for(var i= 0;i<liList.length;i++){
    liList[i].onmouseenter=function(x){
 c=x.target
c.classList.add('active')
b=c.getElementsByTagName('ul')[0]
if(b !=undefined){
    b.classList.add('active')
}
    }
liList[i].onmouseleave=function(x){
// var c=x.target
c.classList.remove('active')
 b=c.getElementsByTagName('ul')[0]
if(b !=undefined){
    b.classList.remove('active')
}
}	
}

let aItems = document.querySelectorAll('#topNavBar>nav>ul>li>a')

for(let a=0;a<aItems.length;a++){
    
    aItems[a].onclick = function(b){
        b.preventDefault()
    let	href=b.target.getAttribute('href')
    let elementt = document.querySelector(href)
        let top = elementt.offsetTop
        let nowHeight = window.scrollY
        let distance = top-100
        let leng = distance - nowHeight
        let t= Math.abs(leng/2)
        if(t>500){
            t = 500
        }
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        var coords = {  y: nowHeight }; 
        var tween = new TWEEN.Tween(coords) 
        .to({ y:distance},t) 
        .easing(TWEEN.Easing.Quadratic.Out) 
        .onUpdate(function() { 
            window.scrollTo(0 ,coords.y)
        })
        .start(); 
        
    }
}
}.call()
