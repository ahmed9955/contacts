import Todo from '../models/todos.js';

export const getTodos = (req,res) => {
    res.send('GET TODOS');
}

export const updateTodo = (req,res) => {
    res.send('UPDATE TODO');
}

export const createTodo = async (req,res) => {
    console.log(req.body)
    const record = await new Todo(req.body);

    try{
        await record.save();
        res.status(201).json(record)
    } catch(e) {
        res.status(404).json({error: e.message})
    }
}

export const deleteTodo = (req,res) => {
    res.send('Delete Todo!!')
}
