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
          const query = "select id, first_name, last_name, email from users";
          const value=[];
          const [data] = await dbConnection.execute(query,value);
          dbConnection.end;
          res.status(200).json({ personas: data})
        } catch (error) {
          return { error };
        }
      case 'POST':
        const {first_name,last_name,email,password,gender,address} = req.body;
        const [result] = await Pool.query("insert into  users set ?",{
          first_name,
          last_name,
          email,
          password,
          gender,
          address
        }) 
    }   
}