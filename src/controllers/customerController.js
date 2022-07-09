//codigo para manejar el custommer controller
const controller ={};

controller.list = (req,res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM estudiante', (err, estudiante)=>{
            if (err){
                res.json(err);
            }
            res.render('estudiante', {
                data: estudiante
            });
        });
    });
};

controller.save = (req, res)=>{
    const data= req.body;
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO estudiante set ?',[data], (err,estudiante)=>{
            console.log(estudiante)
            res.redirect('/');
        });
    });
};

controller.edit=(req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM estudiante WHERE id = ?',[id], (err,estudiante)=>{
             res.render('estudiante_edit',{
                data:estudiante[0]
            });
        });
    });
};

controller.update= (req,res)=>{
    const {id}=req.params;
    const actEstudiante = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE estudiante set ? WHERE id = ?',[actEstudiante, id],(err,rows)=>{
            res.redirect('/')
        });
    });
};

controller.delete = (req, res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM estudiante WHERE id = ?', [id],(err,rows)=>{
            res.redirect('/');
        });
    });
};

module.exports = controller;