"use strict";

<<<<<<< HEAD

=======
type Chaussette = string;
// type Chaussette = string|number;
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
/* 
    L'interface est à moitié une classe abstraite et à moitié un type.
    Elle va servir de plan de construction à une classe.
*/
<<<<<<< HEAD

type Chaussette = string;
// type Chaussette = string | number;

interface Point 
{
    x : number;
=======
interface Point
{
    x: number;
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
    y: number;
    get(): number;
}
// On peut ajouter de nouveaux éléments à une interface.
<<<<<<< HEAD

interface Point 
{
    z : number;
}

interface Document 
{
    chaussette :string;
}
document.chaussette

// Pour utiliser une interface, on utilisera "implements"
class Point3D implements Point 
{
    x = 0
    y = 1
    z = 2
    get() {
        return this.x;
        // this rappelle "Point3D"
    }
}
function show(p: Point) {}
show(new Point3D());

=======
interface Point
{
    z: number;
}

interface Document
{
    chaussette: string;
}
document.chaussette
// Pour utiliser une interface, on utilisera "implements"
class Point3D implements Point
{
    x = 0;
    y = 1;
    z = 2;
    get()
    {
        return this.x;
    }
}
function show(p: Point){}
show(new Point3D());
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
