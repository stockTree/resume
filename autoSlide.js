!function(){
window.addEventListener('scroll',function(eee){
	let minIndex = 0

				let datas = document.querySelectorAll('[data-x]')
				for(var i=1;i<datas.length;i++){
					if(Math.abs(datas[i].offsetTop-window.scrollY) < Math.abs(datas[minIndex].offsetTop-window.scrollY)){
						minIndex = i
					}

					datas[minIndex].classList.add('transforms')

					let id = datas[minIndex].id

					skills.classList.add('width')
					datas[minIndex].classList.remove('width')

					let a = document.querySelector('a[href="#'+id+'"]')
					let li = a.parentNode
					let brother = li.parentNode.children
					li.classList.add('delay')
				for(var j=0;j<brother.length;j++){
					brother[j].classList.remove('highLight')		
				}
				li.classList.add('highLight')
				}
})
}.call()