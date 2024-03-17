import { Command, Option } from 'commander';

const program = new Command();

program
  .description('Обработка стандартных чисел.')
  .name('stdnum')
  .option('-f, --first', 'first', 'default123')
  .option('-s, --second <char> [x]', 'second', 'azaza567')
  .showHelpAfterError(true)
  .version('0.1.0')
;

program
  .command('isbn')
  // .action((args) => {
// console.log(args);
  // })
  .argument('id', 'an ISBN')
  .addOption(
    new Option('-10, --to-10', 'convert to ISBN-10')
      .conflicts('to13')
    ,
  )
  .addOption(
    new Option('-13, --to-13', 'convert to ISBN-13')
      .conflicts('to10')
    ,
  )
;

program.parse();

// const options = program.opts();
// console.log(options);
