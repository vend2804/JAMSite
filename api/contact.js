const http = require('http')

// create Node server
const server = http.createServer( (req, res) =>{
    
    // only accept POST
    if (req.method === 'POST')
    {
        // read post body (form data)
        let body =''
        req.on('data', data => {body += data} )

        // handle POST received
        req.on ('end', () =>{

            console.log(body)
            
            //Response
            res.writeHead(200,{'Content-Type': 'text/plain'})
            res.end('Success')
        })

    }

})

// Listen for Contact Form Submission
server.listen(2222)
