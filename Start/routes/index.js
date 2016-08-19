
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};
exports.contactME = function (req, res) {
    var mailOptions = {
        from: '"Manoj Mahato 👥" <mkmpvtltd@gmail.com>', // sender address 
        to: 'bar@blurdybloop.com, mmahato@braindigit.com', // list of receivers 
        subject: 'Hello ✔', // Subject line 
        text: 'Hello world 🐴', // plaintext body 
        html: '<b>Hello world 🐴</b>' // html body 
    };
    var nodemailer = require('nodemailer');

    // create reusable transporter object using the default SMTP transport 
    var transporter = nodemailer.createTransport('smtps://mkmpvtltd%40gmail.com:CommandCom456@smtp.gmail.com');

    // send mail with defined transport object 
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.render('contactSucess', { title: 'Contact', year: new Date().getFullYear(), message: 'Message Send to' + error });
           // return console.log(error);
        }
        else {
            res.render('contactSucess', { title: 'Contact', year: new Date().getFullYear(), message: 'Message Send to' + req.body.name });
        }
        //console.log('Message sent: ' + info.response);
    });
    //console.log("ok");
};