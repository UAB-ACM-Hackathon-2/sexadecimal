/* global GameCtrl */
(function () {
    'use strict';

    GameCtrl.Boot = function () {};

    GameCtrl.Boot.prototype = {

        preload: function () {

            this.load.image('preloaderBackground', 'assets/images/progress_bar_background.png');
            this.load.image('preloaderBar', 'assets/images/progress_bar.png');
            
            this.load.audio('epicmusic', ['assets/audio/epicmusic.mp3', 'assets/audio/epicmusic.ogg']);

        },

        create: function () {
            var music;
            music = game.add.audio('epicmusic',1,true);
            music.play();
            this.game.state.start('Preloader');
        }
    };

})();