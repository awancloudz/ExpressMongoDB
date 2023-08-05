module.exports = mongoose => {
    const schema = mongoose.Schema({
        nama_lengkap: String,
        jeni_kelamin: String,
        tanggal_lahir: Date,
        tempat_lahir: String,
        alamat: String,
    }, {
        timestamp: true
    });
    
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;

        return object;
    });

    return mongoose.model("mahasiswa", schema);
};
