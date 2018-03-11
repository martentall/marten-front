export class TextRow {

  text: string;
  length: number;
  caret: number;

  constructor(text:string) {
    this.text = text;
    this.length = text.length;
    this.caret = 0;
  }

  shiftCaret(): void {
    this.caret++;
  }

  getCaretChar(): string {
    return this.text.charAt(this.caret);
  }
  isAtEnd(): boolean {
    return this.caret === this.length;
  }
}
