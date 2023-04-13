export const query={

    getAllproducts:'select * from products',
    createnewproducts:"insert into products(name,descripcion,quantity) values(@name,@descripcion,@quantity)",
    getproductIbs:"select * from products where id =@id",
    deleteproductos:"delete from products where id=@id",
    getotalproductos:'SELECT COUNT(*)as total from products',
   // updateproducts:"update products set name=@name, descripcion=@descripcion,quantity=@quantity where id=@id"
    updateproducts:"UPDATE products SET name = @name, descripcion = @descripcion, quantity = @quantity WHERE id = @id",


    //deleteproducts:"delete from products where id=@id",
};



