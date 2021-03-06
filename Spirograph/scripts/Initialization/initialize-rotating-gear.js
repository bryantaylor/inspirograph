﻿/// <reference path='../definitions/references.d.ts' />
var Spirograph;
(function (Spirograph) {
    (function (Initialization) {
        'use strict';

        function initializeRotatingGear(svgContainer, gearOptions) {
            var rotatingGear = svgContainer.append("g").attr("class", "gear rotating color-changing").datum(gearOptions);

            rotatingGear.append("path").attr("d", Spirograph.Shapes.Gear);

            return rotatingGear;
        }
        Initialization.initializeRotatingGear = initializeRotatingGear;
    })(Spirograph.Initialization || (Spirograph.Initialization = {}));
    var Initialization = Spirograph.Initialization;
})(Spirograph || (Spirograph = {}));
//# sourceMappingURL=initialize-rotating-gear.js.map
