const fs=require('fs');
const colors=require('colors/safe')

const crearArchivo=async(base=5,list,hasta=10)=>{
    
    try {      
        let salida='';
    
        for (let i = 1; i <= hasta; i++) {
            salida+=`${i} x ${base} =${i*base}\n`;
         }
    
         if(list){
             console.log(colors.green(`Tabla de Multiplicar ${base}
             `));
             console.log(salida);
         }
        
         fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
         
    
         return `tabla-${base}.txt creado`
        
    } catch (err) {
        throw err
    }
    
}

module.exports={
    crearArchivo,
}













