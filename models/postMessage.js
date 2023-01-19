import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    message: {
        type:String,
        required:true
    },
    creator: {
        type:String,
        required:true
    },
    name: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: [String], default: [] 
    },
    comments: { 
        type: [String], default: [] 
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

let PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;