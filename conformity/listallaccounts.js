
module.exports = function(RED) {

    function ListAllAccounts(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node._cloudone = RED.nodes.getNode(config.cloudone);
 
        node.on('input', function(msg) {
            node._cloudone.call(node, {
                method: "GET",
                uri: "https://integrations.us-1.cloudone.trendmicro.com/api/integrations",
                headers: {
                    'Api-Version': 'v1'
                }
            }, null, function(body) {
                console.log(body.integrations);
                if (!body || !body.integrations) {
                    node.status({ fill:"red", shape:"ring", text:"Response Error, Missing 'integrations'." });
                    return;
                }
                const count = body.integrations.length;
                node.status({ fill:"green", shape:"dot", text:"Listed " + count + ' integration' + (count === 1 ? '' : 's')});
                node.send({
                    payload: body
                });
            });
        });
    }
    RED.nodes.registerType("list all accounts", ListAllAccounts);
};
