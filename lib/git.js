module.exports = function(cb){
	var exec = require('child_process').exec;
	exec('git status', function (error, stdout, stderr) {
		if(stdout){
			var out = stdout;
			out = out.replace("On branch", "今いるブランチ：")
			out = out.replace("Untracked files:", "管理下にないファイル：")
			out = out.replace('use "git add <file>..." to include in what will be committed)', "コミットに含めたいときは「追加」をおしてね")
			out = out.replace('nothing added to commit but untracked files present (use "git add" to track)', "コミットするファイル、何もないのでまず「追加」してね")
			
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