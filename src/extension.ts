'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    function registerCommandNice(commandId: string, run: (...args: any[]) => void): void {
		context.subscriptions.push(vscode.commands.registerCommand(commandId, run));
	}

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "neox" is now active!');

    registerCommandNice('type', function (args) {
		if (!vscode.window.activeTextEditor) {
			return;
		}
		
        console.log("This is the arg: " + args);
        
	});
}

// this method is called when your extension is deactivated
export function deactivate() {
}