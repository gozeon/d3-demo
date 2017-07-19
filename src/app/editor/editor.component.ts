import { Component, OnInit, Input } from '@angular/core';
import * as ace from 'brace';
import { Editor } from 'brace';
import 'brace/theme/xcode.js';
import 'brace/mode/javascript.js';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  private editor: Editor;
  @Input() code: string;

  constructor() { }

  ngOnInit() {
    this.editor = ace.edit('editor');
    this.editor.setOptions({
      tabSize: 2
    });
    this.editor.setTheme('ace/theme/xcode');
    this.editor.getSession().setMode('ace/mode/javascript');
    this.editor.setValue(this.code);
    this.editor.setReadOnly(true);
  }
}
