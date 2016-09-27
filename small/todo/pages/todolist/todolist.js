/**
 * Created by zhangjie on 16/9/26.
 */
var app = getApp();

Page({
    data: {
        todolist: [
            {
                id: 0,
                title: "我今天晚上8点要去酒店",
                content: "今天晚上要和朋友谈一些工作当中的事情。",
                completion: false
            }, {
                id: 1,
                title: "我明天白天要去参加一个会议",
                content: "会议内容主要是商讨一些工作事情。",
                completion: false
            }, {
                id: 2,
                title: "明天晚上要买火车票",
                content: "火车票是从北京到江苏的。",
                completion: false
            }
        ]
    },
    
    onLoad: function() {
        console.log('onLoad');
    },
    
    onReady: function() {
        console.log('onReady');
    },
    
    onShow: function() {
        console.log('onShow');
        this.fetchData();
    },
    
    onHide: function() {
        console.log('onHide');
    },
    
    onUnload: function() {
        console.log('onUnload');
    },
    
    clickButton: function(e) {
        console.log("checkbox", e);
        var todolist = this.data.todolist;
        for (var i = 0 ; i < todolist.length ; ++i) {
            if (e.currentTarget.id == todolist[i].id) {
                todolist[i].completion = !todolist[i].completion;
            }
        }
        
        this.setData({
            todolist: todolist
        })
    },
    
    itemClick: function(e) {
        console.log(e);
        wx.navigateTo({
            url: '../todoedit/todoedit?data=' + JSON.stringify(this.data.todolist[e.currentTarget.id]),
        })
    },
    
    fetchData: function() {
        wx.request({
            url: 'https://www.baidu.com',
            data: {
                x: '',
                y: ''
            },
            header: {
            },
            success: function(res) {
            }
        })
    }
    
})