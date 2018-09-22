!function(){
	var view = document.querySelector('#topNavBar')
	var controller = {
		view:null,
		init(view){
			this.view=view,
			this.bindEvents()
		},
		bindEvents(view){
			view=this.view
			window.addEventListener('scroll',function(eee){
				if(window.scrollY>0){
					this.actives()
				}else{
					this.disactives()
				}
			}.bind(this))
		},
		actives() {view.classList.add('sticky')},
		disactives() {view.classList.remove('sticky')}
	}
	controller.init(view)

}.call()