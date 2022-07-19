
module.exports = function(RED) {

    function ListAllReports(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node._cloudone = RED.nodes.getNode(config.cloudone);
 
        node.on('input', function(msg) {
            node._cloudone.call(node, {
                method: "GET",
                uri: "https://conformity.us-1.cloudone.trendmicro.com/api/reports",
                headers: {
                    'Api-Version': 'v1',
                    'Content-Type': 'application/vnd.api+json'
                }
            }, null, function(body) {
                console.log(body);
                if (!body || !body.data) {
                    node.status({ fill:"red", shape:"ring", text:"Response Error, Missing 'data'." });
                    return;
                }
                const count = body.data.length;
                node.status({ fill:"green", shape:"dot", text:"Listed " + count + ' account' + (count === 1 ? '' : 's')});
                node.send({
                    payload: body.data
                });
            });
        });
    }
    RED.nodes.registerType("list all reports", ListAllReports);
};
