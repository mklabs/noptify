### noptify

noptify is a little wrapper around `nopt` module adding a more expressive,
commander-like, API and few helpers.

Examples

     var program = noptify(process.argv, { program: 'name' })
       .version('0.0.1')
       .option('port', '-p', 'Port to listen on (default: 35729)', Number)
       .option('pid', 'Path to the generated PID file', String)

     var opts = program.parse();

Returns an instance of `Noptify`

### Noptify

Noptify provides the API to parse out option, shorthands and generate the
proper generic help output.

- args     - The Array of arguments to parse (default: `process.argv`);
- options  - An hash of options with the following properties
  - program - The program name to use in usage output

Every noptify instance is created with two options, `-h, --help` and `-v,
--version`.

### Noptify#parse

Parse the provided options and shorthands, pass them through `nopt` and
return the result.

When `opts.help` is set, the help output is displayed and `help`
event is emitted. The process exists with `0` status, the help output is
automatically displayed and the `help` event is emitted.

Examples

    var program = noptify(['foo', '--help'])
      .on('help', function() {
        console.log('Examples');
        console.log('');
        console.log('  foo bar --baz > foo.txt');
      });

    var opts = program.parse();
    // ... Help output ...
    // ... Custom help output ...
    // ... Exit ...



### Noptify#version

Define the program version.

### Noptify#option

Define `name` option with optional shorthands, optional description and optional type.

### Noptify#help

Simply output to stdout the Usage and Help output.

