﻿/// <reference path='../definitions/references.d.ts' />
var Spirograph;
(function (Spirograph) {
    (function (Interaction) {
        'use strict';

        Spirograph.EventAggregator.subscribe('downloadImage', function () {
            var canvas = d3.select('#spirograph-canvas').node();
            $.ajax({
                type: 'POST',
                url: 'http://nathanfriend.com/saveimage.php',
                data: {
                    img: canvas.toDataURL()
                },
                success: function (imagename) {
                    location.href = "http://nathanfriend.com/getimage.php?imagename=" + imagename;
                }
            });
        });
    })(Spirograph.Interaction || (Spirograph.Interaction = {}));
    var Interaction = Spirograph.Interaction;
})(Spirograph || (Spirograph = {}));
//# sourceMappingURL=download-image.js.map