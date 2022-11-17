import { viteMockServe } from 'vite-plugin-mock';

export function configMockServerPlugin(_isBuild: boolean) {
  const mockServerPlugin = viteMockServe({
    mockPath: 'mock',
    localEnabled: !_isBuild,
    prodEnabled: _isBuild,
  });
  return mockServerPlugin;
}
