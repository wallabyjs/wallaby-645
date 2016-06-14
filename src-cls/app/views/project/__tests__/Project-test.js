'use strict'

import expect from 'expect';
import { shallowComp } from '../../../../__tests__/helpers'
import Project from '../Project';

describe('Project', () => {

  it('should show helloWorld', () => {
    const { output } = shallowComp(Project);
    expect(output.find('.project').length).toEqual(1);
  });

});
