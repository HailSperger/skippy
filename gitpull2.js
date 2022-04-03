/** @param {NS} ns */
export async function main(ns) {
	let BASEURL = ns.read('/skippy/baseurl.txt').length > 0 ? ns.read('/skippy/baseurl.txt') : 'https://raw.githubusercontent.com/HailSperger/skippy/main/';
  await ns.wget(BASEURL + "gitpull.js", "/skippy/gitpull.js");
  await ns.wget(BASEURL + "weaken.js", "/skippy/weaken.js");
  await ns.wget(BASEURL + "grow.js", "/skippy/grow.js");
  await ns.wget(BASEURL + "hack.js", "/skippy/hack.js");
	await ns.wget(BASEURL + "serverlist.js", "/skippy/serverlist.js");
}
