/*
setTimeout(() => {
	console.log("setTimeout()");
}, 100);

console.log("global");

let end = (new Date()).getTime() + 3000;
while ((new Date()).getTime() < end) { }
*/

/*
setTimeout(() => {
	console.log("setTimeout()");
});

setImmediate(() => {
console.log("setImmediate()");
});

process.nextTick(() => {
	console.log("nextTick()");
});

Promise.resolve().then(() => {
	console.log("Promise.resolve().then()");
});
*/

/* console出力の違い
console.log("Hello");
console.trace("World");
console.log("Message: %o", {hello: "world"});
*/

/* 処理時間の計測
let sum = 0;
console.time("timer1");
for (let i = 1; i < 1000; i++) {
	sum += i;
}
console.timeEnd("timer1");
*/

// console.log(JSON.stringify(process.env, null, 2));
for(let i =0; i < process.argv.length; i++) {
	console.log(`${i} : ${process.argv[i]}`);
}