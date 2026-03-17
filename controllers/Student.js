import pool from "../config/db.js";


 export const createStudent  = async(req, res)=>{
    try{
        const {name , email, branch} = req.body;
        const result = await pool.query(`
            insert into students (name, email, branch) values ($1, $2, $3) returning *`, [name, email, branch])

        res.status(200).json(result.rows[0])
    }
    catch (err) {
  console.error(err); 
  res.status(500).json({ error: "Data not inserted into student table" });
}
    
}

export const getStudent =async (req, res)=>{
    try {
        const result = await pool.query("select * from students");
        res.json(result.rows)
    } catch (error) {
        console.error(error)
        console.log({message: "Not able to fetch data"})
    }
}

export const updateStudent = async (req ,res)=>{
    try {
        const {id} = req.params;
        const {branch} = req.body;
        const result = await pool.query(`update students set branch = $1 where id = $2 returning *`, [branch, id])
        res.json((await result).rows[0])
    } catch (error) {
        console.error(error)
        
    }
}

export const deleteStudent = async (req , res)=>{
    try {
        const {id} = req.params;
        const result = await pool.query(`delete from students where id = $1`, [id]);

        if(result.rows.length ==0){
            res.json({message : "No data in table to delete"})
        }
        res.json(result.rows[0])


    } catch (error) {
        
    }
    

}