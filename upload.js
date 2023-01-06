var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            var newpath = __dirname + '/uploads/' + files.filetoupload.originalFilename;
            console.log(newpath);

            // fs.rename(oldpath, newpath, function (err) {
            //     if (err) throw err;
            //     res.write('File uploaded and moved!');
            //     res.end();
            // });

            fs.readFile(oldpath, function (err, data) {
                if (err) throw err;
                console.log('File read!');

                // Write the file
                fs.writeFile(newpath, data, function (err) {
                    if (err) throw err;
                    res.write('File uploaded and moved!');
                    res.end();
                    console.log('File written!');
                });

                // Delete the file
                // fs.unlink(oldpath, function (err) {
                //     if (err) throw err;
                //     console.log('File deleted!');
                // });
            });
        });
    } else if (req.url == '/') {
        // res.writeFile("index.html");
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        // res.write('<input type="file" name="filetoupload"><br>');
        // res.write('<input type="submit">');
        // res.write('</form>');
        //return res.end();
    }
}).listen(8081);
