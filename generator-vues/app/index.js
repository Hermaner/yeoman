var generators = require('yeoman-generator'),
    _ = require('yeoman-generator/node_modules/lodash'),
    glob = require('yeoman-generator/node_modules/glob'),
    chalk = require('yeoman-generator/node_modules/chalk'),
    log = console.log,
    fs = require('fs'),
    path = require('path'),
    del = require('del'),
    generatorName = 'vues';

module.exports = generators.Base.extend({
    constructor: function(){
        generators.Base.apply(this, arguments);

        var dirs = glob.sync('+(src)');
        //now _.contains has been abandoned by lodash,use _.includes
        if(_.includes(dirs, 'src')){
            log(chalk.bold.green('资源已经初始化，退出...'));
            setTimeout(function(){
                process.exit(1);
            }, 200);
        }
    },
    prompting: function(){
        var questions = [
        ]
        return this.prompt(questions).then(
            function(answers){
                for(var item in answers){
                    answers.hasOwnProperty(item) && (this[item] = answers[item]);
                }
            }.bind(this));
    },
    writing: function(){
        this.projectOutput = './dist';
        //拷贝文件
        this.directory('src');
        this.directory('build');
        this.directory('autogen');
        this.directory('config');
        this.copy('.babelrc');
        this.copy('package.json');
        this.copy('.eslintignore');
        this.copy('.eslintrc.js');
        this.copy('.gitignore');
        this.copy('apigen.js');
        this.copy('README.md');
    },
    end: function(){
        del(['src/**/.gitignore','src/**/.npmignore','src/js/index.js']);
        var dirs = glob.sync('+(node_modules)');
        if(!_.includes(dirs, 'node_modules')){
            //创建软连接
            this.spawnCommand('ln', ['-s', '/Users/herman/workspace/fengqu/packages/vues/node_modules', 'node_modules']);
        }
    }
})
