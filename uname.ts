const process = Deno.run({cmd: ['uname', '-a'], stdout: 'piped', stderr: 'piped'});

console.log({status: await process.status(), output: new TextDecoder().decode(await process.output()) });
