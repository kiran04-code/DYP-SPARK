function getEmailMessage(age) {
    let message = `<p>Your registration was successful.</p>`;
  
    if (age >= 1 && age <= 5) {
      message += ` Since your child is ${age} years old, they are in the early childhood stage. Follow the vaccination schedule to protect against serious illnesses. Important vaccines include MMR, DTP, polio, and chickenpox. THANK YOU FOR CONNECTING WITH US.`;
    } else if (age >= 6 && age <= 10) {
      message += ` Since your child is ${age} years old. Staying up to date on vaccines keeps you healthy and safe. Get the MMR booster, DTP booster, flu shot, and Hepatitis A & B. THANK YOU FOR CONNECTING WITH US.`;
    } else if (age >= 11 && age <= 16) {
      message += ` Since your child is ${age} years old, they are a teenager. Vaccines are essential for school, sports, and overall health. Get the HPV vaccine, meningococcal vaccine, flu shot, and Tdap booster. THANK YOU FOR CONNECTING WITH US.`;
    } else {
      message += ` Since your child is ${age} years old, consult your doctor for vaccine recommendations. Adults need routine boosters and protection against preventable diseases. Consider getting Tdap, flu, COVID-19, shingles, and pneumonia vaccines. THANK YOU FOR CONNECTING WITH US.`;
    }
  
    return `
     <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Registration Successful</title>
      </head>
      <body style="background-color: #f4f4f4; padding: 20px; font-family: Arial, sans-serif;">
          <table width="100%" cellspacing="0" cellpadding="0">
              <tr>
                  <td align="center">
                      <table width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); max-width: 100%;">
                          <tr>
                              <td align="center">
                                  <h2 style="color:blue;">Registration Successful</h2>
                                  ${message}
                                  <p style="color:#777; font-size: 12px;">For more information, visit our website or contact support.</p>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      </body>
      </html>
    `;
  }
  
  module.exports = getEmailMessage;
  