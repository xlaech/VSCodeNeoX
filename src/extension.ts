'use strict';
import * as vscode from 'vscode';
import fs = require('fs');

import {sort} from '../src/util';
import {getNeoXMap} from '../src/mappings/NeoXMapping'

var pressedKeysList: string[] = [];
var lookUpDic: Map<string, string> = getNeoXMap();

export function activate(context: vscode.ExtensionContext) {   

    function registerCommandNice(commandId: string, run: (...args: any[]) => void): void {
		context.subscriptions.push(vscode.commands.registerCommand(commandId, run));
	}

    function type(text: string): void {	
        vscode.commands.executeCommand('default:type', {
            text: text
        });
	}

    console.log('neox is now active!');

    registerCommandNice('type', function (args) {
		if (!vscode.window.activeTextEditor) {
			return;
		}
		
        if (args["text"] == " ") {
            var key = sort(pressedKeysList.reduce((x,y) => x + y));

            // if the lookuptable contains a lookup => write it out
            if (lookUpDic.has(key)) {            
                type(lookUpDic.get(key) + " ");
            }

            pressedKeysList = [];
        } else {
            pressedKeysList.push(args["text"]);
        }
        
	});
}

export function deactivate() {}