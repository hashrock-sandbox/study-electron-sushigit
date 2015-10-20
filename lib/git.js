var exec = require('child_process').exec;
var exec_git_cmd = function(cmd, rep, cb){
	exec(cmd, function (error, stdout, stderr) {
		if(stdout){
			var out = stdout;
			for (var i = 0; i <rep.length; i++){
				out = out.replace(rep[i][0], rep[i][1]);
			}
			cb(out);
			console.log('stdout: ' + out);
		}
		if(stderr){
			cb(stderr);
			console.log('stderr: ' + stderr);
		}
		if (error !== null) {
			cb(error);
			console.log('Exec error: ' + error);
		}
	});
}
var status = function(cb){
	var rep = [
		["On branch", "今いるブランチ："],
		["Untracked files:", "管理下にないファイル："],
		['use "git add <file>..." to include in what will be committed]', "コミットに含めたいときは「追加」をおしてね"],
		['nothing added to commit but untracked files present (use "git add" to track]', "コミットするファイル、何もないのでまず「追加」してね"]
	];
	exec_git_cmd("git status", rep, cb)
};
var add_all = function(cb){
	var rep = [["", ""]];
	exec_git_cmd("git add . --all", rep, cb)
}


module.exports = {
	status: status,
	add_all : add_all
}
