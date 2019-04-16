{
    let view = {
        el: '#main',
        init(){
            this.$el = $(this.el)
        },
        getHeight(){
            let type_number = this.$el.find('.type-list').children().length
            let borderBar_height = this.$el.find('.borderBar').height()
            this.type_height = parseInt(borderBar_height,10) / parseInt(type_number)
            this.half_height = this.type_height / 2
            //this.half_circle_height = this.$el.find('.circle').height() / 2

            this.page_height = $('.table-container').height()
            console.log(this.page_height)
        },
        initCircle(){
            this.scrollCircle(0)
        },
        scrollCircle(index){
            let top = index * this.type_height + this.half_height
            console.log(top)
            this.$el.find('.circle').css('top',`${top}px`)
        },
        active(li){
            $(li).addClass('active').siblings().removeClass('active')
        },
        scrollPage(index){
            let height = index * this.page_height
            this.$el.find('.table-container').css('transform',`translateY(-${height}px)`)
        }
    }
    let model = {}
    let controller = {
        init(view,model){
            this.view = view
            this.model = model
            this.view.init()
            this.view.getHeight()
            this.view.initCircle()
            this.bindEvents()
        },
        bindEvents(){
            this.view.$el.find('.type').on('click',(ev)=>{
                let index = $(ev.currentTarget).index()
                this.view.scrollCircle(index)
                this.view.active(ev.currentTarget)
                this.view.scrollPage(index)
            })
        }
    }
    controller.init(view,model)
}
