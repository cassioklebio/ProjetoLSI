import { VendasModule } from './vendas.module';

describe('VendasModule', () => {
  let vendasModule: VendasModule;

  beforeEach(() => {
    vendasModule = new VendasModule();
  });

  it('should create an instance', () => {
    expect(vendasModule).toBeTruthy();
  });
});
