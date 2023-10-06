import { CRUD } from "./crud.js";

function app(){
    let crud = new CRUD("ejemplo");
    crud.create([7, 12, 8]);
    crud.create({ message: "Hola mundo"});

    crud.update(6, [1, 5, 3]);

    crud.delete(4);

    let crud2 = new CRUD("ejemplo");
    console.log(crud2.readAll());
}
app();