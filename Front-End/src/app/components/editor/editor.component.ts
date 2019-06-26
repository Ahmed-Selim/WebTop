import { Component, OnInit, ViewChild } from '@angular/core';
import { TerminalService } from 'primeng/components/terminal/terminalservice';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';

const THEME = 'ace/theme/github';
const LANG = 'ace/mode/javascript';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [TerminalService]
})
export class EditorComponent implements OnInit {

  compile = eval ;
  text = '';
  @ViewChild('editor') editor;
  private codeEditor: ace.Ace.Editor;
  private editorBeautify ;


  constructor(private terminalService: TerminalService) {
    this.terminalService.commandHandler.subscribe(command => {
      const response =
      // (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
      this.compile(`
      "use strict";
      console.oldlog = console.log ;
      console.log = function (value) { console.oldlog(value); return value; } ;
      ${command}`)();
      this.terminalService.sendResponse(response);
    });
  }

  ngOnInit() {
    const element = this.editor.nativeElement;
        const editorOptions = this.getEditorOptions();

        this.codeEditor = ace.edit(element, editorOptions);
        this.codeEditor.setTheme(THEME);
        this.codeEditor.getSession().setMode(LANG);
        this.codeEditor.setShowFoldWidgets(true); // for the scope fold feature
        this.editorBeautify = ace.require('ace/ext/beautify') ;
  }

  private getEditorOptions(): Partial<ace.Ace.EditorOptions> & { enableBasicAutocompletion?: boolean; } {
    const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
        highlightActiveLine: true,
        minLines: 14,
        maxLines: Infinity,
    };

    const extraEditorOptions = {
        enableBasicAutocompletion: true
    };
    const margedOptions = Object.assign(basicEditorOptions, extraEditorOptions);
    return margedOptions;
  }

  public beautifyContent() {
    if (this.codeEditor && this.editorBeautify) {
       const session = this.codeEditor.getSession();
       this.editorBeautify.beautify(session);
    }
  }

  public getCode() {
    const code = this.codeEditor.getValue();
    console.log(code);
  }

}
