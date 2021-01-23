var nodemailer=require('nodemailer');
var transpoter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'vanshikasundrani1998@gmail.com',
        pass: ''
    }
});
var mailOptions={
    from:'vanshikasundrani1998@gmail.com',
    to:'vanshikasundrani@gmail.com',
    subject:'sending email',
    text:'mailed check2'
};

transpoter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent'+info.response);
    }
});