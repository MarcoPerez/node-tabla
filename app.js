const {crearArchivo}=require('./helpers/multiplicar')
const argv=require('./config/yargs')


console.clear();


crearArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo=>console.log(nombreArchivo,'creado'))
.catch(err=>console.log(err));


























/*
const base=10;
let salida='';

for (let i = 1; i <= 10; i++) {
    salida+=`${i} x ${base} =${i*base}\n`;
 }*/

 /*fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    if(err) throw err;

    console.log(`tabla-${base}.txt creado`);
 })

 fs.writeFileSync(`tabla-${base}.txt`,salida);

 console.log(`tabla-${base}.txt creado`);
 */