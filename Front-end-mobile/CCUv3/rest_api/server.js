const express = require('express'); 
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config')

// routes
const authRoutes = require('./routes/api/users');
const bodyRoutes = require('./routes/api/acoes');
const MsgRoutes = require('./routes/api/mensagem');

const app = express();

// body parser Middleware
app.use(express.json())

//connect to mongo db
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('Mongo DB Connected!'))
    .catch(err => console.log(err));

//User Routes
app.use('/api/user', authRoutes);
//Acoes Routes
app.use('/api/acao', bodyRoutes);
//Mensagens routes
app.use('/api/user/mensagem', MsgRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is runnig at port ${PORT}`));
