'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import fs = require('fs');

import {sort} from '../src/util';

var pressedKeysList: string[] = [];
var lookUpDic: Map<string, string> = new Map<string, string>();

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    //load mappings file
    var rawData = fs.readFileSync('NeoXMapping.mapping','utf8');
    
    for (var row of rawData.split("\r\n")) {
        var keyValue = row.split(" ");

        lookUpDic.set(sort(keyValue[0]), keyValue[1]);
    }

    function registerCommandNice(commandId: string, run: (...args: any[]) => void): void {
		context.subscriptions.push(vscode.commands.registerCommand(commandId, run));
	}

    function type(text: string): void {	
        console.log(text);

        vscode.commands.executeCommand('default:type', {
            text: text
        });
	}

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "neox" is now active!');

    registerCommandNice('type', function (args) {
		if (!vscode.window.activeTextEditor) {
			return;
		}
		
        if (args["text"] == " ") {
            type(pressedKeysList.reduce((x,y) => x + y) + " ");

            pressedKeysList = [];
        } else {            
            pressedKeysList.push(args["text"]);
        }
        
	});
}

// this method is called when your extension is deactivated
export function deactivate() {
}