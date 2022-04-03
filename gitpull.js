/** @param {NS} ns */
export async function main(ns) {
	let BASEURL = ns.read('/skippy/baseurl.txt').length > 0 ? ns.read('/skippy/baseurl.txt') : 'https://raw.githubusercontent.com/HailSperger/skippy/main/';
	ns.wget(BASEURL + "gitpull2.js", "/skippy/gitpull2.js");
}
