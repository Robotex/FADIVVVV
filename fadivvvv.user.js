// ==UserScript==
// @name        FADIVVVV - vvvvid.it Anti Flash
// @namespace   https://github.com/Robotex/
// @description Guardati i tuoi anime preferiti senza avere Adobe Flash Player!
// @author      Robotex
// @version     1.0.2
// @license     GPL version 3; http://www.gnu.org/copyleft/gpl.html
// @copyright   2016+, Robotex (https://github.com/Robotex/)
// @homepage    https://github.com/Robotex/FADIVVVV/
// @supportURL  https://github.com/Robotex/FADIVVVV/issues
// @match       http://www.vvvvid.it/*
// @match       https://www.vvvvid.it/*
// @grant       none
// @require     https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.5.17/hls.min.js
// ==/UserScript==

function getFixedUrl(url, protocol) {
    var aElement = document.createElement('a');
    aElement.href = url;
    aElement.protocol = protocol;
    return aElement.href;
}

jQuery(function($) {

$p.newModel({
  
    modelId: 'VIDEOHLSJS',
    nativeVersion: '1',
    iLove: [
        {ext:'m3u8', type:'application/mpegURL', platform: 'browser', streamType: ['http','httpVideo'], fixed: true},
        {ext:'m3u8', type:'application/vnd.apple.mpegurl', platform: 'browser', streamType: ['http','httpVideo'], fixed: 'maybe'},
        {ext:'m3u8', type:'application/x-mpegURL', platform: 'browser', streamType: ['http','httpVideo'], fixed: true}
    ],
    
    applyMedia: function(destContainer) { 
        if ($('#'+this.pp.getMediaId()+"_html").length === 0) {
            
            this.wasPersistent = false;
            
            destContainer.html('').append(
                $('<video/>')
                .attr({
                    "id": this.pp.getMediaId()+"_html",         
                    "poster": $p.utils.imageDummy(),
                    "loop": false,
                    "autoplay": false,
                    "preload": "none",
                    "x-webkit-airplay": "allow"
                }).prop({
                    controls: false,
                    volume: this.getVolume()
                }).css({
                    'width': '100%',
                    'height': '100%',
                    'position': 'absolute',
                    'top': 0,
                    'left': 0
                })
            );
        }

        this.mediaElement = $('#'+this.pp.getMediaId()+"_html");
        this.applySrc();
    },
    
    _applySrc: function (e) {
        var ref = this,
            sources = this.getSource(),
            b = ref.getState('AWAKENING');
        this.mediaElement.attr('src', sources[0].src + e);
        if (!this.isGingerbread) {
            this.mediaElement.attr('type', sources[0].originalType)
        }
        this.mediaElement.bind('mousedown.projekktorqs' + this.pp.getId(), this.disableDefaultVideoElementActions);
        this.mediaElement.bind('click.projekktorqs' + this.pp.getId(), this.disableDefaultVideoElementActions);
        var c = function () {
            ref.mediaElement.unbind('loadstart.projekktorqs' + ref.pp.getId());
            ref.mediaElement.unbind('loadeddata.projekktorqs' + ref.pp.getId());
            ref.mediaElement.unbind('canplay.projekktorqs' + ref.pp.getId());
            ref.addListeners('error');
            ref.addListeners('play');
            ref.addListeners('canplay');
            ref.mediaElement = $('#' + ref.pp.getMediaId() + '_html');
            if (b) {
                ref.displayReady();
                return
            }
            if (ref.getSeekState('SEEKING')) {
                if (ref._isPlaying) {
                    ref.setPlay()
                }
                ref.seekedListener();
                return
            }
            if (!ref.isPseudoStream) {
                ref.setSeek(ref.media.position || 0)
            }
            if (ref._isPlaying) {
                ref.setPlay()
            }
        };
        if(Hls.isSupported()) {
            var fadivvvvHlsConfig = Hls.DefaultConfig;
            var loadHook = fadivvvvHlsConfig.loader.prototype.load;
            fadivvvvHlsConfig.loader.prototype.load = function () {
              arguments[0] = getFixedUrl(arguments[0], window.location.protocol); // url
              return loadHook.apply(this, arguments);
            }
            var hls = new Hls(fadivvvvHlsConfig);
            hls.loadSource(getFixedUrl(this.mediaElement[0].src, window.location.protocol));
            hls.attachMedia(this.mediaElement[0]);            
        }
        this.mediaElement.bind('loadstart.projekktorqs' + this.pp.getId(), c);
        this.mediaElement.bind('loadeddata.projekktorqs' + this.pp.getId(), c);
        this.mediaElement.bind('canplay.projekktorqs' + this.pp.getId(), c);
        this.mediaElement[0].load();
        if (this.isGingerbread) {
            c();
        }
    },
    
}, 'VIDEO');
  
});
    
vvvvid.browserDetect.supportHLS = function () {
  return Hls.isSupported();
};
vvvvid.models.User.prototype.defaults.hls = vvvvid.browserDetect.supportHLS();
vvvvid.models.login.prototype.defaults.hls = vvvvid.browserDetect.supportHLS();
