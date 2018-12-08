import { PROPERTY_VALUE_TYPES, appPercyConfig } from 'config';
    expect(dispatchSpy.calls.count()).toEqual(1);
    expect(pageLoad).toEqual({ fileName: file.fileName, applicationName: file.applicationName, editMode: true });
    expect(dispatchSpy.calls.count()).toEqual(1);
    expect(pageLoad).toEqual({ fileName: null, applicationName: file.applicationName, editMode: false });
    ctx.store.next(new PageLoadSuccess({ environments: ['dev'] }));
  it('should reset app percy config when component destory', () => {
    appPercyConfig['key1'] = 'value1';
    appPercyConfig['key2'] = 'value2';

    ctx.component.ngOnDestroy();

    expect(appPercyConfig).toEqual({});
  });
