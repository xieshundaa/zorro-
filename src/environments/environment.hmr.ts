// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseURL: string = 'http://localhost:4200/assets/my-test-data/';

export const environment = {
  production: false,
  hmr: true,
  envName: 'hmr',
  apiURL: {
    login: baseURL + 'loggin.json',
    bars: baseURL + 'bar-chart.json',
    categories: baseURL + 'categories.json',
    customers: baseURL + 'customers.json',
    inboundDetails: baseURL + 'inbound-details.json',
    inboundRecords: baseURL + 'inbound-records.json',
    inventories: baseURL + 'inventories.json',
    inboundReceipt: baseURL + 'inbound-receipt.json',
    outReceipt: baseURL + 'outbound-receipt.json',
    outboundDetail: baseURL + 'outbound-detail.json',
    outboundRecords: baseURL + 'outbound-records.json',
    staffs: baseURL + 'staffs.json',
    vendors: baseURL + 'vendors.json',
    warehouses: baseURL + 'warehouses.json'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
