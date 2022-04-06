var canned = require('canned')
,   http = require('http')
,   opts = { logger: process.stdout }

can = canned('/path/to/canned/response/folder', opts)

http.createServer(can).listen(4000)