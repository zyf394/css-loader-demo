/**
 * Created by zhongyufei on 2016/4/26.
 */
import styles from '../static/css/app.css';

console.log(styles);

let appTemplate = require("../tmpl/appTemplate.tpl");

let App = {
    $el: document.querySelector(".app"),
    appTemplate: appTemplate,

    init: function () {
        let me = this;
        me.render({
            title:"TITLE",
            desc:"something something something..."
        });

    },
    
    render: function (data) {
        let me = this;
        me.$el.innerHTML= (me.appTemplate({data: data}));
    }

};

App.init();