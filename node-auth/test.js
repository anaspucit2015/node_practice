var code = 'C000000'
var num = 1999;
var codestr = num.toString();
var length = codestr.length;

if(code.length-length <= 0)
{
  code = code.slice(0,1)
}
else
{
  code = code.slice(0,code.length-length)
}
console.log(code+codestr);
