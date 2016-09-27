
var app = getApp()
Page({
    
    data: {
        item: {
            id: 0,
            title: "",
            content: "",
            completion: false
        }
    },
    
    onLoad: function(item) {
        console.log('onLoad ' + item.title);
    },
    
})