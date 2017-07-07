Vue.component('add-one', {
    template: '\
<div class="v-select">\
<div class="dropdown-toggle">\
<input type="text" class="form-control" style="width: 100%;" v-on:keyup="increment" placeholder="Zip Code"/>\
</div>\
</div>\
    ',
    props: ['on-change','text'],
    data: function () {return {}},
    methods: {
        increment: function (e) {
            var val = e.target.value;
            if(isNaN(val)){
                e.target.value = '';
            }else{
                if(val.length >= 5){
                    this.$emit('onChange');
                    e.target.value = '';
                   
                }
            }
        }
    }
});
