interface User{
    name:string,
    age:number,
    id:string,
    email:string,
    password:string
}
type updateProp=Pick<User,'age'|'id'>
function updatepop(updateprop:updateProp){

}
