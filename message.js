!function(){
    var view =document.querySelector('section.message')
    var model  = {
        init(){
            var APP_ID = '4gMn7p71WdWhNYnvT1EO161j-gzGzoHsz';
            var APP_KEY = 'NOnceIEdfe9PnQVtQthFsHRh';
            AV.init({
            appId: APP_ID,
            appKey: APP_KEY
        })
    },
        //获取数据
        fetch(){
            var query = new AV.Query('Message');
            return query.find()//promise对象
        },
        //保存（新建）数据
        save(name,content){
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({//promise对象
                content: content,
                name:name
            })
        }
    }
    var controller={
        view:null,
        model:null,
        messageList:null,
        form:null,
        // form:null,
        init(view,model){
            this.view = view
            this.model = model
            
            this.messageList = view.querySelector('messageList')
            this.form = view.querySelector('form')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
            // this.saveMessage()
            
        },
        loadMessages(){
            this.model.fetch()
            .then((message)=>{
                console.log(message)
                let array =  message.map((item)=>item.attributes)
                array.forEach(function(item){
                    var lis= document.createElement('li')
                    lis.innerText=`${item.name}: ${item.content}`
                    this.messageList.appendChild(lis)
                }) 
            })
        },
        bindEvents(){
            this.form.addEventListener('submit',function(e){
            e.preventDefault()
            this.saveMessage()
        }.bind(this))
        },
        saveMessage(){
            let myForm = this.form
            let content=myForm.querySelector('input[name=content]').value
            let name=myForm.querySelector('input[name=name]').value
            this.model.save(name,content).then(function(object) {
                var lis= document.createElement('li')
                lis.innerText=`${object.attributes.name}: ${object.attributes.content}`
                 messageList.appendChild(lis)
                myForm.querySelector('input[name=content]').value=''
        })
        },
    }
    controller.init(view,model)

}.call()

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })