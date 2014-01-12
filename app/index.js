'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var SimpleTemplateGenerator = module.exports = function SimpleTemplateGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(SimpleTemplateGenerator, yeoman.generators.Base);

SimpleTemplateGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [
  {
    type: 'input',
    name: 'templateName',
    message: 'Please enter a name for your project.',
    default: 'Simple Project'
  }
  ];

  this.prompt(prompts, function (props) {
    this.templateName = props.templateName;

    cb();
  }.bind(this));
};

SimpleTemplateGenerator.prototype.app = function app() {

  this.mkdir('css');
  this.mkdir('js');
  this.mkdir('scss');

  this.copy('config.rb', 'config.rb');
  this.copy('style.scss', 'scss/style.scss');
  this.copy('style.css', 'css/style.css');
  this.copy('main.js', 'js/main.js');

  this.copy('_package.json', 'package.json');
  this.copy('_gitignore', '.gitignore');
  this.copy('_bower.json', 'bower.json');
  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('index.html', 'index.html');

};
