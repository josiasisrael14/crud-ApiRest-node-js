import sql  from 'mssql';
const dbsetting={
user:'sa',
password:'genio1411',
server:'JOSIAS',
database:'node',

options:{
encrypt:false,
TrustServerCertificate:true,
cryptoCredentialsDetails:{
    minVersion:'TLSv1'
}
}

};


export async function getconection(){
try{
const pool = await sql.connect(dbsetting);
 return pool;

}catch(error){

console.log(error);

}
}

