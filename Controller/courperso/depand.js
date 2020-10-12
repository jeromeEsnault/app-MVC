/*
 *  dependance
 ***************************/
/*
 *  bcrypt
 ***************************/
const bcrypt = require("bcrypt");
/*
 *  body parser
 ***************************/
const bodyparser = require("body-parser");
/*
 *  connect-flash
 ***************************/
const connectflash = require("connect-flash");
/*
 *  connect mongo
 ***************************/
const connectmongo = require("connect-mongo");
/*
 *  dotenv
 * ne pas utiliser ainsi
 ***************************/
//(env = "dotenv",)
/*
 *  express
 ***************************/
const express = require("express");
/*
 *  express-fileupload
 ***************************/
expressfileupload = require("express-fileupload"),
    /*
     *  express-sessoin
     ***************************/
    expressSession = require("express-session"),
    /*
     *  mongoose
     ***************************/
    mongoose = "mongoose",
    /*
     *  handlebars
     **************************
     *             * DOC *
     * https://handlebarsjs.com/guide/#what-is-handlebars
     * Handlebars est un langage de modélisation simple .
     *
     * Il utilise un modèle et un objet d'entrée pour générer du HTML ou d'autres formats de texte. 
     * Les modèles de guidons ressemblent à du texte normal avec des expressions de guidons intégrées.
     ************************************/
    handlebars = "handlebars", // permet linbrication de chaque element de html ou autre
    /*
     *  handlebars helpers
     ***************************/
    handlebarshelpers = "handlebars-helpers",
    /*
     *  handlebars moment
     ***************************/
    handlebarsmoment = "handlebars.moment",
    /*
     *  express-handlebars
     ***************************/
    expresshandlebars = "express-handlebars";
/*
 *  mongoose populate
 ***************************/
const { createPopulateHook } = require('mongoose-populate')