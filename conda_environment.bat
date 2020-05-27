@echo off

set envName=py37_Project3_React
set pyVersion=3.7

rem You must use "call" otherwise Windows stops executing after the first non-call 
call conda create --name %envName% python=%pyVersion% --verbose --yes

rem install dependencies
rem call conda install flask --name %envName% --verbose --yes

rem activate the environment
call activate %envName%

rem display the current environment
call conda info

npm start