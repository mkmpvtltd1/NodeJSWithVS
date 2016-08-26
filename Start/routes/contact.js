
exports.contact = function (req, res) {
    var captchapng = require('captchapng');
    var p = new captchapng(80, 30, parseInt(Math.random() * 9000 + 1000)); // width,height,numeric captcha 
    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha) 
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha) 

    var img = p.getBase64();
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: '', captcha: img });
};
exports.contactProcess = function (req, res) {
    var config = require('config');
    var mailOptions = {
        from: '"' + config.get("Email.AdminName") + '👥" <' + config.get("Email.AdminEmail") + '>', // sender address 
        to: config.get("Email.AdminEmail"), // list of receivers , email can be spereated using coma','.
        subject: 'Message from ' + req.body.name + ' ' + req.body.surname + '(' + req.body.email + ')', // Subject line 
        //  text: 'Hello world 🐴', // plaintext body 
        html: 'Mobile:' + req.body.phone + '<br/>' + req.body.message // html body 
    };
    var nodemailer = require('nodemailer');
    var transpostString = config.get("Email.Transporter");
    // create reusable transporter object using the default SMTP transport 
    var transporter = nodemailer.createTransport(transpostString);
    var captchapng = require('captchapng');
    var p = new captchapng(80, 30, parseInt(Math.random() * 9000 + 1000)); // width,height,numeric captcha 
    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha) 
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha) 

    var img = p.getBase64();
    // res.render('contact', { captcha_error: 'error' });
    // send mail with defined transport object 
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.render('contact', { title: 'Contact', year: new Date().getFullYear(), response: error, captcha: img });
            console.log(error);
        }
        else {
            res.render('contact', { title: 'Contact', year: new Date().getFullYear(), response: 'Message Send Sucess!!', captcha: img });
        }
        //console.log('Message sent: ' + info.response);
    });
    //console.log("ok");
};