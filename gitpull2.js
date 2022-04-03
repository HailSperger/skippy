/** @param {NS} ns */
export async function main(ns) {
	let BASEURL = ns.read('/skippy/baseurl.txt').length > 0 ? ns.read('/skippy/baseurl.txt') : 'https://raw.githubusercontent.com/HailSperger/skippy/main/';
  ns.wget(BASEURL + "gitpull.js", "/skippy/gitpull.js");
  ns.wget(BASEURL + "weaken.js", "/skippy/weaken.js");
  ns.wget(BASEURL + "grow.js", "/skippy/grow.js");
  ns.wget(BASEURL + "hack.js", "/skippy/hack.js");
}
