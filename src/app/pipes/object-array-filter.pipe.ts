import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectArrayFilter',
})
export class ObjectArrayFilterPipe implements PipeTransform {
  transform(
    value: unknown[],
    text: string,
    field: string = 'title'
  ): unknown[] {
    if (!value) {
      return value;
    }
    if (text === '') {
      return value;
    }
    return value.filter((x) =>
      x[field].toLowerCase().includes(text.toLowerCase())
    );
  }
}
