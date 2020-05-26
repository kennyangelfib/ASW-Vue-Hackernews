
 function getApikey (){
    let id = localStorage.getItem("id").toString();
    let name = localStorage.getItem('username').toString();
    // console.log(name)
    // console.log(name.length);
    while (name.length < 20){
        name += (name + "-" + id)
    }
    let base_api = name.split("").reverse().join("")
    // console.log(base_api)
    let cifrado = btoa(base_api)
    // console.log(cifrado)
    let cifrado_reverse = cifrado.split("").reverse().join("")
    // console.log(cifrado_reverse)
    return cifrado_reverse
}
    
export default {
    getApikey
}