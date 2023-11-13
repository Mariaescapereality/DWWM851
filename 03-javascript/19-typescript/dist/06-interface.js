"use strict";
;
;
;
document.chaussette;
//pour utiliser une interface, je dois utiliser let mot clef "implement"
class Point3D {
    x = 0;
    y = 0;
    z = 0;
    get() { return this.x; }
}
//ma fonctionne attend une interface "Point" en argument.
function show(p) { }
;
//Je lui une classe "Point3D" qui respecte toute les regles de l'interface "POINT".
show(new Point3D());
