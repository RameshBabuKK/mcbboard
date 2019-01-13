import { SchooleventsModule } from './schoolevents.module';

describe('SchooleventsModule', () => {
  let schooleventsModule: SchooleventsModule;

  beforeEach(() => {
    schooleventsModule = new SchooleventsModule();
  });

  it('should create an instance', () => {
    expect(schooleventsModule).toBeTruthy();
  });
});
