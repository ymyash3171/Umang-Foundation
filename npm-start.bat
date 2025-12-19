@echo off
setlocal enabledelayedexpansion
set "NODE_PATH=C:\nodejs"
set "PATH=C:\nodejs;!PATH!"
"C:\nodejs\node.exe" "C:\nodejs\node_modules\npm\bin\npm-cli.js" %*
