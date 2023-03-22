// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

'use strict';

function main(parent) {
  // [START alloydb_quickstart]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the parent resource. The required format is:
   *   * projects/{project}/locations/{location}
   *  Regardless of the parent specified here, as long it is contains a valid
   *  project and location, the service will return a static list of supported
   *  flags resources. Note that we do not yet support region-specific
   *  flags.
   */
  // const parent = 'abc123'
  /**
   *  Requested page size. Server may return fewer items than requested.
   *  If unspecified, server will pick an appropriate default.
   */
  // const pageSize = 1234
  /**
   *  A token identifying a page of results the server should return.
   */
  // const pageToken = 'abc123'

  // Imports the Alloydb library
  const {AlloyDBAdminClient} = require('@google-cloud/alloydb').v1alpha;

  // Instantiates a client
  const alloydbClient = new AlloyDBAdminClient();

  async function callListSupportedDatabaseFlags() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await alloydbClient.listSupportedDatabaseFlagsAsync(
      request
    );
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListSupportedDatabaseFlags();
  // [END alloydb_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));