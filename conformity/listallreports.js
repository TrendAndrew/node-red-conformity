
module.exports = function(RED) {

    function ListAllReports(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node._cloudone = RED.nodes.getNode(config.cloudone);
 
        node.on('input', function(msg) {

            const params = {
                method: "GET",
                uri: {
                    service: 'conformity',
                    region: (msg && msg.payload && msg.payload.region) || undefined,
                    path: "reports"
                },
                headers: {
                    'Api-Version': 'v1',
                    'Content-Type': 'application/vnd.api+json'
                }
            };

            if (config.accountId || config.groupId) {
                params.qs = {
                    accountId : config.accountId,
                    //groupId : config.groupId
                };
            }

            node._cloudone.call(node, params, null, function(body) {
                console.log(body);
                if (!body || !body.data) {
                    node.status({ fill:"red", shape:"ring", text:"Response Error, Missing 'data'." });
                    return;
                }
                const count = body.data.length;
                node.status({ fill:"green", shape:"dot", text:"Listed " + count + ' report' + (count === 1 ? '' : 's')});
                node.send({
                    payload: body.data
                });
            });
        });
    }
    RED.nodes.registerType("list all reports", ListAllReports);
};
