[![Build](https://travis-ci.org/ananseio/bunyan-streams-parser.svg)](https://travis-ci.org/ananseio/bunyan-streams-parser)
[![Code Climate](https://codeclimate.com/github/ananseio/bunyan-streams-parser/badges/gpa.svg)](https://codeclimate.com/github/ananseio/bunyan-streams-parser)
[![Test Coverage](https://codeclimate.com/github/ananseio/bunyan-streams-parser/badges/coverage.svg)](https://codeclimate.com/github/ananseio/bunyan-streams-parser/coverage)
[![License](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

# Bunyan Streams Config Parser
While we can specify bunyan to log to stream like process.stderr and process.stdout, we can only pass the write stream object directly into bunyan.  However, when we try to put the configuration into a configuration file or even environment variable, we cannot specify it to take string values like "process.stderr" or "process.stdout".

This small modules take an array of bunyan logging streams configuration and transform string from "process.stdout" and "process.stderr" to the actual standard output and standard error write stream respectively.

### Usage
```
const bunyanStreamsParser = require('bunyan-streams-parser');
const bunyan = require('bunyan');
const logger = bunyan.createLogger({
  name: config.get('appName'),
  // you can load the array from your favorite config module
  streams: bunyanStreamsParser([{
    level: 'info',
    stream: 'process.stdout', // after parsing, it will become the actual process.stdout write stream
  }]),
  serializers: { err: bunyan.stdSerializers.err },
});
```

## Author
Ananse Limited <opensource@ananse.io>

## License: Apache 2.0
Copyright 2016 Ananse Limited

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
