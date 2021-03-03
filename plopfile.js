module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of the component',
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/FunctionComponent.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile: 'plop-templates/ComponentStyles.module.css.hbs',
      },
      {
        type: 'append',
        path: 'src/index.ts',
        template: `export { default as {{pascalCase name}} } from './components/{{pascalCase name}}/{{pascalCase name}}';`,
      }
    ],
  });
}
