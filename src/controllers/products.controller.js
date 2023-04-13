//import {getconection} from '../database/connection'
import {getconection,sql,query} from '../database';
//import sql  from 'mssql';
import {getAllproducts,getproductIbs,deleteproductos,getotalproductos,updateproducts} from '../database/query';
export const getproduct= async(req,res)=>{

try{
  const pool = await getconection();
  const result=await pool.request().query(query.getAllproducts);
    res.json(result.recordset);
}catch(error){

    res.status(500);
    res.send(error.message);
}

};

export const createNewProducts=async(req,res)=>{
const {name, descripcion}=req.body

let {quantity}=req.body;



if(name ==null || descripcion==null){


    return res.status(400).json({msg:'bad request . llenar todos los caampos'});
}
if(quantity==null)quantity=0;
try{
const pool=await getconection();
  await pool.request()
  .input("name",sql.VarChar,name)
  .input('descripcion',sql.Text,descripcion)
  .input('quantity', sql.Int,quantity)
  .query(query.createnewproducts);

 res.json(name,descripcion,quantity);

}catch(error){

res.status(500);
res.send(error.message);

}
};


export  const getproductIb=async (req,res)=>
{
const {id}=req.params;

const pool=await getconection();
const result=await pool.request().input('id',id).query(query.getproductIbs);
return res.json(result.recordset[0]);
console.log(result);
  res.send(id);


};

export const deleteproducts=async (req, res)=>
{

  const {id}=req.params;
  const pool=await getconection();
  const  result=await pool.request().input('id',id).query(query.deleteproductos);
  
  res.sendStatus(204);

};


export const gettotalproducts=async (req, res)=>
{

  const pool=await getconection();
  const result=await pool
  .request()
  .query(query.getotalproductos);
  console.log(result);
  res.sendStatus(204);

};


export const updateProductById = async (req, res) => {
  const { descripcion, name, quantity } = req.body;

  // validating
  if (descripcion == null || name == null || quantity == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getconection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("descripcion", sql.Text, descripcion)
      .input("quantity", sql.Int, quantity)
      .input("id", req.params.id)
      .query(query.updateproducts);
    res.json({ name, descripcion, quantity });
    console.log(name);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

