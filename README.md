# Deno sandbox

## uname.ts
Get info about a host system by running the uname command.

### You can run this app with by calling:

    deno run uname.ts
which will prompt for run permission in a console.

### To allow run permission without a prompt you can use special flag:

    deno run --allow-run uname.ts
which will allow running any command from Deno runtime which is **not so safe** as specifying which commands you are allowing it to run:

    deno run --allow-run=uname uname.ts
This will allow running only the uname command and if an app will try to run other command it Deno will throw an error and exit  a process.
