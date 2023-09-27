const fs=require("fs");
var names=["Sidhart12","raman2345","sanket321","dhruv23132","manjunath8181","arungov56","harshitm312","karma3211","gaurav6782","aditya5643"];


for(var i=0;i<names.length;i++)
{
    fs.appendFileSync("random-word.txt",names[i]);
    fs.appendFileSync("random-word.txt","\n");
}