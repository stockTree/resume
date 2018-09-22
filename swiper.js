!function(){
    var view = document.querySelector('#swiperSlides')
    console.log(view)
    console.log(typeof(view))
    var controller = {
        view:null,
        swiper:null,
        swiperOptions:{
            loop: true,
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                },
                // 如果需要前进后退按钮
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                }
        },
        init(view){
            this.view = view
            this.initSwiper()
        },
        initSwiper(){
            this.swiper = new Swiper (
                view.querySelector('.swiper-container'), 
                this.swiperOptions
            )  
        }
    }
    controller.init(view)
}.call()