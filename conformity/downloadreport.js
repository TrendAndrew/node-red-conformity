
module.exports = function(RED) {

    function DownloadReport(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node._cloudone = RED.nodes.getNode(config.cloudone);
 
        node.on('input', function(msg) {

            const reportId = msg.payload.reportId || config.reportId;
            const entityId = msg.payload.entityId || config.entityId;
            const reportType = msg.payload.reportType || config.reportType || 'csv';
            
            const params = {
                method: "GET",
                uri: {
                    service: 'conformity',
                    region: (msg && msg.payload && msg.payload.region) || undefined,
                    path: 'reports/' + reportId + '/' + entityId + '/' + reportType
                },
                headers: {
                    'Api-Version': 'v1',
                    'Content-Type': 'application/vnd.api+json'
                }
            };

            node._cloudone.call(node, params, null, function(body) {
                console.log(body);
                if (!body || !body.url) {
                    node.status({ fill:"red", shape:"ring", text:"Response Error, Missing 'url'." });
                    return;
                }
                node.status({ fill:"green", shape:"dot", text:'Retrieved report url'});
                node.send({
                    payload: body
                });
            });
        });
    }
    RED.nodes.registerType("download report", DownloadReport);
};
