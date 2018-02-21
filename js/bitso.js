$(document).ready(function(){

    $('#imgElEconomista').on(
        {
            mouseover: function(){
                image.changeOver($(this),'img/logos/eleconomista_press_on.png'); 
            },
            mouseout: function(){
                image.changeOut($(this),'img/logos/eleconomista_press_off.png');
            }
        }
    );
    $('#imgCnn').on(
        {
            mouseover: function(){
                image.changeOver($(this),'img/logos/cnn_on_04.png');                 
            },
            mouseout: function(){
                image.changeOut($(this), 'img/logos/cnn_off_03.png');
            }
        }
    );
    $('#imgFortune').on(
        {
            mouseover: function(){
                image.changeOver($(this),'img/logos/fortune_on_06.png');                 
            },
            mouseout: function(){
                image.changeOut($(this), 'img/logos/fortune_off_05.png');
            }
        }
    );
    $('#imgCoinDesk').on(
        {
            mouseover: function(){
                image.changeOver($(this),'img/logos/coindesk_press_on_08.png');                 
            },
            mouseout: function(){
                image.changeOut($(this), 'img/logos/coindesk_off_07.png');
            }
        }
    );
    $('#imgBBVA').on(
        {
            mouseover: function(){
                image.changeOver($(this),'img/logos/bbva_on_10.png');                 
            },
            mouseout: function(){
                image.changeOut($(this), 'img/logos/bbva_off_09.png');
            }
        }
    );

});

var image = {
    changeOver: function(element, src){
        console.log('event mouseover' + ' srcImg ' + src)    
        element.prop('src', src);
    },
    changeOut: function(element, src){
            console.log('event mouseout' + ' srcImg ' + src);
            element.prop('src', src); 
    }
};