const fs = require('fs');

let dirName = './test';
let fileName = 'file1.js';
// 创建文件夹
fs.mkdir(dirName,(err) => {
	if(err) throw err;
	console.log('创建成功');
})

// 文件内容
const data = `
function test() {
	console.log('✌️');
}
`
// 通过 flag:'wx' 判断文件是否已经存在
// 'wx' - 类似 'w'，但如果文件存在则失败。
fs.writeFile(fileName,data,{flag:'wx'}, (err) => {
	if(err) throw err;
	console.log('写入成功');
})


/** 
 * 以下是为什么不建议在 fs.open(), fs.readFile() or fs.writeFile() 之前使用fs.access()、fs.stat()
 *  Using fs.stat() to check for the existence of a file before calling fs.open(), fs.readFile() or fs.writeFile() is not recommended. Instead, user code should open/read/write the file directly *   and handle the error raised if the file is not available. 
 *  如此处理会造成紊乱情况，因为其他进程可能在两个调用之间改变该文件的状态
*/