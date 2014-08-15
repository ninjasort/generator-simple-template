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
  },
  {
    type: 'confirm',
    name: 'bootstrap',
    message: 'Would you like to include bootstrap?',
    default: true
  }
  ];

  this.prompt(prompts, function (props) {
    this.templateName = props.templateName;
    this.bootstrap = props.bootstrap;

    cb();
  }.bind(this));
};

SimpleTemplateGenerator.prototype.app = function app() {

  this.mkdir('css');
  this.mkdir('js');
  this.mkdir('scss');

  this.copy('style.scss', 'scss/style.scss');
  this.copy('style.css', 'css/style.css');
  this.template('main.js', 'js/main.js');

  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_bowerrc', '.bowerrc');
  this.directory('config', 'config');
  this.copy('_gitignore', '.gitignore');
  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('index.html', 'index.html');

};
