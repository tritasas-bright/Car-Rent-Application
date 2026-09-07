send_email( 
    user_emails , 
    "" , 
    "แจ้งเตือน : เอกสารขอยืมรถยนต์" , 

    `<br>
    สรุปงานประจำวัน ${dayjs(now).format("DD/MM/YYYY")} <br> 
    <br>
    คุณมีเอกสารการขอตั๋วเดินทาง Grab ในวันนี้ <br>` , 

    `เอกสารขอยืมรถยนต์` , 
    `${url_now}/car_rent_document_list` , 

    "สามารถกดที่ปุ่มด้านบนนี้ เพื่อเข้าสู่ระบบ" 
)


const transporter = nodemailer.createTransport({
  host : "smtp.office365.com" , 
  post : 587 ,
  secure : false ,
  auth: {
    user: 'tritasasp@synteccon.com',
    pass: 'TR@903882'
  },
  tls: {
      ciphers:'SSLv3'
  }
});

async function send_email( rec_email , rec_name , email_title , email_description_header , link_title , link_herf , email_description_footer ){
  try {
    const mailOptions = {
      from: 'tritasasp@synteccon.com',
      to: rec_email ,
      subject: `${email_title}` ,
      html: `
      <!doctype html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>Simple Transactional Email</title>
            <style>
              @media only screen and (max-width: 620px) {
                table.body h1 {
                  font-size: 28px !important;
                  margin-bottom: 10px !important;
                }
              
                table.body p,
              table.body ul,
              table.body ol,
              table.body td,
              table.body span,
              table.body a {
                  font-size: 16px !important;
                }
              
                table.body .wrapper,
              table.body .article {
                  padding: 10px !important;
                }
              
                table.body .content {
                  padding: 0 !important;
                }
              
                table.body .container {
                  padding: 0 !important;
                  width: 100% !important;
                }
              
                table.body .main {
                  border-left-width: 0 !important;
                  border-radius: 0 !important;
                  border-right-width: 0 !important;
                }
              
                table.body .btn table {
                  width: 100% !important;
                }
              
                table.body .btn a {
                  width: 100% !important;
                }
              
                table.body .img-responsive {
                  height: auto !important;
                  max-width: 100% !important;
                  width: auto !important;
                }
              }
              @media all {
                .ExternalClass {
                  width: 100%;
                }
              
                .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass font,
              .ExternalClass td,
              .ExternalClass div {
                  line-height: 100%;
                }
              
                .apple-link a {
                  color: inherit !important;
                  font-family: inherit !important;
                  font-size: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
                  text-decoration: none !important;
                }
              
                #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
                  font-size: inherit;
                  font-family: inherit;
                  font-weight: inherit;
                  line-height: inherit;
                }
              
                .btn-primary table td:hover {
                  background-color: #34495e !important;
                }
              
                .btn-primary a:hover {
                  background-color: #04884A !important;
                  border-color: #04884A !important;
                }
              }
            </style>
          </head>
          <body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a preview.</span>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="max-width: 600px; border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
              <tr>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
                <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
                  <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">
                    <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
                      <tr>
                        <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                            <tr>
                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">
                                  ${rec_name}
                                </p>
                                <p style="max-width: 520px; font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">
                                  ${email_description_header}
                                </p>
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%;" width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="left" style="width: 100%; font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top">
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100% !important; border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                          <tbody>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px; text-align: center; background-color: #3498db;" valign="top" align="center" bgcolor="#3498db">
                                                <a href="${link_herf}" target="_blank" style="width: 100% !important; border: solid 1px #50B748; border-radius: 5px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize; background-color: #50B748; border-color: #50B748; color: #ffffff;">
                                                ${link_title}
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">
                                  ${email_description_footer}
                                </p>
                                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">ขอแสดงความนับถือ</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tr>
                          <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                            <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">SYNTECH CONSTRUCTION PUBLIC COMPANY LIMITED</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                            พบปัญหาการใช้งาน กรุณาติดต่อ DIS <br> - - - - -
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </td>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
              </tr>
            </table>
          </body>
        </html>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.log("error to send email");
    console.log(error.toString());
  }
}