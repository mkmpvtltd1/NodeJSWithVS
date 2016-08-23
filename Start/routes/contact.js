
exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};
exports.contactME = function (req, res) {
    var config = require('config');
    var mailOptions = {
        from: '"' + config.get("Email.AdminName") + '👥" <' + config.get("Email.AdminEmail") + '>', // sender address 
        to: config.get("Email.AdminEmail"), // list of receivers , email can be spereated using coma','.
        subject: 'Contact From Website ✔', // Subject line 
        //  text: 'Hello world 🐴', // plaintext body 
        html: '<b>Hello world 🐴</b>' // html body 
    };
    var nodemailer = require('nodemailer');
    var transpostString = config.get("Email.Transporter");
    // create reusable transporter object using the default SMTP transport 
    var transporter = nodemailer.createTransport(transpostString);

    // send mail with defined transport object 
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.render('contactSucess', { title: 'Contact', year: new Date().getFullYear(), message: 'Message Send to' + error });
            console.log(error);
        }
        else {
            res.render('contactSucess', { title: 'Contact', year: new Date().getFullYear(), message: 'Message Send to' + req.body.name });
        }
        //console.log('Message sent: ' + info.response);
    });
    //console.log("ok");
};