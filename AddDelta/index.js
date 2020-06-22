module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed AddDelta request.');
    
    if (req.query.ground || (req.body && req.body.ground)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: 10 + +(req.query.ground || req.body.ground)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a ground value on the query string or in the request body"
        };
    }

    context.done();
};