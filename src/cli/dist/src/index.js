import { Command } from 'commander';
const program = new Command();
program
    .description('Обработка стандартных чисел.')
    .name('stdnum')
    .option('-f, --first', 'first', 'default123')
    .option('-s, --second <char> [x]', 'second', 'azaza567')
    .showHelpAfterError(true)
    .summary('azaza')
    .version('0.1.0');
program
    .command('isbn')
    .action((args) => {
    console.log(args);
});
program.parse();
const options = program.opts();
console.log(options);
