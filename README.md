Keystore Generator
=========
Simplest way to generate keystores, don't want to rembember longer commands. To work this module perfectly Java JDK should be installed and java path variable should be present.

Usage
-----
You can use this library to generate a keystore for sign apk on current working directory.

Install globally
`npm install -g keystore-generator`

To generate keystore on working directory run
`kg key generate`

Library uses below command to generate the keystore file,
`keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000`

License
-------
GNU GPL ([see](https://github.com/codingwithmrdev/keystore-generator/blob/master/LICENSE))