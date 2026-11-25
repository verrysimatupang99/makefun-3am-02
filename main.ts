const MESSAGE =
  'fix: it works now. do not ask what changed. do not ask why. do not ask.';

function renderLine(shout: boolean): string {
  return shout ? MESSAGE.toUpperCase() : MESSAGE;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function hasOnlyKnownFlags(): boolean {
  return process.argv.slice(2).every((arg) => arg === '--shout' || arg === '--help');
}

function showHelp(): void {
  console.error('Usage: node main.ts [--shout] [--help]');
}

function main(): void {
  if (hasFlag('--help')) {
    showHelp();
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
