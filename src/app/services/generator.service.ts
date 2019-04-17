import { InjectionToken } from '@angular/core';
import { GeneratorService } from '../local-storage/generatorService/generator-service.service';

export const hashGenerator = new InjectionToken<any[]>('HashGenerator');

// Factory function, that generates a random string of given length n.

export function GeneratorFactory(length: number) {
  return function generate(data: GeneratorService) {
    let text = '';
    const possible = data.getData();

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  };
}
