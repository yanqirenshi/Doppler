var jojoMode = 'gogo';
function jojo(){
    if(loadTime==null || loadTime > moment()){
        jojoMode=null;
        return;
    }

    if(jojoMode==null){
        var mode = Math.floor(Math.random()*10%2);
        jojoMode = [{name:'dodo', w:453, h:473},
                    {name:'gogo', w:270, h:474}][mode];
    }

    var body = $('body');
    var w = body .width(), h = body.height();

    var gain = (100 - Math.random()*77)/100;
    body.append($.html.gen(
        {tag:'img',
         cls:['born','gion'],
         attr:{src:'/img/'+jojoMode.name+'.png',
               style:'position:fixed;z-index:9999;'
               + 'top:'  + Math.floor( Math.random() * h ) + 'px; '
               + 'left:' + Math.floor( Math.random() * w ) + 'px;',
               width:jojoMode.w*gain ,
               height:jojoMode.h*gain}}));

    body.find('img.born.gion')
        .mouseover(function () {$(this).remove();})
        .removeClass('born');
};
