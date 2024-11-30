const mongoose= require('mongoose')

const ProductoSchema= new mongoose.Schema({
    nombre:{type: String, require:true},
    descripcion:{type:String, require:true},
    precio:{type:Number, require:true},
    ImagenUrl:{type:String, require:true},
    stock: {type:Number, default: 0},
    categoria: {type:mongoose.Schema.Types.ObjectId,ref:'categoria', require:true}
})

module.exports=mongoose.model('producto',ProductoSchema);
