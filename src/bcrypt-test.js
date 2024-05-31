import bcrypt from "bcrypt";

const pw = "13579";

const hash = await bcrypt.hash(pw, 8);

console.log({ hash });

const hash2 = "$2b$08$9K.vwin5ADoYd6COGCelReZel5peWWHEtA/EIvoG7CEdEf9FisHWO";

//比對
const result = await bcrypt.compare("13579_", hash2);
console.log({ result });