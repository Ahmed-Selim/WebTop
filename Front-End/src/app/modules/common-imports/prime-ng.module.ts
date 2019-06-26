import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputMaskModule } from 'primeng/inputmask';
import { TerminalModule } from 'primeng/terminal';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabViewModule,
    TooltipModule,
    EditorModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    ColorPickerModule,
    InputMaskModule,
    TerminalModule,
    AceEditorModule
  ],
  exports: [
    CommonModule,
    TabViewModule,
    TooltipModule,
    EditorModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    ColorPickerModule,
    InputMaskModule,
    TerminalModule,
    AceEditorModule
  ]
})
export class PrimeNgModule { }
