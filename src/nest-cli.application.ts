import {Program} from './common/interfaces/program.interface';
import {CaporalProgram} from './core/caporal/caporal.program';
import {CreateCommandDescriptor} from './lib/command-descriptors/create.command-descriptor';
import {GenerateCommandDescriptor} from './lib/command-descriptors/generate.command-descriptor';

export class NestCliApplication {
  public static run() {
    new CaporalProgram()
      .version('1.0.0')
      .help('Nest.js CLI')
      .declare(program => {
        CreateCommandDescriptor.declare(program.command('new', 'Create a new Nest application'));
        GenerateCommandDescriptor.declare(program.command('generate', 'Generate a new Nest asset'));
      })
      .listen();
    /*
    const cli = prog.version('1.0.0').help('Nest.js CLI');

    cli.command('new', 'Create a new Nest application')
      .argument('<app>', 'App name')
      .argument('[destinationDir]', 'The destination directory (uses app name by default)', null, "")
      .option('-r, --repo <repo>', 'Source repository to clone', '', 'https://github.com/KerryRitter/nest-typescript-starter')
      .action((args, options, logger) => {

        const processor = new NewProjectProcessor(
          args.app,
          `${process.cwd()}\\${args.destinationDir}`,
          options.repo);

        processor.process().then(() => {
          console.info("Your Nest project has successfully been created. Run `npm install` or `yarn` and use `npm run start` to start your new Nest application!")
        }).catch(e => {
          console.error("Could not initialize Nest project: ", e);
        });
      });

    cli.command('generate', 'Generate a new Nest asset')
      .alias('g')
      .argument('<type>', 'What to generate', ['module', 'controller', 'component', 'middleware', 'gateway', 'gateway-middleware', 'filter'])
      .argument('<name>', 'Name of the generated asset')
      .argument('[destinationFile]', 'The destination file name (./{name}.{asset type}.ts by default)', null, null)
      .action((args, options, logger) => {

        const config = NestConfigService.getConfig();

        const defaultFileName = `${args.name}.${args.type}.${config.language === "ts" ? "ts" : "js"}`

        const processor = new NewAssetProcessor(
          config,
          args.type,
          args.name,
          `${process.cwd()}\\${args.destinationFile || defaultFileName}`);

        processor.process();
      });

    cli.command('serve', 'Start a localhost development server')
      .option('-p, --port <port>', 'Port to run the server on', '', 8080)
      .action((args, options, logger) => {
        console.log(args, options);
      });

    cli.command('build', 'Compile the Nest application')
      .option('-p, --port <port>', 'Port to run the server on', '', 8080)
      .action((args, options, logger) => {
        console.log(args, options);
      });

    cli.parse(process.argv);
    */
  }
}