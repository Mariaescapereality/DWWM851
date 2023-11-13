"use strict";

class Truc
{
    /*
    à la difference de JS, TS utilise des mots clefs pour preciser si une propriete est publique ou privee
    TS ajoute aussi les proprietes "protected" qui sont entre le "private" et le "public"

    !!! Attention les proprietes "private" ne sont pas traduit en JS.
    */
    public prenom = "Maurice";
    protected nom = "Dupont";
    private age = 54;
}
const t = new Truc();
t.prenom;
/*
les champs protected et private ne sont pas accesible à l exterieur de la classe.
*/
// t.age;
//t.nom;

class Machin extends Truc
{
    constructor()
    {
        super();
        this.prenom;
        this.nom;
        // Les proprietes et methodes protected sont herite à la differecnce des "private"
        // this.age;
        document.addEventListener("click", this.faireUnTruc);
        
    }
    /*
    dans certaines cas, comme celui du "addEventListner" "this" peut changer de valeur et ne plus correspondre à l'objet.
    On peut donc le preciser à typescript en indiquant entre les parentheses, le nouveau type de "this"
    */
    faireUnTruc(this:Object)
    {
        console.log(this);
    }
}
//Les generics sont utilisable sur une classe:
class Collection<T>
{
    /*en declarant l'acceseur d une propriete ddirectement dans les arguments.
    Cela indique à TS que l on veut sauvegarder cet argument en tant que propriete de notre classe.

    */
    constructor(private items: T[]){}
    /*
    equivalent de:
    private items: T[];
    constructor(items: T[])
    {
        this.items = items;
    }*/
    addOne(arg: T): this
    {
        this.items.push(arg);
        return this;
    }
    addMore(arg: T[]): this
    {
        this.items.push(...arg);
        return this;
    }
}
const c = new Collection([5,3,9,0]);
c.addOne(32);
const c2 = new Collection(["truc", "test"]);
c2.addOne("salut").addMore(["abc", "def"]).addOne("fin");
/*
Petite astuce JS:
Lorsque une methode n'a rien à retourner, on peut lui faire retourner "this" pour pouvoir enchainer les methodes comme juste au dessus.
*/
class Triangle
{
    c1 = 5;
    c2 = 8;
    c3 = 2;
}
class Rectangle
{
    c1 = 12;
    c2 = 20;
}
function getC1(arg: Rectangle)
{
    return arg.c1;
}
getC1(new Rectangle());
// getC1(new Date());
getC1(new Triangle());

/*
Lorsqu'on indique à TS qu'un argument est d une classe particuliere.
Il ne verifiera pas le nom de la classe, mais si l objet contient
les même proprietes.
Ici "Rctangle" est un objet contenant les proprietes "c1" et "c2" 
alors il accepte un "Triangle" qui aussi ces proprietes.
*/
abstract class Polygone
{
    sides: {[key:string]:number}={}
    abstract surface(): number;
    countSide()
    {
        return Object.keys(this.sides).length;
    }
}
/*
Les classes abstraites ne peuvent pas être instanciées.
Elles ont pour role d etre hérité uniquement.
*/
//new Polygone();
class Carre extends Polygone
{
    constructor(c:number)
    {
        super();
        this.sides.c = c;
    }
    /*
    Les methodes abstraites que l on retrouver dans les classes abstraites.
    obligent à integrer une méthodes de meme nom et ayant les meme proprietes aux classes qui en heritant.
    Le corps de la fanction peut changer d une classes à l'autre.
    */
    surface(): number {
        return this.sides.c**2;
    }
}
const ca = new Carre(5);
console.log(ca.surface());
console.log(ca.countSide());