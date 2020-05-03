'use strict';

const JWT = require('jsonwebtoken');

const SECRET = 'HelloWorld!';
const JAVA_JWT = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmb28iLCJiYXIiOiJiYXoifQ.1MOXGiwGTFLU7-YMvOe2_q2ZRUHAMCVS7pbnOkRKCFV1HIvY8odBaqWVCQRuT2RUbKtGgA2elFRsuka4K1KP7A';

JWT.verify(JAVA_JWT, SECRET, { algorithms: ['HS512'] })

/*
var user = { username: 'batman' };

// Signing the token
var token = jwt.sign( user, 'ThisStringIsASecret' );

// Generated token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJhdG1hbiIsImlhdCI6MTQ4NTM3MTc0MywiZXhwIjoxNDg1Mzc1NzQzfQ.nxFDJGNnEvx4wDwcPk0puvcvtJArm2MxpZc4bn0XrSs

// Verifying the token
jwt.verify( token, new Buffer( 'ThisStringIsASecret', 'base64' ), function ( err, decoded ) { /**/ // });
//
