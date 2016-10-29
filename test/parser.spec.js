/*
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
*/

'use strict';

const expect = require('chai').expect;

const parser = require('../parser');

describe('Bunyan Streams Config Parser', () => {
  it('should be able to parse "process.stdout"', () => {
    const result = parser([{
      level: 'info',
      stream: 'process.stdout',
    }]);
    expect(result).to.have.deep.property('[0].level', 'info');
    expect(result).to.have.deep.property('[0].stream', process.stdout);
  });

  it('should be able to parse "process.stderr"', () => {
    const result = parser([{
      level: 'info',
      stream: 'process.stderr',
    }]);
    expect(result).to.have.deep.property('[0].level', 'info');
    expect(result).to.have.deep.property('[0].stream', process.stderr);
  });

  it('should be able to ignore log stream without stream', () => {
    const result = parser([{
      level: 'info',
      file: 'test',
    }]);
    expect(result).to.have.deep.property('[0].level', 'info');
    expect(result).to.not.have.deep.property('[0].stream');
  });
});
