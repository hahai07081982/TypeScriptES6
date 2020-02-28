var employ={
    id:1,
    greet:function(){
        setTimeout(() => {
            console.log(this.id);
        }, 1000);
    }
}
employ.greet()