var app = new Vue({
    el:"#app",
    data:{

        list:[
            {
                id:1,
                name:"苹果7",
                price:6188,
                count:3
            },
            {
                id:2,
                name:"iPad pro",
                price:5888,
                count:2
            },
            {
                id:3,
                name:"Macbook Pro",
                price:21488,
                count:3
            }
        ]

    },
    computed:{
        totalPrice:function () {
            var total = 0;
            for(var i=0;i<this.list.length;i++){
                var item = this.list[i];
                total += item.price * item.count;
                console.log(total);

            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }

    },
    methods:{
        handleReduce:function (index) {
            if(this.list[index].count === 1) {
                return false;
            }else{
                console.log("进入了else了,count为"+this.list[index].count);
                this.list[index].count-- ;
            }

        },
        handleAdd:function (index) {
            this.list[index].count ++;
        },
        handleRemove:function (index) {
            this.list.splice(index,1);

        }
    }
});