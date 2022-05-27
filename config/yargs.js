const argv=require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption:true,
                describe:'Es la base de la tabla de multiplicar'
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                default:false,
                describe:'Muestra la tabla en consola'
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                default:10,
                describe:'Numero de multiplicaciones'
            })
            .check((argv,options)=>{
                if(isNaN(argv.base)){
                    throw 'La base tiene que ser un numero'
                }
                return true;
            })
            .argv;

module.exports=argv;




























/*
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true
})*/

//console.log(argv);

//console.log(process.argv);
//console.log('base yargs :',argv.base);

//console.log(process.argv);
//const [ , ,arg3='base=5']=process.argv;
//const [,base=5]=arg3.split('=');