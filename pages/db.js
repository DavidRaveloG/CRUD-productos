import mysql from 'mysql2/promise';
import Pool from 'mysql2/typings/mysql/lib/Pool';
import { handleClientScriptLoad } from 'next/script';

export default async function handler(req, res){
    
    const dbConnection =  mysql.createConnection({
      host: 'localhost',
      database: 'clients',
      user: 'root',
      password: 'root',
      socketPath: ""
    })
    switch(req.method){
      case 'GET':
        try {
          const query = "select * from products p, employee e where p.idE=e.id";
          const value=[];
          const [data] = await dbConnection.execute(query,value);
          dbConnection.end;
          res.status(200).json({ products: data})
        } catch (error) {
          return { error };
        }
      case 'POST':
        const {nombre,tipo,balance,benefit,id} = req.body;
        const [result] = await Pool.query("insert into  products set ?",{
          nombre,
          tipo,
          balance,
          benefit,
          id
        })





           
    }   
}