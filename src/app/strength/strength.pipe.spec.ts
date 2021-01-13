import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', () => {
  it('should display weak if the strength is 5', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  })
  
  it('should display strong if the strength is 10', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(10)).toEqual('10 (strong)');
  })
})