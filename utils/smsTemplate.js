function getSMSMessage(age, email) {
    return `Registration successful. You're ${age} years old. Check your email ${email} for vaccine guidance.`;
  }
  
  module.exports = getSMSMessage;
  