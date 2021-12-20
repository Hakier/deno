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


## http-server.ts
Start a simple HTTP server.

### To run this app you must allow network access:
    deno run --allow-net=127.0.0.1:8000 http-server.ts
This will allow accessing only a `127.0.0.1` **host** on `8000` **port**.

### To change a port you must allow different port number and pass it as first argument to the app:
    deno run --allow-net=127.0.0.1:9000 http-server.ts 9000

### To change also a host or hostname you must allow different hostname, port number and pass them respectively as first and second argument:
    deno run --allow-net=0.0.0.0:9000 http-server.ts 9000 0.0.0.0
