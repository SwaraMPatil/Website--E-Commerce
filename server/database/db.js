import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // const URL = `mongodb+srv://SwaraMPatil:<db_Swara123>@cluster0.wja23rv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    // const URL = `mongodb://$SwaraMPatiL:$Swara123@ecommerce-shard-00-00.fdvft.mongodb.ne&retryWrites=true&w=majort:27017,ecommerce-shard-00-01.fdvft.mongodb.net:27017,ecommerce-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-ilaj5d-shard-0&authSource=adminity`;
    const URL = `mongodb://$SwaraMPatiL:$Swara123@ecommerce-web-shard-00-00.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-01.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-02.wnaj9.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-sjmqa0-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;
