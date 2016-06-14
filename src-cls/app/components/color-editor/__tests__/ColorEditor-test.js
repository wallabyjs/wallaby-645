'use strict'

import expect from 'expect';
import { shallowComp } from '../../../../__tests__/helpers'
import ColorEditor from '../ColorEditor';

describe('ColorEditor', () => {

  it('should show helloWorld', () => {
    const { output } = shallowComp(ColorEditor);
    expect(output.find('.color-editor').length).toEqual(1);
  });

});
