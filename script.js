let usuario = 'admin'
let contrasena = 'admin'
let inputUsuario = prompt('Ingrese su usuario')
let inputContrasena = prompt('Ingrese su contraseña')

// if (usuario == inputUsuario && contrasena == inputContrasena){
//     console.log('Bienvenido, ' + inputUsuario)
// } else {
//     console.log('Usuario y/o contraseña incorrectos')
// }
if (usuario == inputUsuario && contrasena == inputContrasena){
    console.log('Bienvenido, ' + inputUsuario)
} else {
    console.log('Usuario y/o contraseña incorrectos')
}
if (usuario == inputUsuario){
    inputContrasena = prompt ('Ingrese su contraseña: ')
    if (contrasena == inputContrasena){
        console.log('Bienvenido: ' + inputUsuario)
    } else {
        console.log('error de credenciales')
    }
}else {
    console.log('Usuario no existe en la base de datos')
}
