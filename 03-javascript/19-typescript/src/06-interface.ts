"use strict";
/*
Les interfaces sont à la jonction entre les types et les classes abstraites.
a la difference des classes abstraites, l'interface ne contiendra que des declarations, sans aucune definiction ou valeur.
à la difference des types, l'interface sera réserve aux objets et à la difference des types, l interface sera reserve aux objets et pourra etre redefini(fusionne)
*/
type Chausette = string;
//je ne peux pas le changer:
//type Chaussette = number;
interface Point
{
    x:number;
    y:number;
    get():number;
}
//Pas d erreur les deux ont fusionnés
interface Point {z:number};
//to see ctrl+click
interface Point{z:number};
// Je peux très bien changer une interface déjà définie dans vscode.(in show preview > dev tool)
interface Document{chaussette:string};
document.chaussette;
//pour utiliser une interface, je dois utiliser let mot clef "implement"
class Point3D implements Point
{
    x=0;
    y=0;
    z=0;
    get(){ return this.x; }
}
//ma fonctionne attend une interface "Point" en argument.

function show(p: Point){};
//Je lui une classe "Point3D" qui respecte toute les regles de l'interface "POINT".
show(new Point3D());