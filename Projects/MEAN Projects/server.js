const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// ------------------ MongoDB Connection ------------------
mongoose.connect('mongodb://127.0.0.1:27017/DemoDB')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// ------------------ Student Schema & Model ------------------
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

const User = mongoose.model('User', userSchema, 'User');

// ------------------ APIs ------------------

// ✅ GET all students
app.get('/users', async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ GET student by ID
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: "Invalid ID" });
    }
});

// ✅ PUT – Update student by ID
app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // return updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found!" });
        }

        res.status(200).json({
            message: "User updated successfully",
            data: updatedUser
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ✅ DELETE – Remove student by ID
app.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await Student.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found!" });
        }

        res.status(200).json({
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(400).json({ message: "Invalid ID" });
    }
});

// ------------------ Server ------------------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
