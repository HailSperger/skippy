export function serverlist(ns) {
    let serverlist = ['home'];
    for (let i = 0; i < serverlist.length; i++) {
        let connectedServers = ns.scan(serverlist[i]);
        for (let j = 0; j < connectedServers.length; j++) {
            if (!serverlist.includes(connectedServers[j])) {
                serverlist.push(connectedServers[j]);

            }
        }
    }
    return serverlist;
}

/** @param {NS} ns */
export async function main(ns) {
    ns.tprint(serverlist(ns));
} 
