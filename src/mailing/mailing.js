const nodemailer = require("nodemailer");
//const bodyParser = require("body-parser");

const sendMail = async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // o tu proveedor de correo
    auth: {
      user: "sanguinad@gmail.com",
      pass: "dtca jrei nuuq snym",
    },
  });

  const mailOptions = {
    from: "sanguinad@gmail.com",
    to: "sanguinad@gmail.com",
    subject: `Nuevo mensaje del portafolio de ${nombre} : ${email}`,
    name: nombre,
    text: mensaje,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Error al enviar correo", error.message, error.response);
  }
};

module.exports = {
  sendMail,
};
