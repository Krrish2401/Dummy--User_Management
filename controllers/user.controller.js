import users from '../data/user.js'

export const createUser = (req,res)=>{
    try{
        const {name, email} = req.body;

        if(!name || !email){
            return res.status(400).json({
                success : false,
                message : "Name and email are required"
            });
        }

        const newUser = {
            id: Date.now().toString(),
            name,
            email
        };

        users.push(newUser);

        res.status(201).json({
            success: true,
            data: newUser
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getUser = (req,res)=>{
    res.status(200).json({
        success: true,
        count : users.length,
        data: users
    })
}

export const updateUser = (req,res)=>{
    try{
        const id = parseInt(req.params.id);
        const { name, email } = req.body;

        const target = users.find(i => i.id == id);

        if (!target) {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (name) target.name = name;
        if (email) target.email = email;

        res.status(200).json({
            success: true,
            data: target
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message:error.message
        })
    }
}