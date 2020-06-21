var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

app.set('')
http.createServer(function(req,res){
    res.write('<head><meta charset="utf-8"/></head>')
    res.write("小徐搭建nodeJs成功")
    res.end()
}).listen(3000);